import React from "react";
import "./Filters.css";

const Filters = ({ listOrder, setListOrder }) => {

  const handleChange = () => {
    let newOrder;
    if (listOrder==='original') {
      newOrder = 'doneLast';
    } else {
      newOrder = 'original';
    }
    setListOrder(newOrder)
  }

  return <div>
    <input 
      type="checkbox" 
      onChange={handleChange}
      default="unchecked"
    />
      Seperate Done from Due
  </div>;
};

export default Filters;
