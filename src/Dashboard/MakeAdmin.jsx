import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://morning-river-13434.herokuapp.com/admin", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <d>
      <div className="w-full m-auto flex justify-center ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block mt-3 text-md mb-2">
            Enter user email to make an admin.
          </label>
          <input
            placeholder="email"
            className="px-4 w-80 ring-2  border-2 py-2 rounded-md text-sm outline-none"
            {...register("email", { required: true })}
          />

          <input
            className="mt-4 cursor-pointer px-4 ring-2  py-2 border-2  rounded-lg  bg-purple-700 text-white"
            type="submit"
          />
        </form>
      </div>
      );
    </d>
  );
};

export default MakeAdmin;
