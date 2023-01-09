import React, { useState } from "react";
import logo from "../media/paytm_logo.png";
import Hamburger from "./Hamburger";
import Navlinks from "./Navlinks";
import SignInBtn from "./SignInBtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="flex items-center p-3 lg:p-10 justify-between border-2 shadow-lg">
        <div className="flex items-center">
          <Hamburger
            width="5"
            className="mr-9 lg:hidden"
            flag={isOpen}
            setFlag={setIsOpen}
          />
          <img src={logo} alt="paytm logo" className="w-32 lg:w-44" />
        </div>
        <Navlinks className="hidden lg:flex" />
        <SignInBtn />
      </div>
      {isOpen && <Navlinks className="lg:hidden space-y-7" />}
    </nav>
  );
};

export default Navbar;
