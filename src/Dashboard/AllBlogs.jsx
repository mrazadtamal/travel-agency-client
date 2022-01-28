import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthProvider";

const AllBlogs = () => {
  const [data, setData] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [orderChange, setOrderChanged] = useState(false);

  useEffect(() => {
    axios
      .get("https://morning-river-13434.herokuapp.com/blogs")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUser, orderChange]);

  const handleDelete = (id) => {
    axios
      .delete(`https://morning-river-13434.herokuapp.com/deleteBlogs/${id}`)
      .then((res) => {
        console.log(res);
        setOrderChanged((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="w-full m-auto text-center text-3xl font-bold mt-11">
        Manage ALL Blogs
      </h1>
      <>
        {data.map((item) => (
          <div key={item._id} className="w-full ">
            <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
              <div className="bg-white w-full shadow rounded p-8">
                <div className="grid grid-cols-1 gap-8 mt-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-6/12 rounded overflow-hidden">
                      <img
                        className="object w-full h-60 "
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
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-white ring-2 ring-blue-500 bg-blue-500 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                      >
                        DELETE PRODUCT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    </>
  );
};

export default AllBlogs;
