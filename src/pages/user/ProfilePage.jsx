import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const ProfilePage = () => {
  const { user, loading, logout } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen text-center">
        <div className="text-xl text-gray-600">
          <p>Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    try {
      logout();
      navigate('/');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center py-10">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg w-full max-w-lg p-8">
        <div className="flex flex-col items-center">
          <FaUserCircle className="text-6xl text-gray-500 mb-4 dark:text-gray-300" />
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-2">
            {user.displayName || "No Name"}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {user.email}
          </p>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
