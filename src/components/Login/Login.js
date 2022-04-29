import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { AiOutlineLogin } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading />;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
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
              Please Login
            </h1>
            <div className="w-full flex-1 mt-8">
              <SocialLogin />
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or Login with e-mail
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <form onSubmit={handleLogin}>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
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
                  <p className="text-gray-500">
                    <small>
                      Don't have account?{" "}
                      <span
                        onClick={() => navigate("/register")}
                        className="text-indigo-700 cursor-pointer font-semibold"
                      >
                        Sign up now
                      </span>
                    </small>
                  </p>
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <AiOutlineLogin className="text-2xl" />
                    <span className="ml-3">Login</span>
                  </button>
                  <p className="text-red-600">
                    <small>{error?.message}</small>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-[url('https://i.ibb.co/99HdNTT/login-1.png')]"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
