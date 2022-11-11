import styled from 'styled-components';

const ForgetPasswordStyled = styled.div`
    display: flex;
    justify-content: center;

    & .container {
        width: 100%;
        max-width: 477px;

        padding: 24px;

        background: #ffffff;
        border-radius: 32px;

        box-shadow: 0px 8px 16px rgba(15, 15, 15, 0.05);

        & h1 {
            margin-bottom: 12px;

            color: #14142b;
        }

        & .success-message {
            padding: 16px;
            margin-bottom: 12px;
    
            font-weight: 600;
            color: #ffffff;
    
            background: #b7e5a0;
            border-radius: 16px;
        }

        & .error-message {
            padding: 16px;
            margin-bottom: 12px;

            font-weight: 600;
            color: #ffffff;

            background: #fe968d;
            border-radius: 16px;
        }

        & .hide {
            display: none;
        }

        & .forget-password-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;

            & input {
                width: 100%;

                padding: 16px 24px;

                color: #6e7191;

                background: #eff0f7;
                border: 0;
                border-radius: 16px;

                &::placeholder {
                    color: #6e7191;
                }
            }

            & button {
                width: 200px;

                padding: 16px 0;
                margin-top: 8px;

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

export default ForgetPasswordStyled;
