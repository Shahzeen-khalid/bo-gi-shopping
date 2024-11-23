import React, { createContext, useState } from "react";
import userEndpoints from "../api/userEndpoints";
import { data } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = () => {
    const userId = localStorage.getItem("session") || null;
    try {
      if (userId) {
        setUser(true);
        setLoading(false);
      }
    } catch {
      logout();
      setLoading(false);
    }
  };

  const login = async (data) => {
      const response = await userEndpoints.login(data);
      console.log(response);
      
      if (response.success) {
        localStorage.setItem("session", data.id);
        setUser();
        return { success: true };
      }
      return { success: false };
  };

  const signUp = async (data) => {
    const response = await userEndpoints.signUp(data);
    console.log("signup", response)
  };

  const logout = () => {
    localStorage.removeItem("session");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, fetchUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
