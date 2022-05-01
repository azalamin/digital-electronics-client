import axios from "axios";
import React from "react";
import {
  useAuthState,
  useSignInWithGithub,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [currentUser] = useAuthState(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Spinner
  if (loading || githubLoading) {
    return <Loading />;
  }

  const socialSignIn = async () => {
    const email = currentUser?.email;
    // Logged USER Redirect
    if (user || githubUser) {
      const data = await axios.post(`http://localhost:5000/login`, { email });
      localStorage.setItem("accessToken", data?.data?.accessToken);
      navigate(from, { replace: true });
    }
  };
  socialSignIn();

  return (
    <div className="flex flex-col items-center">
      {/* Handle Sign In With Google */}
      <button
        onClick={() => signInWithGoogle()}
        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
      >
        <div className="bg-white p-1 rounded-full">
          <FcGoogle className="text-2xl" />
        </div>
        <span className="ml-4">Sign Up with Google</span>
      </button>
      {/* Handle Sign In With Github */}
      <button
        onClick={() => signInWithGithub()}
        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
      >
        <div className="bg-white p-1 rounded-full">
          <BsGithub className="text-2xl" />
        </div>
        <span className="ml-4">Sign Up with GitHub</span>
      </button>
      {/* Handle Error */}
      <p>
        <small className="text-red-600">
          {error?.message || githubError?.message}
        </small>
      </p>
    </div>
  );
};

export default SocialLogin;
