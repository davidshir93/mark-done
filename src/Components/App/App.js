import React, { useState, useEffect } from "react";
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
    }
  ])

  const [goalsListSorted, setGoalsListSorted] = useState([]);

  const [listOrder, setListOrder] = useState('original')

  const handleListOrderChange = () => {
    if (listOrder !== 'original') {
      let newList = [];
      const notDone = goalsList.filter(goal => goal.goalValue - goal.done > 0);
      const done = goalsList.filter(goal => goal.goalValue - goal.done <= 0);
      notDone.forEach(goal => newList.push(goal))
      done.forEach(goal => newList.push(goal))
      setGoalsList(prev => newList);
      setListOrder('dueDown');
    } else {
      let newList = goalsList.sort((a,b) => a.id - b.id);
      setGoalsList(prev => newList);
      setListOrder('original');
    }
  }

  const handleSlideChange = (event, goalIdToUpdate) => {
    let newGoals = goalsList;
    const updatedGoalIndex = newGoals.findIndex(goal => goal.id === goalIdToUpdate);
    newGoals[updatedGoalIndex].done = event.target.value;
    setGoalsList([...newGoals]);
  }

  const addNewGoal = (name, icon, measuring, goalValue, goalFrequency, color) => {
    console.log('adding new goal')
    const id = new Date().getHours();
    setGoalsList(prev => [
      ...prev,
      {
        id: id,
        name: name,
        icon: icon,
        measuring: measuring,
        done: 0,
        goalValue: goalValue,
        goalFrequency: goalFrequency,
        color: color
      }
    ])
  }

  const handleDelete = (goalIdToDelete) => {
    console.log(`Deleting goal with the ID of ${goalIdToDelete}`);
    setGoalsList(prev => prev.filter(goal => goal.id !== goalIdToDelete))
  }

  const getLocalGoals = () => {
    if (localStorage.getItem('goalsList') === null) {
      return
    } else {
      let goalsFromLocal = localStorage.getItem('goalsList');
      setGoalsList(JSON.parse(goalsFromLocal));
    }
  }

  useEffect(() => {
    getLocalGoals()
  },[])

  useEffect(() => {
    let newList = [];
    switch (listOrder) {
      case 'original':
        newList = goalsList.sort((a,b) => a.id - b.id);
        setGoalsListSorted(prev => newList);
        break;
      case 'doneLast':
        const notDone = goalsList.filter(goal => goal.goalValue - goal.done > 0);
        const done = goalsList.filter(goal => goal.goalValue - goal.done <= 0);
        notDone.forEach(goal => newList.push(goal))
        done.forEach(goal => newList.push(goal))
        setGoalsListSorted(prev => newList);
        break;
      default:
        newList = goalsList.sort((a,b) => a.id - b.id);
        setGoalsListSorted(prev => newList);
        break;
    }
    localStorage.setItem('goalsList', JSON.stringify(goalsList));
  }, [goalsList, listOrder])

  return (
    <div className="App">
      <WeekCircles />
      <Header />
      <Filters 
        listOrder={listOrder}
        setListOrder={setListOrder}
        handleListOrderChange={handleListOrderChange} 
      />
      <GoalsList 
        goalsList={goalsList}
        goalsListSorted={goalsListSorted}
        handleSlideChange={handleSlideChange} 
        handleDelete={handleDelete}
      />

      <BottomMenu 
        addNewGoal={addNewGoal}
      />
    </div>
  );
}

export default App;
