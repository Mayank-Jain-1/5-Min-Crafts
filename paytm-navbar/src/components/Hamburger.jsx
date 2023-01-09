import React from "react";
import Line from "./Line";

const Hamburger = (props) => {
  const {width,flag,setFlag,className} = props
  return (
    <button
      onClick={() => flag ? setFlag(false) : setFlag(true) }
      className={`h-4 w-${width} relative ${className}`}
    >
      <Line width={width} className={`top-0 ${ flag &&  "-rotate-45 translate-y-2" }`} />
      <Line width={width} className={`top-2 ${ flag &&  "scale-0" }`} />
      <Line width={width} className={`top-4 ${ flag &&  "rotate-45 -translate-y-2" }`} />
    </button>
  );
};

Hamburger.defaultProps = {
  width: "5",
}


export default Hamburger;
