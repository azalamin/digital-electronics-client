import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const InventoryDetails = () => {
  const { manageId } = useParams();
  const [inventory, setInventory] = useState({});
  const [updated, setUpdated] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/inventoryDetails?manageId=${manageId}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [manageId, updated]);

  const handleDelivered = () => {
    let quantity = inventory?.quantity;
    if (quantity > 0) {
      quantity = quantity - 1;
    }

    fetch(`http://localhost:5000/updateQuantity?manageId=${manageId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdated(data);
        if (quantity > 0) {
          toast("Stock updated");
        } else {
          toast("No Stock");
        }
      });
  };

  const handleRestock = (event) => {
    event.preventDefault();
    const userQuantity = event.target.number.value;
    const quantity = parseInt(inventory?.quantity) + parseInt(userQuantity);
    fetch(`http://localhost:5000/updateQuantity?manageId=${manageId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Added in stock");
        setUpdated(data);
        event.target.reset();
      });
  };

  return (
    <div className="container px-4 mx-auto">
      <div className="text-center py-5">
        <button
          onClick={() => navigate("/manage")}
          style={{ letterSpacing: "5px", transition: "0.2s" }}
          className="border-2 border-gray-800 text-gray-800 rounded-3xl font-bold py-4 px-5 mt-5 hover:bg-red-700 hover:border-red-700 hover:text-white"
        >
          MANAGE INVENTORIES
        </button>
      </div>
      <div className="md:flex justify-evenly md:mt-10 py-10">
        <div className="md:mr-10 my-10 md:my-0">
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md   mx-auto text-center">
            <img className="rounded-t-lg" src={inventory?.img} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-gray-900 ">
                {inventory?.name}
              </h5>
              <h5 className="mb-2 text-2xl font-bold text-gray-900 ">
                Price: {inventory?.price}
              </h5>
              <h5 className="mb-2 text-2xl font-bold text-gray-900 ">
                Quantity: {inventory?.quantity}
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">
                ID:
                <small> {inventory?._id}</small>
              </p>
              <p className="mb-3 font-normal text-gray-700 ">
                {inventory?.description}
              </p>
              <button
                onClick={handleDelivered}
                className="w-full bg-indigo-700 hover:bg-indigo-800 py-2 rounded-2xl text-lg text-white  transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
              >
                Delivered
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="p-4 max-w-sm rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 bg-gray-800 mx-auto">
            <form className="space-y-6 md:w-[400px]" onSubmit={handleRestock}>
              <h5 className="text-4xl font-medium text-white text-center">
                RESTOCK
              </h5>
              <div>
                <label
                  forhtml="number"
                  className="block mb-2 text-sm font-medium text-white "
                >
                  Items Quantity
                </label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 md:w-[80%]"
                  placeholder="Quantity"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-[80%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Restock the items
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
