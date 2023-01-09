import React from "react";

const Navlinks = (props) => {
  const { className } = props;

  return (
    <ul className={className + " font-semibold space-x-6 text-base"}>
      <li></li>
      <li>
        <a href="nowhere">Paytm for Consumer</a>
      </li>
      <li>
        <a href="nowhere">Paytm for Business</a>
      </li>
      <li>
        <a href="nowhere">Investor Relations</a>
      </li>
      <li>
        <a href="nowhere">Company</a>
      </li>
      <li>
        <a href="nowhere">Career</a>
      </li>
    </ul>
  );
};

export default Navlinks;
