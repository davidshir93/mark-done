import React from "react";
import "./Goal.css";

const Goal = (props) => {
  return (
    <div className="goal">
        {/* <input type="range" min='0' max={props.goal} onChange={props.handleSlideChange}></input> */}
        <div className="goalName">
        <i className="fas fa-atom"></i><h2>{props.name}</h2>
        </div>
        <div className="goalDetails">
            <h2>{props.done}</h2>
            <p>/ {props.goal} {props.measuring}</p>
        </div>
        <button type="button" onClick={props.handleDelete(props.id)}>
          <i className="fa fa-trash"></i>
        </button>
    </div>
  );
};

export default Goal;
