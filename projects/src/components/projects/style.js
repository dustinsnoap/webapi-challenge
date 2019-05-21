import Styled from 'styled-components'

export default Styled.div`
    color: #ccc;
    max-width: 800px;
    display: grid;
    grid-auto-flow: row;
    grid-gap: 1rem;
    &>*:not(.options), &>.options>.option {
        background-color: rgba(33,33,33,66);
        border-radius: 5px;
        padding: 1rem;
    }
    .options {
        display: grid;
        grid-auto-flow: column;
        grid-gap: 1rem;
        width: fit-content;
        height: fit-content;
        font-size: 2rem;
        justify-self: end;
        .option {
            &:hover {
                background-color: #666;
                cursor: pointer;
            }
        }
    }
    .add {
        display: none;
        grid-auto-flow: row;
        grid-gap: 1rem;
        &.active {display: grid}
        .header {
            font-size: 2rem;
            text-align: center;
        }
        .fields {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 1rem;
            font-size: 1.6rem;
            align-items: center;
            input {
                background-color: #333;
                border: 0;
                color: #ccc;
                outline: none;
                font-size: 1.6rem;
                padding: 0.5rem;
                border-radius: 5px;
            }
        }
        .options {
            .option {
                background-color: #333;
                border: 0;
                color: #ccc;
                font-size: 1.6rem;
                padding: 0.5rem;
                border-radius: 5px;
                outline: none;
                &:hover {
                    background-color: #666;
                }
            }
        }
    }
    .project {
        display: grid;
        grid-auto-flow: row;
        grid-gap: 1rem;
        overflor: hidden;

        .title {font-size: 2rem}
        .value {font-size: 1.6rem}

        .summary, .action {
            align-items: center;
            display: grid;
            grid-gap: 1rem;
            grid-template-columns: auto 1fr;
        }
        .actions {
            border-left: 2px solid #ccc;
            display: grid;
            grid-auto-flow: row;
            grid-gap: 2rem;
            margin-left: 1rem;
            max-height: 0;
            overflow: hidden;
            padding-left: 1rem;
            transition: max-height .22s ease-in-out;
            &.active {
                max-height: 500px;
                height: 100%;
            }
        }
    }
`