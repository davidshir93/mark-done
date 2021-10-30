import React from "react";
import "./BottomMenu.css";


const BottomMenu = ({ toggleShowForm, resetToInitialState }) => {

  return (
    <div>
      <div className="bottom-menu-container">
        <button onClick={toggleShowForm}>Add a New Goal</button>
        <button onClick={resetToInitialState}>Reset to Initial State</button>
      </div>
    </div>
  );
};

export default BottomMenu;
