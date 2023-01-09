import React from "react";

const Circle = (props) => {
  const { dia, color, className } = props;
  const style = `bg-${color} w-${dia} h-${dia} rounded-full ${className}`;
  return (
    <>
      <div className={style}>{props.children}</div>
    </>
  );
};

Circle.defaultProps = {
  dia: 5,
  color: "white",
};

export default Circle;
