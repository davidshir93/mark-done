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
      goalValue: 125,
      goalFrequency: "day",
      color: 'plum'
    },
    {
      id: 2,
      name: "Go to the Gym",
      icon: "gym",
      measuring: "units",
      done: 1,
      goalValue: 4,
      goalFrequency: "week",
      color: 'orange'
    },
    {
      id: 3,
      name: "Meditate",
      icon: "mind",
      measuring: "minutes",
      done: 10,
      goalValue: 10,
      goalFrequency: "day",
      color: 'lightgreen'
    },
  ])

  const handleSlideChange = (event, goalIdToUpdate) => {
    let newGoals = goalsList;
    const updatedGoalIndex = newGoals.findIndex(goal => goal.id === goalIdToUpdate);
    newGoals[updatedGoalIndex].done = event.target.value;
    setGoalsList([...newGoals]);
  }
  

  const handleDelete = (goalIdToDelete) => {
    console.log(`Deleting goal with the ID of ${goalIdToDelete}`);
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
