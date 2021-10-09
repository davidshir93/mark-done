import React, { useState } from 'react'
import './NewGoalForm.css'

const NewGoalForm = ({ addNewGoal }) => {
    // name, icon, measuring, goalValue, goalFrequency, color
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');
    const [measurement, setMeasurement] = useState('');
    const [goalValue, setGoalValue] = useState('');
    const [goalFrequency, setGoalFrequency] = useState('');
    const [color, setColor] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleIconChange = (e) => {
        setIcon(e.target.value)
    }

    const handleMeasurementChange = (e) => {
        setMeasurement(e.target.value)
    }

    const handleGoalValueChange = (e) => {
        setGoalValue(e.target.value)
    }

    const handleGoalFrequencyChange = (e) => {
        setGoalFrequency(e.target.value)
    }

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewGoal(name, icon, measurement, goalValue, goalFrequency, color)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name={name} value={name} onChange={handleNameChange} placeholder="Goal Name"/>
            <input type="text" name={icon} value={icon} onChange={handleIconChange} placeholder="Choose Icon"/>
            <input type="text" name={measurement} value={measurement} onChange={handleMeasurementChange} placeholder="Choose Mesurement Unit"/>
            <input type="text" name={goalValue} value={goalValue} onChange={handleGoalValueChange} placeholder="Choose Goal Value"/>
            <input type="text" name={goalFrequency} value={goalFrequency} onChange={handleGoalFrequencyChange} placeholder="Choose Goal Frequency"/>
            <input type="text" name={color} value={color} onChange={handleColorChange} placeholder="Choose Color"/>
            <input type="submit" name="Submit" />
        </form>
    )
}

export default NewGoalForm
