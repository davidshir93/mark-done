import React from 'react';
import './BottomMenu.css';

const BottomMenu = ({ toggleShowForm, resetToInitialState }) => {
	return (
		<div>
			<div className="bottom-menu-container">
				<div className="text-and-icon-container" onClick={toggleShowForm}>
					<div className="fas fa-plus-circle" title="Add a New Goal" />
					<div className="button-text">Add a New Goal</div>
				</div>
				<div className="text-and-icon-container" onClick={resetToInitialState}>
					<div className="fas fa-undo-alt" title="Reset to Initial State" />
					<div className="button-text">Reset to Initial State</div>
				</div>
			</div>
		</div>
	);
};

export default BottomMenu;
