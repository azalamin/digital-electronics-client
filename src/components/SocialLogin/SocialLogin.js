import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
      <div className="flex flex-col items-center">
        <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
          <div className="bg-white p-1 rounded-full">
            <FcGoogle className="text-2xl" />
          </div>
          <span className="ml-4">Sign Up with Google</span>
        </button>

        <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
          <div className="bg-white p-1 rounded-full">
            <BsGithub className="text-2xl" />
          </div>
          <span className="ml-4">Sign Up with GitHub</span>
        </button>
      </div>
    );
};

export default SocialLogin;