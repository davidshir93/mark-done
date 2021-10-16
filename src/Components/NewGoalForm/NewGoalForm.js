import React, { useState } from 'react'
// import './NewGoalForm.css'

const NewGoalForm = ({ addNewGoal }) => {
    // name, icon, measuring, goalValue, goalFrequency, color
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');
    const [measurement, setMeasurement] = useState('Times');
    const [goalValue, setGoalValue] = useState('');
    const [goalFrequency, setGoalFrequency] = useState('Day');
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
        addNewGoal(name, icon, measurement, goalValue, goalFrequency, color);
        setName('');
        setGoalValue('');
        setMeasurement('');
        setGoalFrequency('');
        setIcon('');
        setColor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="firstRowLabels">
                <label className="name">Goal Name:</label>
            </div>
            <div className="firstRow">
                <input type="text" name={name} value={name} onChange={handleNameChange} placeholder="Goal Name"/>
            </div>
            <div className="secRowLabels">
                <label className="do">Do:</label>
                <label className="per">Per:</label>
            </div>    
            <div className="secRow">
                <input type="text" name={goalValue} value={goalValue} onChange={handleGoalValueChange} placeholder="Choose Goal Value"/>
                <select name={measurement} value={measurement} id="measurement" selected="Times" onChange={handleMeasurementChange} >
                    <option value="Times">Times</option>
                    <option value="Minutes">Minutes</option>
                    <option value="Hours">Hours</option>
                    <option value="Steps">Steps</option>
                    <option value="Units">Units</option>
                </select>
                <select name={goalFrequency} value={goalFrequency} id="goalFrequency" selected="Day" onChange={handleGoalFrequencyChange} >
                    <option value="Day">Day</option>
                    <option value="Week">Week</option>
                    <option value="Month">Month</option>
                </select>
                {/* <input type="text" name={goalFrequency} value={goalFrequency} onChange={handleGoalFrequencyChange} placeholder="Choose Frequency"/> */}
            </div>
            <div className="thirdRowLabels">
                <label className="icon">Icon:</label>
                <label className="color">Color:</label>
            </div>    
            <div className="thirdRow">
                <input type="text" name={icon} value={icon} onChange={handleIconChange} placeholder="Choose Icon"/>
                <input type="text" name={color} value={color} onChange={handleColorChange} placeholder="Choose Color"/>
            </div>
            <input type="submit" name="Add" />
            <p>Cancel</p>
        </form>
    )
}

export default NewGoalForm
