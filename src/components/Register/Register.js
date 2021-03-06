import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (loading) {
    return <Loading />;
  }

  if (user) {
      navigate('/')
  }

  const misMatch = <p className="text-red-600">Confirm password not matched</p>;
  const passwordLength = (
    <p className="text-red-600">Password length should be 6 or more</p>
  );

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      return toast(misMatch);
    }
    if (password?.length < 6) {
      return toast(passwordLength);
    }
    createUserWithEmailAndPassword(email, password);
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
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Please Signup
            </h1>
            <div className="w-full flex-1 mt-8">
              <SocialLogin />

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign up with e-mail
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <form onSubmit={handleRegister}>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    required
                  />
                  <p className="text-gray-500">
                    <small>
                      Already have account?{" "}
                      <span
                        onClick={() => navigate("/login")}
                        className="text-indigo-700 cursor-pointer font-semibold"
                      >
                        Login
                      </span>
                    </small>
                  </p>
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <AiOutlineUserAdd className="text-2xl" />
                    <span className="ml-3">Register</span>
                  </button>
                  <p className="text-red-600">
                    <small>{error?.message}</small>
                  </p>
                </form>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by digital electronic's
                  <a
                    href="#d"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                  </a>
                  and its
                  <a
                    href="#d"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-[url('https://i.ibb.co/ZfnPWTc/singup.png')]"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
