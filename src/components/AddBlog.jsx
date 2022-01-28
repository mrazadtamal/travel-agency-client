import React, { useContext } from "react";
import { AuthContext } from "./../Context/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddBlog = () => {
  const { currentUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    data.email = currentUser.email;
    axios
      .post("https://morning-river-13434.herokuapp.com/addblog", data)
      .then((res) => {
        console.log(res);
        alert("Your Order Submit");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="  flex items-center justify-center">
      <div className="w-full text-center  ">
        <h1 className=" text-3xl mt-10 text-center "> Add Your Blog</h1>

        <hr className="border-2 w-40 m-auto mt-2 mb-5 bg-blue-600" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block mt-3 text-md mb-2">Title</label>
          <input
            placeholder="Title"
            className="px-4 w-80 ring-2 ring-green-400 border-2 py-2 rounded-md text-sm outline-none"
            {...register("title", { required: true })}
          />
          <br />
          <label className="block mt-3 text-md mb-2">Authname</label>
          <input
            placeholder="Authname"
            className="px-4 w-80 ring-2 ring-green-400 border-2 py-2 rounded-md text-sm outline-none"
            {...register("authname", { required: true })}
          />
          <br />
          <label className="block mt-3 text-md mb-2">Place</label>
          <input
            placeholder="Place"
            className="px-4 w-80 ring-2 ring-green-400 border-2 py-2 rounded-md text-sm outline-none"
            {...register("name", { required: true })}
          />
          <br />
          <label className="block mt-3 text-md mb-2">Image</label>
          <input
            placeholder="Image"
            className="px-4 w-80 ring-green-400 ring-2 border-2 py-2 rounded-md text-sm outline-none"
            {...register("img", { required: true })}
          />
          <br />
          <label className="block mt-3 text-md mb-2">Country</label>
          <input
            placeholder="Country"
            className="px-4 w-80 ring-green-400 ring-2 border-2 py-2 rounded-md text-sm outline-none"
            {...register("country", { required: true })}
          />
          <br />
          <label className="block mt-3 text-md mb-2">Rating</label>
          <input
            placeholder="Rating"
            className="px-4 w-80 ring-green-400 ring-2 border-2 py-2 rounded-md text-sm outline-none"
            {...register("rating", { required: true })}
          />
          <br />
          <label className="block mt-3 text-md mb-2">Date</label>
          <input
            placeholder="Date"
            className="px-4 w-80 ring-green-400 ring-2 border-2 py-2 rounded-md text-sm outline-none"
            {...register("date", { required: true })}
          />
          <br />
          <label className="block mt-3 text-md mb-2">Description</label>
          <input
            placeholder="Description"
            className="px-4 w-80 ring-green-400 ring-2 border-2 py-2 rounded-md text-sm outline-none"
            {...register("description", { required: true })}
          />
          <br />

          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <input
            className="mt-4 mb-10 cursor-pointer px-4 ring-2 ring-green-500 py-2 border-2  rounded-lg bg-green-400 text-white"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
