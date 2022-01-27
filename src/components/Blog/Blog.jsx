import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/blogs")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const newData = data.slice(0, 10);

  return (
    <>
      {newData.map((item) => (
        <div className="w-full ">
          <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
            <div className="bg-white w-full shadow rounded p-8">
              <div className="grid grid-cols-1 gap-8 mt-6">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-6/12 rounded overflow-hidden">
                    <img
                      className="object w-full h-auto"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                    <h2 className="text-lg font-semibold leading-tight text-gray-800">
                      {item.title}
                    </h2>
                    <p className="leading-normal pt-2">
                      Author : {item.authname}
                    </p>
                    <p className="leading-normal pt-2">{item.name}</p>
                    <p className="leading-normal pt-2">{item.description}</p>
                    <Link
                      className="leading-normal pt-2 hover:underline text-blue-600"
                      to="/"
                    >
                      Read more...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog;
