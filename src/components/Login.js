import React, { useState } from "react";
import Header from "./Header";
import { loginConstants } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const getTitle = () => {
    return isSignInForm ? loginConstants.sign_in : loginConstants.sign_up;
  };

  const getFormFooterMsg = () => {
    return isSignInForm
      ? loginConstants.sign_up_message
      : loginConstants.sign_in_message;
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        {" "}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_small.jpg"
          alt="bgImage"
        />
      </div>
      <form className="w-1/4 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{getTitle()}</h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-700"
        />
        <button className="p-4 my-6 w-full bg-red-700 rounded-lg">
          {getTitle()}
        </button>
        <p className="cursor-pointer" onClick={toggleSignIn}>
          {getFormFooterMsg()}
        </p>
      </form>
    </div>
  );
};

export default Login;
