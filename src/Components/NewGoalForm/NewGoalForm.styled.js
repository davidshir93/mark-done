import styled from 'styled-components';

export const FormContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;


    label {
        margin-top: 1.33rem;
    }

    .firstRowLabels, .secRowLabels, .thirdRowLabels {
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

    .firstRow, .secRow, .thirdRow {
        width: 100%;
        display: flex;
    }


    .secRow input:not(:last-child), .secRow select:not(:last-child), .thirdRow input:not(:last-child){
        margin-right: 1.33rem;
    }

    input, select {
        border-radius: 16px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.33rem;
        margin-top: 1.33rem;
    }

    input[type="submit"] {
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
`