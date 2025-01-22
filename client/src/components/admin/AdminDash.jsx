
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminDash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in sessionStorage
    const token = sessionStorage.getItem('authToken');

    // If no token, redirect to login page
    if (!token) {
      navigate('/'); // Redirect to the login page
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear the token from sessionStorage on logout
    sessionStorage.removeItem('authToken');
    navigate('/'); // Redirect to the login page
  };

  return (
    <AdminSidebar>
      <div className="w-full  bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Admin Dashboard</h2>

        <div className="flex justify-between items-center mb-6">
          <p className="text-lg text-gray-700">Welcome back! You’re successfully logged in.
          Great to see you again! 🚀</p>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
          >
            Logout
          </button>
        </div>

        {/* Other Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#487171] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
            <p className="text-white ">Some general stats or details about the user or app</p>
          </div>
          <div className="bg-[#487171] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-3">Recent Activity</h3>
            <p className="text-white">List or details of recent activities of the user</p>
          </div>
          <div className="bg-[#487171] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-3">Settings</h3>
            <p className="text-white">Links to user settings or preferences</p>
          </div>
        </div>
      </div>
    </AdminSidebar>
  );
};

export default AdminDash;
