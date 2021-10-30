import React from "react";
import "./Header.css";

const Header = ({ title }) => {
  if (title) {
    return <div>
    <h1>{title}</h1>
  </div>
  }
  let today = new Date();
  return <div>
    <h1>{today.toLocaleString("en-US", { day : '2-digit'}) + " " + today.toLocaleString("en-US", { month: "long" }) + " " + today.getFullYear()} </h1>
  </div>;
};

export default Header;
