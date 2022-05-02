import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const MyItem = () => {
  const [inventories, setInventories] = useState([]);
  const [user] = useAuthState(auth);
  const [updated, setUpdated] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getInventories = async () => {
      const url = `https://gentle-forest-27410.herokuapp.com/inventories?email=${user?.email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setInventories(data);
      } catch (err) {
        if (err.response.status === 401 || err.response.status === 403) {
          await signOut(auth);
          navigate("/login");
          toast("session time out, please login again");
        }
      }
    };
    getInventories();
  }, [user, updated]);

  // Handle Delete
  const handleDelete = (id) => {
    const confirmation = window.confirm("Are you sure you want to delete?");
    if (confirmation) {
      fetch(`https://gentle-forest-27410.herokuapp.com/myInventory?id=${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Item deleted");
          setUpdated(data);
        });
    }
  };

  // Sinner
  if (inventories.length <= 0) {
    return <Loading />;
  }

  return (
    <div className="container px-4 mx-auto mt-20 py-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-5">
        {inventories.length === 0 ? (
          <h3 className="text-center text-3xl pb-10">
            You don't have any item added
          </h3>
        ) : (
          ""
        )}
        {inventories?.map((inventory) => (
          <div key={inventory._id} className="mx-auto">
            <div>
              <div className="max-w-sm rounded-lg border bg-gray-300">
                <img
                  style={{ width: "100%", height: "250px" }}
                  className="rounded-t-lg"
                  src={inventory?.img}
                  alt=""
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {inventory.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 ">
                    <strong>Price:</strong> ${inventory?.price}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 ">
                    <strong>Quantity:</strong> {inventory?.quantity} in stock
                  </p>
                  <p className="mb-3 font-normal text-gray-700 ">
                    <strong>Supplier Name:</strong> {inventory?.supplierName}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 ">
                    <strong>Description:</strong> {inventory?.description}
                  </p>
                  <button
                    onClick={() => handleDelete(inventory._id)}
                    className="block border-2 rounded-lg bg-red-800 hover:border-red-800 px-4 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none w-full py-2 text-xl text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
