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
      id: 1,
      name: "Eat Protein",
      icon: "food",
      measuring: "grams",
      done: 55,
      goal: 125,
      goalFrequency: "day",
    },
    {
      id: 2,
      name: "Go to the Gym",
      icon: "gym",
      measuring: "units",
      done: 1,
      goal: 4,
      goalFrequency: "week",
    },
    {
      id: 3,
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

  const handleDelete = (goalIdToDelete) => {
    setGoalsList(prev => prev.filter(goal => goal.id !== goalIdToDelete))
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
        handleDelete={handleDelete}
      />

      <BottomMenu />
    </div>
  );
}

export default App;
