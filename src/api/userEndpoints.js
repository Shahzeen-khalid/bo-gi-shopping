import axiosInstance from "./axiosInstance";

const login = async (email, password) => {
  try {
    const response = await axiosInstance.get('/users');
    const users = response.data;
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      return { success: true, user };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  } catch (error) {
    console.error("Error during login:", error.message);
    return { success: false, message: "An error occurred during login. Please try again later." };
  }
};

const signUp = async (data) => {
  try {
    const response = await axiosInstance.post("/users", data);
    return { success: true, user: response.data };
  } catch (error) {
    console.error("Error during sign-up:", error.message);
    return { success: false, message: "An error occurred during sign-up. Please try again later." };
  }
};

export default { login, signUp };
