import React, { Component } from 'react';

class AccountSettings extends Component {
  // Mock data for user profile details
  userProfile = {
    name: 'John Doe',
    email: 'john@example.com',
  };

  render() {
    return (
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
        {/* Update user profile details */}
        <form className="mb-6">
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              defaultValue={this.userProfile.name}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              defaultValue={this.userProfile.email}
            />
          </div>
          {/* Add more profile details */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Profile
          </button>
        </form>

        {/* Change password */}
        <form className="mb-6">
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2">
              Old Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="oldPassword"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2">
              New Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="newPassword"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2">
              Confirm Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="confirmPassword"
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Change Password
          </button>
        </form>

        {/* Manage subscription plan */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Subscription Plan</h3>
          <p className="text-white-700">Current Plan: Pro</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          >
            Change Plan
          </button>
        </div>

        {/* Link third-party accounts like Google */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Link Third-Party Accounts</h3>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          >
            Link Google Account
          </button>
        </div>

        {/* View usage statistics */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Usage Statistics</h3>
          {/* Display usage statistics */}
        </div>
      </div>
    );
  }
}

export default AccountSettings;
