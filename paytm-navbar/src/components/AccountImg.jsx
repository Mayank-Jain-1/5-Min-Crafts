import React from "react";
import Circle from "./Circle";

const AccountImg = (props) => {
  const {className} = props
  return (
    <Circle
      dia="8"
      color="darkBlue"
      className={` relative flex items-center justify-center overflow-hidden ${className}`}
    >
      <Circle dia="4" color='white' />
      <Circle dia="7" color='white' className="absolute -bottom-4" />
    </Circle>
  );
};

export default AccountImg;
