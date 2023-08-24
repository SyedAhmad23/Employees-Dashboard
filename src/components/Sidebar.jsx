import React from "react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import PropTypes from "prop-types";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed h-screen bg-gradient-to-r from-green-700 to-gray-700  text-white w-48 transition-all ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 flex items-center">
          <h1 className="text-xl font-semibold">Task Manager</h1>
        </div>
        {isOpen && (
          <>
            <Link
              to="/users"
              className="p-4 flex items-center cursor-pointer hover:bg-gray-800"
            >
              <HiUser className="text-lg mr-2" />
              <p className="text-sm">Manage Users</p>
            </Link>
            <Link
              to="/dashboard"
              className="p-4 flex items-center cursor-pointer hover:bg-gray-800"
            >
              <HiChartPie className="text-lg mr-2" />
              <p className="text-sm">Dashboard</p>
            </Link>
            <Link
              to="/kanban"
              className="p-4 flex items-center cursor-pointer hover:bg-gray-800"
            >
              <HiViewBoards className="text-lg mr-2" />
              <p className="text-sm">Kanban</p>
            </Link>
            <Link
              to="/inbox"
              className="p-4 flex items-center cursor-pointer hover:bg-gray-800"
            >
              <HiInbox className="text-lg mr-2" />
              <p className="text-sm">Inbox</p>
            </Link>
            <Link
              to="/products"
              className="p-4 flex items-center cursor-pointer hover:bg-gray-800"
            >
              <HiShoppingBag className="text-lg mr-2" />
              <p className="text-sm">Products</p>
            </Link>
            <Link className="p-4 flex items-center hover:bg-gray-800">
              <HiArrowSmRight className="text-lg mr-2" />
              <p className="text-sm">Profile</p>
            </Link>
            <Link className="p-4 flex items-center hover:bg-gray-800">
              <FaUserCircle className="text-lg mr-2" />
              <p className="text-sm">Sign Up</p>
            </Link>
            <Link className="p-4 flex items-center hover:bg-gray-800">
              <HiChartPie className="text-lg mr-2" />
              <p className="text-sm">Upgrade to Pro</p>
            </Link>
            <Link className="p-4 flex items-center hover:bg-gray-800">
              <HiViewBoards className="text-lg mr-2" />
              <p className="text-sm">Documentation</p>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
