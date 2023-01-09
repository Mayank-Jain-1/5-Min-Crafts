import React from "react";
import AccountImg from "./AccountImg";
import Circle from "./Circle";

const SignInBtn = () => {
  return (
    <button className="bg-skyBlue text-white px-3 py-1 flex items-center text-base font-semibold rounded-3xl">
      Sign In
      <AccountImg className="ml-2" />
    </button>
  );
};

export default SignInBtn;
