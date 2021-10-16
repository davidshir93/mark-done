import React from "react";
import "./BottomMenu.css";
import NewGoalForm from "../NewGoalForm/NewGoalForm";
import {FormContainer} from "../NewGoalForm/NewGoalForm.styled";

const BottomMenu = ({ addNewGoal }) => {
  return (
    <div>
      add new goal
      <FormContainer>
        <NewGoalForm 
          addNewGoal={addNewGoal}
        />
      </FormContainer>
    </div>
  );
};

export default BottomMenu;
