import React, { useState } from "react";
import "./App.css";
import WeekCircles from "../WeekCircles/WeekCircles";
import Header from "../Header/Header";
import Filters from "../Filters/Filters";
import GoalsList from "../GoalsList/GoalsList";
import BottomMenu from "../BottomMenu/BottomMenu";

function App() {
  const [goalsList, setGoalsList] = useState([
    {
      name: "Eat Protein",
      icon: "food",
      measuring: "grams",
      done: 55,
      goal: 125,
      goalFrequency: "day",
    },
    {
      name: "Go to the Gym",
      icon: "gym",
      measuring: "units",
      done: 1,
      goal: 4,
      goalFrequency: "week",
    },
    {
      name: "Meditate",
      icon: "mind",
      measuring: "minutes",
      done: 10,
      goal: 10,
      goalFrequency: "day",
    },
  ]);

  const handleSlideChange = (event) => {
    setGoalsList((prevGoalsList) => {
      return [
        ...prevGoalsList,

      ]
    
    })
  }

  return (
    <div className="App">
      <h1>
        <i class="fas fa-clipboard-check"></i> Mark-Done App
      </h1>
      <WeekCircles />
      <Header />
      <Filters />
      <GoalsList 
        goalsList={goalsList}
        handleSlideChange={handleSlideChange} 
      />

      <BottomMenu />
    </div>
  );
}

export default App;
