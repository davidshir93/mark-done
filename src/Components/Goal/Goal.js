import React from 'react';
import './Goal.css';

const Goal = ({
	name,
	done,
	icon,
	goalValue,
	measuring,
	id,
	color,
	goalFrequency,
	handleDelete,
	handleSlideChange,
}) => {
	const position = (done / goalValue) * 100;
	const sliderBackground = {
		background: `linear-gradient(90deg, ${color} ${position}%, #DADADA ${position}%)`,
	};

	return (
		<div className={`goal ${done - goalValue >= 0 ? 'completed' : ''}`}>
			<input
				type="range"
				min="0"
				value={done}
				max={goalValue}
				id="slider"
				style={sliderBackground}
				onChange={(event) => handleSlideChange(event, id)}
			/>
			<div className="goalElementsContainer">
				<div className="goalName">
					<i className={`fas ${icon}`}></i>
					<h2>{name}</h2>
				</div>
				<div className="goalDetails">
					<h2>{done}</h2>
					<p className="caption">
						{goalValue} {measuring} / {goalFrequency}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Goal;
