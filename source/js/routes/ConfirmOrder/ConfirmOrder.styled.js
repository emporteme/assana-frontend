import styled from 'styled-components';

const ConfirmOrderWrapper = styled.div`
    max-width: 1200px;

    margin: 0 auto;

    & div {
        padding: 16px;

        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0px 8px 16px rgba(15, 15, 15, 0.05);

        overflow: scroll;

        & .error-message {
            padding: 16px;
            margin-bottom: 12px;
            margin-top: 12px;

            font-weight: 600;
            color: #ffffff;

            background: #fe968d;
            border-radius: 16px;
        }

        & .success-message {
            padding: 16px;
            margin-bottom: 12px;
            margin-top: 12px;

            font-weight: 600;
            color: #ffffff;

            background: #b7e5a0;
            border-radius: 16px;
        }

        .hide {
            display: none;
        }

        & table {
            width: 100%;

            margin-top: 12px;

            border-collapse: collapse;

            & th,
            & td {
                padding: 4px 8px;

                border: 1px solid #ddd;
            }
        }

        & form {
            & select {
                border: 1px solid #60c1c6;
                border-radius: 16px;
                padding: 4px 8px;
                margin-top: 12px;
            }

            & input[type='submit'] {
                margin-top: 12px;

                padding: 8px 16px;
                border: 0;
                border-radius: 16px;
                background: #60c1c6;
                color: #ffffff;
                font-weight: 600;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
`;

export default ConfirmOrderWrapper;
