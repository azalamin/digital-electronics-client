import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Bar, BarChart, CartesianGrid, Legend,
    ResponsiveContainer, Tooltip, XAxis,
    YAxis
} from "recharts";

const Home = () => {
  const navigate = useNavigate();
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/inventory?homeInventory=${6}`)
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-5">
          {inventories.map((inventory) => (
            <div key={inventory._id} className="mx-auto">
              <div>
                <div className="max-w-sm rounded-lg border bg-gray-800">
                  <img className="rounded-t-lg" src={inventory?.img} alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {inventory.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <strong>Price:</strong> ${inventory?.price}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <strong>Quantity:</strong> {inventory?.quantity} in stock
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <strong>Supplier Name:</strong> {inventory?.supplierName}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <strong>Description:</strong> {inventory?.description}
                    </p>
                    <button
                      onClick={() => navigate(`/manage/${inventory?._id}`)}
                      className="block border-2 rounded-lg hover:bg-indigo-800 hover:border-indigo-800 px-4 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none w-full py-2 text-xl text-white"
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
      <section className="py-20 container px-4 mx-auto">
        <h1 className="text-4xl sm:text-5xl text-center font-bold font-mono mb-20">
          OUR STOCK
        </h1>
        <ResponsiveContainer className='w-100' height={450}>
          <BarChart
            data={inventories}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" stackId="a" fill="#8884d8" />
            <Bar dataKey="quantity" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </>
  );
};

export default Home;
