import { Transition } from "@headlessui/react";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  // Handle Logout user
  const logOut = async() => {
      await signOut(auth);
      navigate('/login')
  }
  return (
    <nav className="bg-indigo-700 md:py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex lg:block lg:pt-4 items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h3
                className="text-white border-l-2 pl-1 text-lg font-bold cursor-pointer"
                onClick={() => navigate("/")}
              >
                DIGITAL ELECTRONICS
              </h3>
            </div>
            <div className="hidden lg:block md:ml-auto">
              <div className="ml-10 flex items-baseline space-x-4">
                <CustomLink
                  to="/"
                  className=" hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
                >
                  Home
                </CustomLink>

                <CustomLink
                  to="/manage"
                  className="text-gray-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
                >
                  Manage Inventories
                </CustomLink>

                {user && (
                  <>
                    <CustomLink
                      to="/addInventory"
                      className="text-gray-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Add Item
                    </CustomLink>

                    <CustomLink
                      to="/myItem"
                      className="text-gray-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      My Items
                    </CustomLink>
                  </>
                )}

                <CustomLink
                  to="/blog"
                  className="text-gray-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </CustomLink>
                
                {user ? (
                  <button
                    onClick={logOut}
                    className="border-2 bg-red-700 hover:bg-indigo-700 hover:border-white-700 px-4 py-1 text-white rounded-sm transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="border-2 hover:bg-red-700 hover:border-red-700 px-4 py-1 text-white rounded-sm transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Responsive Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="lg:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <CustomLink
                to="/"
                className=" hover:bg-red-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </CustomLink>

              <CustomLink
                to="/manage"
                className="text-gray-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium "
              >
                Manage Inventories
              </CustomLink>

              {user && (
                <>
                  <CustomLink
                    to="/addInventory"
                    className="text-gray-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Add Item
                  </CustomLink>

                  <CustomLink
                    to="/myItem"
                    className="text-gray-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    My Items
                  </CustomLink>
                </>
              )}

              <CustomLink
                to="/blog"
                className="text-gray-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Blog
              </CustomLink>
              {user ? (
                <button
                  onClick={logOut}
                  className="border-2 bg-red-700 hover:bg-indigo-700 hover:border-white-700 px-4 py-1 text-white rounded-sm transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="border-2 hover:bg-red-700 hover:border-red-700 px-4 py-1 text-white rounded-sm transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Header;
