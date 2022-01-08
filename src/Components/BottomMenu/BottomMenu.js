import React from 'react';
import './BottomMenu.css';

const BottomMenu = ({ toggleShowForm, resetToInitialState }) => {
	return (
		<div>
			<div className="bottom-menu-container">
				<div
					onClick={toggleShowForm}
					className="fas fa-plus-circle"
					title="Add a New Goal"
				/>
				<div
					onClick={resetToInitialState}
					className="fas fa-undo-alt"
					title="Reset to Initial State"
				/>
			</div>
		</div>
	);
};

export default BottomMenu;
