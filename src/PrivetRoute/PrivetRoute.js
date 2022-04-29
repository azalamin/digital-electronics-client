import React from "react";
import {
  useAuthState,
  useSendEmailVerification
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../components/Loading/Loading";
import auth from "../firebase.init";

const PrivetRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending] =
    useSendEmailVerification(auth);

  if (loading) {
    return <Loading />;
  }
  if (sending) {
    return toast("Sending.....");
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  const handleSendVerification = async () => {
    await sendEmailVerification(user.email);
    toast("Sent verification email");
  };

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="text-center py-5 mt-10">
        <h1 className="text-3xl text-red-600">Email is not verified</h1>
        <h2 className="text-3xl text-green-600">
          Please Verify Your email address
        </h2>
        <button
          onClick={handleSendVerification}
          className="bg-green-500 hover:bg-green-600 px-5 py-3 font-bold text-1xl rounded-lg mt-3 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
        >
          Send Verification
        </button>
      </div>
    );
  }

  return children;
};

export default PrivetRoute;
