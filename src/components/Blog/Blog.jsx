import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://limitless-temple-20432.herokuapp.com/cars")
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
                      src="https://images.unsplash.com/photo-1626169740183-702d6421beeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                  </div>
                  <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                    <h2 className="text-lg font-semibold leading-tight text-gray-800">
                      Ready to use components
                    </h2>
                    <p className="leading-normal pt-2">
                      It provides a very simple start, no need to write a lot of
                      code, you just import it and start the primitive
                      components and create the ones you need.
                    </p>
                    <a
                      className="leading-normal pt-2 hover:underline text-blue-600"
                      href="/"
                    >
                      Read more...
                    </a>
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
