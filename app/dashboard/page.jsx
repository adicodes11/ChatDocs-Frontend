"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import for routing

const DashboardPage = () => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    // Handle logout logic here (e.g., clear session or token)
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white transition-all duration-300 ease-in-out flex flex-col items-center p-4 space-y-6`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "<<" : ">>"}
        </button>
        <h1 className="text-xl font-bold text-center">Dashboard</h1>
        <ul className="flex flex-col items-center space-y-6 w-full">
          <li>
            <a href="#" className="text-white hover:text-gray-200 transition duration-300">
              Overview
            </a>
          </li>
          <li>
            <a href="#documents" className="text-white hover:text-gray-200 transition duration-300">
              Documents
            </a>
          </li>
          <li>
            <a href="#settings" className="text-white hover:text-gray-200 transition duration-300">
              Settings
            </a>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Welcome, User</h2>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              New Document
            </button>
          </div>
        </div>

        {/* Overview Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Total Documents</h3>
            <p className="text-xl">5 Documents</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Recent Activity</h3>
            <p className="text-xl">Reviewed 2 documents today</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Pending Tasks</h3>
            <p className="text-xl">1 Task Pending</p>
          </div>
        </div>

        {/* Documents Section */}
        <div id="documents" className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-semibold mb-4">Documents</h3>
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left text-gray-700">Document Name</th>
                <th className="py-2 text-left text-gray-700">Uploaded On</th>
                <th className="py-2 text-left text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder for Documents */}
              <tr>
                <td className="py-2 text-gray-600">Document 1</td>
                <td className="py-2 text-gray-600">01/01/2024</td>
                <td className="py-2">
                  <button className="text-blue-600 hover:text-blue-800">View</button>
                </td>
              </tr>
              <tr>
                <td className="py-2 text-gray-600">Document 2</td>
                <td className="py-2 text-gray-600">02/01/2024</td>
                <td className="py-2">
                  <button className="text-blue-600 hover:text-blue-800">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Settings Section */}
        <div id="settings" className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Settings</h3>
          <p className="text-lg">Update your profile, change password, and adjust other settings.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
