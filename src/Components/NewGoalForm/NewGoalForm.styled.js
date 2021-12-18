import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	width: 100%;
	form {
		width: 100%;
	}
	label {
		margin-top: 1.33rem;
	}

	.firstRowLabels,
	.secRowLabels,
	.thirdRowLabels {
		width: 100%;
		display: flex;
	}

	.do {
		/* flex-basis: 2; */
		flex-grow: 0.725;
	}

	.per {
		flex-flow: 1;
		/* flex-basis: 1; */
	}

	.icon {
		flex-grow: 0.55;
	}

	.iconsContainer {
		margin-right: 1rem;
		display: flex;
		width: 50%;
	}

	.iconItem {
		width: 1.5rem;
		height: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		margin: 0.2rem;
		cursor: pointer;
		border-radius: 0.5rem;
	}

	.selected {
		box-shadow: inset 0px 0px 0px 2px #000;
		background-color: yellow;
	}

	.firstRow,
	.secRow,
	.thirdRow {
		width: 100%;
		display: flex;
	}

	.circle-picker {
		margin-top: 1.33rem;
	}

	.secRow input:not(:last-child),
	.secRow select:not(:last-child),
	.thirdRow input:not(:last-child) {
		margin-right: 1.33rem;
	}

	input,
	select {
		border-radius: 16px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.33rem;
		margin-top: 1.33rem;
	}

	input[type='submit'] {
		margin-top: 2.33rem;
		text-align: center;
		align-items: center;
		justify-content: center;
		background-color: black;
		color: white;
	}

	p {
		text-align: center;
		align-items: center;
		justify-content: center;
	}
`;
