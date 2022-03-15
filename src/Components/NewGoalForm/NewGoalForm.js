import React, { useState } from 'react';
// import './NewGoalForm.css'
import { CirclePicker } from 'react-color';
// import IconPicker from '@kevinpaulconnor/react-icon-picker';

const icons = [
	'fa-bullseye',
	'fa-coins',
	'fa-camera',
	'fa-fish',
	'fa-person-running',
];

const NewGoalForm = ({ addNewGoal, toggleShowForm }) => {
	// name, icon, measuring, goalValue, goalFrequency, color
	const initialState = {
		name: '',
		icon: 'fa-bullseye',
		measurement: 'Times',
		goalValue: '',
		goalFrequency: 'Day',
		color: '#607d8b',
		nameError: '',
		goalValueError: '',
	};
	const [formValues, setFormValues] = useState(initialState);
	// const [name, setName] = useState('');
	// const [icon, setIcon] = useState('fa-bullseye');
	// const [measurement, setMeasurement] = useState('Times');
	// const [goalValue, setGoalValue] = useState('');
	// const [goalFrequency, setGoalFrequency] = useState('Day');
	// const [color, setColor] = useState('#607d8b');
	// const [nameError, setNameError] = useState('');
	// const [goalValueError, setGoalValueError] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(e);
		setFormValues({ ...formValues, [name]: value });
		console.log(formValues);
	};

	// const handleNameChange = (e) => {
	// 	setName(e.target.value);
	// 	validateName();
	// };

	// const handleIconChange = (e) => {
	// 	setIcon(e.target.value);
	// };

	// const handleMeasurementChange = (e) => {
	// 	setMeasurement(e.target.value);
	// };

	// const handleGoalValueChange = (e) => {
	// 	setGoalValue(e.target.value);
	// 	validateGoalValue();
	// };

	// const handleGoalFrequencyChange = (e) => {
	// 	setGoalFrequency(e.target.value);
	// };

	const handleChangeComplete = (color) => {
		setFormValues({ ...formValues, color: color.hex });
	};

	// const validateName = () => {
	// 	if (name.length < 3) {
	// 		setNameError('Please enter a goal name with at least 3 characters');
	// 	} else {
	// 		setNameError('');
	// 	}
	// 	return;
	// };

	// const validateGoalValue = () => {
	// 	if (goalValue <= 0 || !goalValue) {
	// 		setGoalValueError('Please enter a number above 0');
	// 	} else {
	// 		setGoalValueError('');
	// 	}
	// 	return;
	// };

	const handleSubmit = (event) => {
		event.preventDefault();

		// let isValid = validateForm();
		// console.log(isValid);
		// if (isValid) {
		// 	addNewGoal(name, icon, measurement, goalValue, goalFrequency, color);
		// 	setName('');
		// 	setGoalValue('');
		// 	setMeasurement('Times');
		// 	setGoalFrequency('Day');
		// 	setIcon('');
		// 	setColor('#607d8b');
		// 	toggleShowForm();
		// } else {
		// 	return;
		// }
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="firstRowLabels">
				<label className="name">Goal Name:</label>
			</div>
			<div
				className="error"
				style={{
					transform: formValues.nameError !== '' ? 'scaleY(1)' : 'scaleY(0)',
				}}>
				{formValues.nameError}
			</div>
			<div className="firstRow">
				<input
					type="textbox"
					name="name"
					value={formValues.name}
					onChange={handleChange}
					placeholder="Goal Name"
				/>
			</div>
			<div className="secRowLabels">
				<div className="do">
					<label>Do:</label>
					<div
						className="error"
						style={{
							transform:
								formValues.goalValueError !== '' ? 'scaleY(1)' : 'scaleY(0)',
						}}>
						{formValues.goalValueError}
					</div>
				</div>
				<div className="per">
					<label>Per:</label>
				</div>
			</div>
			<div className="secRow">
				<input
					name="goalValue"
					id="goalValue"
					type="number"
					value={formValues.goalValue}
					onChange={handleChange}
					placeholder="Choose Goal Value"
				/>
				<select
					name="measurement"
					value={formValues.measurement}
					id="measurement"
					selected="Times"
					onChange={handleChange}>
					<option value="Times">Times</option>
					<option value="Minutes">Minutes</option>
					<option value="Hours">Hours</option>
					<option value="Steps">Steps</option>
					<option value="Units">Units</option>
				</select>
				<select
					name="goalFrequency"
					value={formValues.goalFrequency}
					id="goalFrequency"
					selected="Day"
					onChange={handleChange}>
					<option value="Day">Day</option>
					<option value="Week">Week</option>
					<option value="Month">Month</option>
				</select>
			</div>
			<div className="thirdRowLabels">
				<label className="icon">Icon:</label>
				<label className="color">Color:</label>
			</div>
			<div className="thirdRow">
				<div className="iconsContainer">
					{icons.map((iconClassName) => {
						return (
							<div
								key={iconClassName}
								className={`iconItem fas ${iconClassName} ${
									iconClassName === formValues.icon ? 'selected' : ''
								}`}
								onClick={() => handleChange(iconClassName)}
							/>
						);
					})}
				</div>
				{/* <input type="text" class="colorField" name={color} value={color} onChange={handleColorChange} placeholder="Choose Color"/> */}
				<CirclePicker
					width={'50%'}
					// colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"]}
					// circleSize={"2rem"}
					// circleSpacing={"1.33rem"}
					onChangeComplete={handleChangeComplete}
				/>
			</div>
			<input type="submit" name="Add" style={{ cursor: 'pointer' }} />
			<p onClick={toggleShowForm} style={{ cursor: 'pointer' }}>
				Cancel
			</p>
		</form>
	);
};

export default NewGoalForm;
