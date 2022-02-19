import React, { useState, useEffect } from 'react';
import './App.css';
import WeekCircles from '../WeekCircles/WeekCircles';
import Header from '../Header/Header';
import Filters from '../Filters/Filters';
import GoalsList from '../GoalsList/GoalsList';
import BottomMenu from '../BottomMenu/BottomMenu';
import NewGoalForm from '../NewGoalForm/NewGoalForm';
import { FormContainer } from '../NewGoalForm/NewGoalForm.styled';
import { motion } from 'framer-motion';

function App() {
	const [goalsList, setGoalsList] = useState([
		{
			id: 1,
			name: 'Eat Protein',
			icon: 'fas fa-camera',
			measuring: 'grams',
			done: 55,
			goalValue: 125,
			goalFrequency: 'day',
			color: '#2196f3',
		},
		{
			id: 2,
			name: 'Go to the Gym',
			icon: 'fas fa-camera',
			measuring: 'units',
			done: 1,
			goalValue: 4,
			goalFrequency: 'week',
			color: '#4caf50',
		},
		{
			id: 3,
			name: 'Meditate',
			icon: 'fas fa-camera',
			measuring: 'minutes',
			done: 10,
			goalValue: 10,
			goalFrequency: 'day',
			color: '#ffeb3b',
		},
	]);

	const [goalsListSorted, setGoalsListSorted] = useState([]);

	const [listOrder, setListOrder] = useState('original');

	const [showForm, setShowForm] = useState(false);

	const toggleShowForm = () => {
		setShowForm(!showForm);
	};
	const handleListOrderChange = () => {
		if (listOrder !== 'original') {
			let newList = [];
			const notDone = goalsList.filter(
				(goal) => goal.goalValue - goal.done > 0
			);
			const done = goalsList.filter((goal) => goal.goalValue - goal.done <= 0);
			notDone.forEach((goal) => newList.push(goal));
			done.forEach((goal) => newList.push(goal));
			setGoalsList((prev) => newList);
			setListOrder('dueDown');
		} else {
			let newList = goalsList.sort((a, b) => a.id - b.id);
			setGoalsList((prev) => newList);
			setListOrder('original');
		}
	};

	const handleSlideChange = (event, goalIdToUpdate) => {
		let newGoals = goalsList;
		const updatedGoalIndex = newGoals.findIndex(
			(goal) => goal.id === goalIdToUpdate
		);
		newGoals[updatedGoalIndex].done = event.target.value;
		setGoalsList([...newGoals]);
	};

	const addNewGoal = (
		name,
		icon,
		measuring,
		goalValue,
		goalFrequency,
		color
	) => {
		console.log('adding new goal');
		setGoalsList((prev) => [
			...prev,
			{
				id: new Date().valueOf(),
				name: name,
				icon: icon,
				measuring: measuring,
				done: 0,
				goalValue: goalValue,
				goalFrequency: goalFrequency,
				color: color,
			},
		]);
	};

	const handleDelete = (goalIdToDelete) => {
		console.log(`Deleting goal with the ID of ${goalIdToDelete}`);
		setGoalsList((prev) => prev.filter((goal) => goal.id !== goalIdToDelete));
	};

	const getLocalGoals = () => {
		if (localStorage.getItem('goalsList') === null) {
			return;
		} else {
			let goalsFromLocal = localStorage.getItem('goalsList');
			setGoalsList(JSON.parse(goalsFromLocal));
		}
	};

	const resetToInitialState = () => {
		setGoalsList([
			{
				id: 1,
				name: 'Eat Protein',
				icon: 'fas fa-camera',
				measuring: 'grams',
				done: 55,
				goalValue: 125,
				goalFrequency: 'day',
				color: '#2196f3',
			},
			{
				id: 2,
				name: 'Go to the Gym',
				icon: 'fas fa-camera',
				measuring: 'units',
				done: 1,
				goalValue: 4,
				goalFrequency: 'week',
				color: '#4caf50',
			},
			{
				id: 3,
				name: 'Meditate',
				icon: 'fas fa-camera',
				measuring: 'minutes',
				done: 10,
				goalValue: 10,
				goalFrequency: 'day',
				color: '#ffeb3b',
			},
		]);
	};

	useEffect(() => {
		getLocalGoals();
	}, []);

	useEffect(() => {
		let newList = [];
		switch (listOrder) {
			case 'original':
				newList = goalsList.sort((a, b) => a.id - b.id);
				setGoalsListSorted((prev) => newList);
				break;
			case 'doneLast':
				const notDone = goalsList.filter(
					(goal) => goal.goalValue - goal.done > 0
				);
				const done = goalsList.filter(
					(goal) => goal.goalValue - goal.done <= 0
				);
				notDone.forEach((goal) => newList.push(goal));
				done.forEach((goal) => newList.push(goal));
				setGoalsListSorted((prev) => newList);
				break;
			default:
				newList = goalsList.sort((a, b) => a.id - b.id);
				setGoalsListSorted((prev) => newList);
				break;
		}
		localStorage.setItem('goalsList', JSON.stringify(goalsList));
	}, [goalsList, listOrder]);

	const variants = {
		hidden: { opacity: 0, x: '100vw' },
		show: {
			opacity: 1,
			x: '0%',
			transition: { duration: 0.2, type: 'tween' },
		},
	};

	return (
		<div className="App">
			{showForm === true && (
				<motion.div variants={variants} initial="hidden" animate="show">
					<Header title="Add a New Goal" />
					<FormContainer>
						<NewGoalForm
							addNewGoal={addNewGoal}
							toggleShowForm={toggleShowForm}
						/>
					</FormContainer>{' '}
				</motion.div>
			)}
			{showForm === false && (
				<motion.div variants={variants} initial="hidden" animate="show">
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
						toggleShowForm={toggleShowForm}
						resetToInitialState={resetToInitialState}
					/>
				</motion.div>
			)}
		</div>
	);
}

export default App;
