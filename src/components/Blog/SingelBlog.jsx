import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingelBlog = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://morning-river-13434.herokuapp.com/blog/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="rounded  mt-14 overflow-hidden shadow-lg bg-white">
      <div className="  ">
        <img
          alt=""
          src={data.img}
          className="w-4/6 ml-10 flex items-center justify-center"
        />
      </div>
      <div className="px-2 pb-5">
        <h1 className="text-4xl mt-5 justify-between font-bold">
          {data.title}
        </h1>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-700 mt-5 leading-none text-xl font-bold">
              {data.description}
            </p>
            <p className="text-gray-700 mt-5 leading-none text-xl font-bold">
              {data.authname}
            </p>
            <p className="text-gray-700 mt-5 leading-none text-xl font-bold">
              {data.name}
            </p>
            <p className="text-gray-700 mt-5 leading-none text-xl font-bold">
              {data.country}
            </p>
            <p className="text-gray-700 mt-5 leading-none text-xl font-bold">
              rating: {data.rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingelBlog;
