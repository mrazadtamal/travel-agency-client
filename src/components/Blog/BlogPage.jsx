import React from "react";
import Blog from "./Blog";

const BlogPage = () => {
  return (
    <div className="flex flex-wrap mt-16 bg-gray-100 w-full ">
      <div className=" hidden md:block w-2/12 bg-white rounded p-3 shadow-lg">
        <div className="flex items-center space-x-4 p-2 mb-5">
          <div>
            <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
              top-rated spots
            </h4>
          </div>
        </div>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="/"
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span className="text-gray-600"></span>
              <span>Notifications</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span className="text-gray-600"></span>
              <span>Personal messages</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span className="text-gray-600"></span>
              <span>My profile</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span className="text-gray-600"></span>
              <span>My orders</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span className=" text-gray-600"></span>
              <span>My wishlist</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span className="text-gray-600"></span>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span className="text-gray-600"></span>
              <span>Change password</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="w-10/12">
        <div className="p-4 text-2xl text-center font-bold text-gray-800">
          Travel Blog
        </div>
        <Blog />
      </div>
    </div>
  );
};

export default BlogPage;
