import React from "react";
import "./GoalsList.css";
import Goal from "../Goal/Goal";

const GoalsList = (props) => {
  return (
    <div>
      {props.goalsList.map((goalItem) => {
        return (
          <Goal
          goal={goalItem}
          key={goalItem.name}
          id={goalItem.id}
          name={goalItem.name} 
          goal={goalItem.goal}
          measuring={goalItem.measuring} 
          done={goalItem.done} 
          goalFrequency={goalItem.goalFrequency}
          handleSlideChange={props.handleSlideChange}
          handleDelete={props.handleDelete}
          />
        );
      })}
    </div>
  );
};

export default GoalsList;
