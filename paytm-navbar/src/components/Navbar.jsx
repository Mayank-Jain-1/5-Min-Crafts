import React, { useState } from "react";
import logo from "../media/paytm_logo.png";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  

  return (
    <>
      <nav className="flex items-center p-12 justify-between border-2 shadow-lg">
      
        <Hamburger width='5' className="mr-9" />

        <img src={logo} alt="paytm logo" className="w-44" />
        <ul className="hidden lg:flex font-semibold space-x-6 text-base">
          <li>
            <a href="">Paytm for Consumer</a>
          </li>
          <li>
            <a href="">Paytm for Business</a>
          </li>
          <li>
            <a href="">Investor Relations</a>
          </li>
          <li>
            <a href="">Company</a>
          </li>
          <li>
            <a href="">Career</a>
          </li>
        </ul>
        <button className="bg-[#00BAF2] text-white px-[10px] py-[3px] flex items-center text-[15px] font-semibold rounded-3xl">
          Sign In
          <div className="bg-[#002970] w-[34px] h-[34px] rounded-full ml-2 relative flex items-center justify-center overflow-hidden ">
            <div className="bg-white w-4 h-4 rounded-full"></div>
            <div className="bg-white w-[26px] h-[26px] rounded-full absolute bottom-[-15px]"></div>
          </div>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
