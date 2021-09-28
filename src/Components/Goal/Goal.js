import React, { useEffect } from "react";
import "./Goal.css";

const Goal = ({ name, done, goalValue, measuring, id, color, handleDelete, handleSlideChange }) => {

  let position = done / goalValue * 100;
  let colorGradient = {background: `linear-gradient(90deg, ${color} ${position}%, silver ${position}%)`}
  let sliderBackground = colorGradient;

  useEffect(() => {
    position = done / goalValue * 100;
    colorGradient = {background: `linear-gradient(90deg, ${color} ${position}%, silver ${position}%)`};
  }, [done]);

  return (
    <div className={`goal ${ done - goalValue >= 0 ? 'completed' : ''}`}>
        <input 
          type="range" 
          min='0' 
          value={done} 
          max={goalValue} 
          id='slider'
          style={sliderBackground}
          onChange={(event) => handleSlideChange(event, id)} 
        />
        <div className="goalElementsContainer">
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
    </div>
  );
};

export default Goal;
