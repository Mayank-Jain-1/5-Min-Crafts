import React from "react";
import Line from "./Line";

const Hamburger = (props) => {
  const {width,flag,className} = props
  const flag1 = true;
  return (
    <button
      className={`h-4 w-${width} relative ${className}`}
    >
      <Line width={width} className={`top-0 ${ flag1 &&  "rotate-[135deg] translate-y-2" }`} />
      <Line width={width} className={`top-2 ${ flag1 &&  "scale-0" }`} />
      <Line width={width} className={`top-4 ${ flag1 &&  "rotate-45 -translate-y-2" }`} />
    </button>
  );
};

Hamburger.defaultProps = {
  width: "5",
}


export default Hamburger;
