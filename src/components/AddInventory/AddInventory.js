import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddInventory = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/inventory", data)
      .then(function (response) {
        toast("Posted inventory");
        reset();
      })
      .catch(function (error) {
        toast(error?.message);
      });
  };

  return (
    <div className="py-20">
      <h1 className="text-4xl text-center font-bold font-mono mb-5">
        ADD INVENTORY
      </h1>
      <div className="w-5/6 md:w-3/6 mx-auto">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="border py-3 mb-3 px-4"
            placeholder="Email"
            value={user?.email}
            readOnly
            {...register("email")}
          />
          <input
            className="border py-3 mb-3 px-4"
            placeholder="Name"
            {...register("name")}
          />
          <input
            className="border py-3 mb-3 px-4"
            placeholder="Price"
            {...register("price", { required: true })}
          />
          <input
            className="border py-3 mb-3 px-4"
            type="number"
            placeholder="Quantity"
            {...register("quantity", { required: true })}
          />
          <input
            className="border py-3 mb-3 px-4"
            placeholder="Supplier Name"
            {...register("supplierName", { required: true })}
          />
          <input
            className="border py-3 mb-3 px-4"
            placeholder="Photo URL"
            {...register("img", { required: true })}
          />
          <textarea
            className="border py-3 mb-3 px-4"
            placeholder="Description"
            {...register("description", { required: true })}
          />
          <input
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 py-3 text-lg text-white cursor-pointer rounded-md"
          />
        </form>
      </div>
    </div>
  );
};

export default AddInventory;
