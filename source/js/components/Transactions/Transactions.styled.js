import styled from 'styled-components';

const TransactionsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    & .balance {
        display: flex;
        flex-direction: row;
        gap: 16px;

        padding: 16px;

        background: #eff0f7;
        border-radius: 16px;

        & div {
            & p:first-child {
                font-size: 1rem;
                color: #6e7191;
            }

            & p:last-child {
                font-size: 1.25rem;
                font-weight: 600;
                color: #14142b;
            }
        }
    }

    & .error-message {
        padding: 16px;

        font-weight: 600;
        color: #ffffff;

        background: #fe968d;
        border-radius: 16px;
    }

    & .success-message {
        padding: 16px;

        font-weight: 600;
        color: #ffffff;

        background: #b7e5a0;
        border-radius: 16px;
    }

    & .hidden-message {
        display: none;
    }

    & .form {
        display: flex;
        flex-direction: column;
        gap: 24px;

        & .input-container {
            position: relative;

            width: 100%;

            & .label {
                position: absolute;
                top: -12px;
                left: 12px;

                padding: 0 6px;

                font-weight: 400;

                color: #4e4b66;

                background: #ffffff;
            }

            & .form-input {
                width: 100%;
                height: 100%;

                padding: 12px;

                font-size: 1rem;
                color: #4e4b66;

                background: transparent;
                border: 1px solid #d9dbf1;
                border-radius: 16px;
            }
        }

        & button {
            padding: 16px 0;

            font-size: 1rem;
            font-weight: 600;
            color: #ffffff;

            background: #60c1c6;
            border: 0;
            border-radius: 16px;

            &:hover {
                cursor: pointer;
            }
        }
    }

    & .transactions {
        width: 100%;

        & .page-container {
            width: 100%;

            & .input-container {
                position: relative;
        
                width: 100%;

                margin-bottom: 24px;
        
                & .label {
                    position: absolute;
                    top: -12px;
                    left: 12px;
        
                    padding: 0 6px;
        
                    font-weight: 400;
        
                    color: #4e4b66;
        
                    background: #ffffff;
                }
        
                & .form-input {
                    width: 100%;
                    height: 100%;
        
                    padding: 12px;
        
                    font-size: 1rem;
                    color: #4e4b66;
        
                    background: transparent;
                    border: 1px solid #d9dbf1;
                    border-radius: 16px;
                }
            }        

            & .list {
                width: 100%;
                overflow: scroll;

                & table {
                    border-collapse: collapse;
                    width: 100%;

                    & th,
                    & td {
                        padding: 4px 8px;

                        border: 1px solid #ddd;

                        & .status {
                            margin-left: 8px;
                        }
                    }
                }
            }

            & ul {
                display: flex;
                justify-content: space-between;
                gap: 16px;

                width: 100%;
                overflow: scroll;

                padding: 12px 24px;
                margin-top: 24px;

                background: #eff0f7;
                border-radius: 16px;

                list-style: none;

                & li {
                    &:hover {
                        cursor: pointer;
                    }
                }

                & li:not(:first-child):not(:last-child) {
                    width: 24px;
                    height: 24px;

                    color: #60с1с6;
                    font-weight: 500;

                    background: #d5d5d5;
                    border-radius: 50%;

                    & a {
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        width: inherit;
                        height: inherit;
                    }

                    &.selected {
                        color: #ffffff;

                        background: #60c1c6;
                    }
                }
            }
        }
    }
`;

export default TransactionsStyled;
