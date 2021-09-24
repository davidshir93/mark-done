import React from "react";
import "./Goal.css";

const Goal = (props) => {
  return (
    <div className="goal">
        <input type="range" min='0' max={props.goal} onChange={props.handleSlideChange}></input>
        <div className="goalName">
        <i class="fas fa-atom"></i><h2>{props.name}</h2>
        </div>
        <div className="goalDetails">
            <h2>{props.done}</h2>
            <p>/ {props.goal} {props.measuring}</p>
        </div>
    </div>
  );
};

export default Goal;
