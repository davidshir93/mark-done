import React from "react";
import "./GoalsList.css";
import Goal from "../Goal/Goal";

const GoalsList = ({ goalsList, handleSlideChange, handleDelete }) => {
  return (
    <div>
      {goalsList.map((goalItem) => {
        return (
          <Goal
            goal={goalItem}
            key={goalItem.name}
            id={goalItem.id}
            name={goalItem.name} 
            goalValue={goalItem.goalValue}
            measuring={goalItem.measuring} 
            done={goalItem.done} 
            goalFrequency={goalItem.goalFrequency}
            handleSlideChange={handleSlideChange}
            handleDelete={handleDelete}
            completed={goalItem.completed}
          />
        );
      })}
    </div>
  );
};

export default GoalsList;
