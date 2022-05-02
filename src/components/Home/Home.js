import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Faq from "../Faq/Faq";
import InventoryChart from "../InventoryChart/InventoryChart";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [inventories, setInventories] = useState([]);

  // handle load 6 inventory for home page
  useEffect(() => {
    fetch(
      `https://gentle-forest-27410.herokuapp.com/inventory?homeInventory=${6}`
    )
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  return (
    <>
      <section
        style={{ backgroundColor: "#100827", minHeight: "90vh" }}
        className="text-white"
      >
        <div className="md:flex justify-between items-center container mx-auto px-4 md:pt-10 pb-20">
          <div className="">
            <img
              className="md:mt-10 pt-5"
              src="https://i.ibb.co/chPyQpW/Logistics-amico-1-1.png"
              alt=""
            />
          </div>
          <div className="order-last md:order-first mt-20 md:mt-0 pb-14 md:pb-0 text-center md:text-left">
            <div className="mx-0 md:mx-10">
              <h3 className="text-4xl sm:text-6xl font-bold font-mono">
                WELCOME TO
              </h3>
              <h3 className="text-4xl sm:text-6xl font-bold font-mono">
                DIGITAL
              </h3>
              <h3 className="text-4xl sm:text-6xl font-bold font-mono">
                ELECTRONICS
              </h3>
              <button
                onClick={() => navigate("/manage")}
                style={{ letterSpacing: "5px", transition: "0.2s" }}
                className="border-2 rounded-3xl font-bold py-4 px-5 mt-5 hover:bg-red-700 hover:border-red-700"
              >
                INVENTORIES
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 mx-auto mt-10 py-10">
        <h1 className="text-4xl sm:text-5xl text-center font-bold font-mono mb-20">
          Inventories
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-5 bg-white">
          {inventories.map((inventory) => (
            <div key={inventory._id} className="mx-auto">
              <div>
                <div style={{transition: '0.5s'}} className="max-w-sm rounded-lg border hover:bg-gray-100 hover:scale-95">
                  <img className="rounded-t-lg" src={inventory?.img} alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold text-gray-900 ">
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
                      onClick={() => navigate(`/manage/${inventory?._id}`)}
                      className="block border-2 rounded-lg bg-indigo-700 hover:bg-indigo-900 px-4 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none w-full py-2 text-xl text-white"
                    >
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center py-10">
          <button
            onClick={() => navigate("/manage")}
            style={{ letterSpacing: "5px", transition: "0.2s" }}
            className="border-2 border-gray-800 text-gray-800 rounded-3xl font-bold py-4 px-5 mt-5 hover:bg-red-700 hover:border-red-700 hover:text-white"
          >
            MANAGE INVENTORIES
          </button>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="bg-gray-50 py-10 px-4">
          <h1 className="text-4xl sm:text-5xl text-center font-bold font-mono mb-20">
            OUR <span className="text-indigo-700">STOCKS</span>
          </h1>
          <InventoryChart inventories={inventories}></InventoryChart>
        </div>
        <div>
          <Faq></Faq>
        </div>
      </section>
    </>
  );
};

export default Home;
