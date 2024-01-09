import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileDashboard extends Component {
  render() {
    return (
      <div className="min-h-screen">
        <div className="bg-[#002E3D] text-white min-h-screen">
          <div className="container mx-auto py-8 grid grid-cols-3 gap-4">
            {/* User Details Section */}
            <div className="col-span-3 sm:col-span-1 pr-8">
              <h1 className="text-2xl font-bold mb-4">Account</h1>

              <div className="bg-[rgba(255,255,255,0.23)] p-6 rounded shadow flex flex-col items-center">
                <h2>User Profile</h2>
                <img
                  src="src\assets\pfp.png"
                  alt="Profile Photo"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">John Doe</h2>
                  <p className="text-white-600">john@example.com</p>
                  <p className="text-white-700 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            {/* Account Details Section */}
            <div className="col-span-2 sm:col-span-1">
              <h2 className="text-lg font-semibold mb-2 mt-3">Account Details</h2>
              <div className="bg-[rgba(255,255,255,0.23)] p-6 rounded shadow">
                <p className="text-white-700">
                  <span className="font-semibold">Current Plan:</span> Pro
                </p>
                <p className="text-white-700 mt-2">
                  <span className="font-semibold">Status:</span> Active
                </p>
              </div>
            </div>

            {/* Usage Metrics Section */}
            <div className="col-span-3 sm:col-span-1 mt-3">
              <h2 className="text-lg font-semibold mb-2">Usage Metrics</h2>
              <div className="bg-[rgba(255,255,255,0.23)] p-6 rounded shadow">
                <p className="text-white-700">
                  <span className="font-semibold">Graphs Created:</span> 25
                </p>
                <p className="text-white-700 mt-2">
                  <span className="font-semibold">Graphs Shared:</span> 10
                </p>
                <p className="text-white-700 mt-2">
                  <span className="font-semibold">Papers Collected:</span> 50
                </p>
              </div>
            </div>

            {/* Recent Activity and Buttons Section */}
            <div className="col-span-5 sm:col-span-4 ">
              {/* Recent Activity Section */}
              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2 ">Recent Activity Feed</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white-500">
                  {/* Display recent activity items */}
                  {/* Use a similar card-like structure for each activity */}
                  <div className="bg-[rgba(255,255,255,0.23)] rounded shadow p-4">
                    <p className="text-white-700">Graph Title 1</p>
                    <p className="text-white-500 text-sm mt-1">Date Created: 2022-01-08</p>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.23)] rounded shadow p-4">
                    <p className="text-white-700">Graph Title 2</p>
                    <p className="text-white-500 text-sm mt-1">Date Created: 2022-01-09</p>
                  </div>
                  {/* ... Additional recent activity items */}
                </div>
              </div>

              {/* Buttons Section */}
              <div className="mt-6">
                <Link to="create-new-graph">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                    Create New Graph
                  </button>
                </Link>

                <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                  Share Graphs
                </button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">Upload Papers</button>
              </div>
            </div>
          </div>

          {/* List of Saved Graphs Section */}
          <div className="mt-6 container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {/* Display saved graphs */}
            {/* Use a similar card-like structure for each saved graph */}
            <div className="bg-[rgba(255,255,255,0.23)] p-4 rounded shadow col-span-2 sm:col-span-1 lg:col-span-1">
              <p className="text-white-700">Saved Graph 1</p>
              <p className="text-white-500 text-sm mt-1">Date Created: 2022-01-08</p>
              {/* Add an image or thumbnail for the graph */}
            </div>
            <div className="bg-[rgba(255,255,255,0.23)] p-4 rounded shadow col-span-2 sm:col-span-1 lg:col-span-1">
              <p className="text-white-700">Saved Graph 2</p>
              <p className="text-white-500 text-sm mt-1">Date Created: 2022-01-09</p>
              {/* Add an image or thumbnail for the graph */}
            </div>
            {/* ... Additional saved graphs */}
          </div>

          {/* Link to Favourites and Collections pages */}
          <div className="mt-6 container mx-auto">
            <a href="/favourites" className="text-blue-500 hover:underline mr-4">
              View Favourites
            </a>
            <a href="/collections" className="text-blue-500 hover:underline mr-4">
              View Collections
            </a>
            <br />
          </div>

          <div className="mt-6 container mx-auto">
            <h3 className="text-zinc-400 dark:text-white">Navigation</h3>
            <Link to="/graph-details" className="text-slate-500 text-xs hover:underline mr-4">
              Graph details page
            </Link>
            <Link to="/account-settings" className="text-slate-500 text-xs hover:underline mr-4">
              Account Setting
            </Link>
            <Link to="/graph-details" className="text-slate-500 text-xs hover:underline mr-4">
              Graph Details
            </Link>
            <Link to="/pricing" className="text-slate-500 text-xs hover:underline mr-4">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileDashboard;
