import React from "react";
import "./BottomMenu.css";
import NewGoalForm from "../NewGoalForm/NewGoalForm";

const BottomMenu = ({ addNewGoal }) => {
  return (
    <div>
      add new goal
      <NewGoalForm 
        addNewGoal={addNewGoal}
      />
    </div>
  );
};

export default BottomMenu;
