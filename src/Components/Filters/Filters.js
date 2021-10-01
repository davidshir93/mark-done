import React from "react";
import "./Filters.css";

const Filters = ({ listOrder, handleListOrderChange }) => {
  return <div>
    <input type="checkbox" onChange={handleListOrderChange} />
    Seperate Done from Due
  </div>;
};

export default Filters;
