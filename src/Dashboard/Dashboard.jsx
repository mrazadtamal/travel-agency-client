import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-wrap mt-16 bg-gray-100 w-full ">
        <div className=" hidden md:block w-2/12 bg-white rounded p-3 shadow-lg">
          <div className="flex items-center space-x-4 p-2 mb-5">
            <div>
              <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
                Admin Dashboard
              </h4>
            </div>
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/allBlogs"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600"></span>
                <span>All Blogs</span>
              </Link>
            </li>
            <li>
              <a
                href="/makeAdmin"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600"></span>
                <span>Make Admin</span>
              </a>
            </li>
            <li>
              <a
                href="/addblog"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600"></span>
                <span>Add A Blog</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
