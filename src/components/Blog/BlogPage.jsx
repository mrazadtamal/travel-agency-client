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
              <span>Abruzzo, Italy</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span className="text-gray-600"></span>
              <span>Budapest, Hungary</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span className="text-gray-600"></span>
              <span>Burgundy, France</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span className="text-gray-600"></span>
              <span>British Virgin Islands</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span className=" text-gray-600"></span>
              <span>Costa Smeralda, Sardiniat</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span className="text-gray-600"></span>
              <span>Doha, Qatar</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span className="text-gray-600"></span>
              <span>Edinburgh, Scotland</span>
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
