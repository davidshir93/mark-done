import React from "react";
import "./Filters.css";

const Filters = ({ listOrder, setListOrder }) => {

  const handleChange = () => {
    let newOrder;
    if (listOrder === 'original') {
      newOrder = 'doneLast';
    } else {
      newOrder = 'original';
    }
    setListOrder(newOrder)
  }

  return <div className="filters">
    <input 
      type="checkbox" 
      onChange={handleChange}
      default="unchecked"
    />
    Show Due Goals First
  </div>;
};

export default Filters;
