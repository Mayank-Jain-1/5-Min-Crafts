import React from "react";

const Hamburger = (props) => {
  const {width,height,flag} = props
  return (
    <button
      id="hamburger"
      className={`lg:hidden h-[14px] w-${width} mr-[38px] relative`}
    >
      <div className={`w-${width} h-0 border-y border-black absolute top-0  duration-200`}></div>
      <div className={`w-${width} h-0 border-y border-black absolute top-[${height*4}px] duration-200`}></div>
      <div className={`w-${width} h-0 border-y border-black absolute top-[${height*8}px] duration-200`}></div>
    </button>
  );
};

Hamburger.defaultProps = {
  width: "5",
}


export default Hamburger;
