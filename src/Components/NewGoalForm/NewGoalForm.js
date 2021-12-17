import React, { useState } from 'react'
// import './NewGoalForm.css'
import { CirclePicker } from 'react-color';
import IconPicker from '@kevinpaulconnor/react-icon-picker';

const icons = [
    'fas fa-camera',
    'fas fa-fish',
    'fas fa-align-center',
    'fas fa-align-justify'
  ];  

const NewGoalForm = ({ addNewGoal, toggleShowForm }) => {
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

    const handleChangeComplete = (color) => {
        setColor(color.hex)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewGoal(name, icon, measurement, goalValue, goalFrequency, color);
        setName('');
        setGoalValue('');
        setMeasurement('Times');
        setGoalFrequency('Day');
        setIcon('');
        setColor('');
        toggleShowForm();
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
            </div>
            <div className="thirdRowLabels">
                <label className="icon">Icon:</label>
                <label className="color">Color:</label>
            </div>    
            <div className="thirdRow">
                {/* <input type="text" name={icon} value={icon} onChange={handleIconChange} placeholder="Choose Icon"/> */}
                {/* <span className={icon}></span> */}
                <IconPicker 
                    icons={icons} 
                    defaultValue="fas fa-camera" 
                    onChange={(icon) => {
                        setIcon(icon)
                    }}
                />
                {/* <input type="text" class="colorField" name={color} value={color} onChange={handleColorChange} placeholder="Choose Color"/> */}
                <CirclePicker
                    width={"100%"}
                    // colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"]}
                    // circleSize={"2rem"}
                    // circleSpacing={"1.33rem"}
                    onChangeComplete={ handleChangeComplete }
                />
            </div>
            <input type="submit" name="Add" />
            <p onClick={toggleShowForm}>Cancel</p>
        </form>
    )
}

export default NewGoalForm
