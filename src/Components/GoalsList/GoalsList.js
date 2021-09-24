import React from "react";
import "./GoalsList.css";
import Goal from "../Goal/Goal";

const GoalsList = (props) => {
  return (
    <div>
      {this.props.goalsList.map((goal) => {
        return <Goal name={goal.name} />;
      })}
    </div>
  );
};

export default GoalsList;
