import React, { createContext, useState } from "react";
import userEndpoints from "../api/userEndpoints";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const userId = localStorage.getItem("session") || null;
    try {
      if (userId) {
        const user = await userEndpoints.fetchUser(userId);
        setUser(user);
        setLoading(false);
      }
      else {
        setLoading(false);
      }
    } catch {
      logout();
      setLoading(false);
    }
  };

  const login = async (data) => {
    const response = await userEndpoints.login(data);
    if (response.success) {
      localStorage.setItem("session", response.user.id);
      setUser(response.user);
      return response;
    }
    return response;
  };

  const signUp = async (data) => {
    const response = await userEndpoints.signUp(data);
    console.log("signup", response)
    if (response.success) {
      localStorage.setItem("session", response.user.id);
      setUser(response.user);
      return response;
    }
    return response;
  };

  const logout = () => {
    localStorage.removeItem("session");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signUp, fetchUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
