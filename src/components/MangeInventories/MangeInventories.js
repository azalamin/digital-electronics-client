import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import "./MangeInventories.css";

const MangeInventories = () => {
  const navigate = useNavigate();
  const [inventories, setInventories] = useState([]);
  const [updated, setUpdated] = useState({});
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    fetch(`https://gentle-forest-27410.herokuapp.com/inventory?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, [updated, page, size]);

  useEffect(() => {
    fetch("https://gentle-forest-27410.herokuapp.com/inventoryCount")
      .then((res) => res.json())
      .then((data) => {
        const pages = Math.ceil(data?.totalInventory / 10);
        setPageCount(pages);
      });
  }, []);

  // Spinner
  if (inventories.length <= 0) {
    return <Loading />;
  }

  // Handle Delete Inventory
  const handleDelete = (id) => {
    // handle delete confirmation
    const confirmation = window.confirm("Are you sure you want to delete?");
    if (confirmation) {
      axios
        .delete(`https://gentle-forest-27410.herokuapp.com/inventory?inventoryId=${id}`)
        .then((res) => {
          toast("Item deleted");
          setUpdated(res);
        })
        .catch((error) => {
          toast(error?.message);
        });
    }
  };

  return (
    <section className="container px-4 mx-auto mt-10 py-10">
      <div className="text-center md:text-right md:pr-10 ">
        {/* Handle Add New Item */}
        <button
          onClick={() => navigate("/addInventory")}
          className="bg-green-700 hover:bg-green-800 px-8 py-3 text-xl text-white rounded-lg"
        >
          <span className="flex items-center">
            <AiOutlinePlus className="mr-3" />
            <p>Add new item</p>
          </span>
        </button>
      </div>
      {/* Inventory Management */}
      <div className="flex flex-col">
        <div className="overflow-x-auto md:overflow-hidden">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center">
                <thead className="border-b">
                  <tr className="bg-indigo-700 text-lg font-bold">
                    <th scope="col" className="text-white px-6 py-4 ">
                      #
                    </th>
                    <th scope="col" className="text-white px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="text-white px-6 py-4">
                      Quantity
                    </th>
                    <th scope="col" className="text-white px-6 py-4">
                      Price
                    </th>
                    <th scope="col" className="text-white px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                {inventories.map((inventory, index) => (
                  <tbody key={inventory?._id}>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                        <BsCheckCircleFill className="text-2xl mx-auto text-green-500" />
                      </td>
                      <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap border-r">
                        <div className="flex flex-col justify-center items-center">
                          <p>
                            <strong>{inventory?.name}</strong>
                          </p>
                          <p>
                            <img className="w-20" src={inventory?.img} alt="" />
                          </p>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap border-r">
                        {inventory?.quantity}
                      </td>
                      <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap border-r">
                        ${inventory?.price}
                      </td>
                      <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap border-r flex justify-center">
                        {/* Handle Inventory Delete BUTTON */}
                        <p
                          onClick={() => handleDelete(inventory?._id)}
                          className="cursor-pointer p-3 rounded-full bg-red-100 hover:bg-red-700 hover:text-white text-red-700 transition-shadow"
                        >
                          <RiDeleteBin6Line className="text-3xl" />
                        </p>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
              <div className="pagination py-10">
                {[...Array(pageCount).keys()].map((number) => (
                  <button
                    className={
                      number === page ? "active-button" : "inactive-button"
                    }
                    onClick={() => setPage(number)}
                    key={number}
                  >
                    {number + 1}
                  </button>
                ))}
                <select
                  className="rounded-lg"
                  name=""
                  id=""
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option value="5">5</option>
                  <option selected value="10">
                    10
                  </option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MangeInventories;
