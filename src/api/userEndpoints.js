import axiosInstance from "./axiosInstance";

const fetchUser = async (userId) => {
  try {
    const users = (await axiosInstance.get('/users')).data;
    const user = users.find(u => u.id === userId);
    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    return null;
  }
};

const login = async ({ email, password }) => {
  try {
    const response = await axiosInstance.get('/users');
    const users = response.data;
    const user = users.find(u => u.email == email && u.password == password);
    console.log(user);

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

const signUp = async ({ name, email, password }) => {
  try {
    const response = await axiosInstance.post("/users", { name, email, password });
    return { success: true, user: response.data };
  } catch (error) {
    console.error("Error during sign-up:", error.message);
    return { success: false, message: "An error occurred during sign-up. Please try again later." };
  }
};

export default { fetchUser, login, signUp };
