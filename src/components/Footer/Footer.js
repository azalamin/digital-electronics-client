import React from "react";
import { FaFacebook, FaGooglePlus, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-1 bg-indigo-800 text-white py-8 sm:py-12 mt-5">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">Features</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  to="/"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/manage"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Mange Inventories
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="#team"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Team feature
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6">Resources</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#resource"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#resourceName"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">About</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#about"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Team
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#location"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Locations
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#privacy"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Privacy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#term"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Help</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#support"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Support
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#help"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#contact"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
              Stay connected
            </h5>
            <div className="flex sm:justify-center xl:justify-start">
              <a href="#facebook" className="mr-2">
                <FaFacebook className="text-3xl hover:text-gray-400" />
              </a>
              <a href="#twitter" className="mr-2">
                <FaTwitter className="text-3xl hover:text-gray-400" />
              </a>
              <a href="#google" className="mr-2">
                <FaGooglePlus className="text-3xl hover:text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
          <div className="sm:w-full px-4 md:w-1/6">
            <strong>FWR</strong>
          </div>
          {/* Address And Contact Area */}
          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Address</h6>
            <address className="not-italic mb-4 text-sm">
              123 6th St.
              <br />
              Dhaka, Block 32, Dhanmondi.
            </address>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Contact Info</h6>
            <p className="mb-4 text-sm">
              <em>01628890779</em> <br />
              <em>azalamins@gmail.com</em>
            </p>
          </div>
          <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
            <button className="px-4 py-2 bg-green-800 hover:bg-purple-900 rounded text-white">
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center mt-10 text-white">
          All Copyrights &copy; Reserved by <strong>Digital Electronics</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
