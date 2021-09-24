import React from "react";
import "./GoalsList.css";
import Goal from "../Goal/Goal";

const GoalsList = (props) => {
  return (
    <div>
      {props.goalsList.map((goal) => {
        return (
          <Goal
          key={goal.name}
          name={goal.name} 
          goal={goal.goal}
          measuring={goal.measuring} 
          done={goal.done} 
          goalFrequency={goal.goalFrequency}
          handleSlideChange={props.handleSlideChange}
          />
        );
      })}
    </div>
  );
};

export default GoalsList;
