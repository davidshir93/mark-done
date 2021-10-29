import React, { useState } from "react";
import "./BottomMenu.css";
import NewGoalForm from "../NewGoalForm/NewGoalForm";
import { FormContainer } from "../NewGoalForm/NewGoalForm.styled";

const BottomMenu = ({ addNewGoal, resetToInitialState }) => {

  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  }

  return (
    <div>
      <div className="bottom-menu-container">
        <span onClick={toggleShowForm}>Add a New Goal</span>
        <span onClick={resetToInitialState}>Reset to Initial State</span>
      </div>
      { showForm === true && 
        <FormContainer>
          <NewGoalForm 
            addNewGoal={addNewGoal}
            toggleShowForm={toggleShowForm}
          />
        </FormContainer> }
    </div>
  );
};

export default BottomMenu;
