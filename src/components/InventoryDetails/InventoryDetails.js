import React from "react";

const InventoryDetails = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="md:flex justify-evenly g-5 mt-10">
        <div className="">Hello Inventory Details</div>
        <div>
          <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto ">
            <form className="space-y-6" action="#">
              <h5 className="text-4xl font-medium text-gray-900 dark:text-white text-center">
                RESTOCK
              </h5>
              <div>
                <label
                  forhtml="number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Items Quantity
                </label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Quantity"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
