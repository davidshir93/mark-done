import React from "react";
import "./Goal.css";

const Goal = ({ name, done, goalValue, measuring, id, handleDelete, handleSlideChange }) => {
  
  return (
    <div className="goal">
        <input type="range" min='0' value={done} max={goalValue} onChange={(event) => handleSlideChange(event, id)}></input>
        <div className="goalName">
        <i className="fas fa-atom"></i><h2>{name}</h2>
        </div>
        <div className="goalDetails">
            <h2>{done}</h2>
            <p>/ {goalValue} {measuring}</p>
        </div>
        <button type="button" onClick={() => handleDelete(id)}>
          <i className="fa fa-trash"></i>
        </button>
    </div>
  );
};

export default Goal;
