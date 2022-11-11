import styled from 'styled-components';

const LoginStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    & .wrapper {
        display: flex;
        flex-direction: column;
        gap: 12px;

        width: 100%;
        max-width: 477px;

        padding: 24px;

        background: #ffffff;
        border-radius: 32px;

        box-shadow: 0px 8px 16px rgba(15, 15, 15, 0.05);

        & .header {
            color: #14142b;
            text-align: center;
        }

        & .error-message {
            padding: 16px;

            font-weight: 600;
            color: #ffffff;

            background: #fe968d;
            border-radius: 16px;
        }

        & .hidden-message {
            display: none;
        }

        & .form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;

            & .form-input {
                width: 100%;

                padding: 16px 24px;

                font-size: 1rem;
                color: #6e7191;

                background: #eff0f7;
                border: 0;
                border-radius: 16px;

                &::placeholder {
                    color: #6e7191;
                }
            }

            a {
                align-self: flex-end;

                margin: 8px 0;

                color: #60c1c6;
                text-decoration: none;
            }

            & button {
                width: 200px;

                padding: 16px 0;

                font-size: 1rem;
                font-weight: 600;
                color: #ffffff;

                text-align: center;

                background: #60c1c6;
                border: 0;
                border-radius: 16px;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
`;

export default LoginStyled;
