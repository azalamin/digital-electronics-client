import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { AiOutlineRollback } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleReset = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    sendPasswordResetEmail(auth, email)
    .then(() => {
        toast("Password reset email sent!");
    })
    .catch((error) => {
        toast(error?.message)
    })
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <h3
              onClick={() => navigate("/")}
              className="text-center font-bold text-indigo-700 cursor-pointer"
            >
              DIGITAl ELECTRONICS
            </h3>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold text-red-500">
              Forgot Password
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <form onSubmit={handleReset}>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <GrPowerReset className="text-2xl" />
                    <span className="ml-3">Reset password</span>
                  </button>
                  <div
                    onClick={() => navigate("/login")}
                    className="font-bold cursor-pointer mt-1 text-indigo-600 flex justify-end"
                  >
                    <AiOutlineRollback className="text-2xl" />
                    <p>Login</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-[url('https://i.ibb.co/TPHXGnF/forgot-panna.png')]"></div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
