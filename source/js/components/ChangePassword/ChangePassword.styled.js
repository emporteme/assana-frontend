import styled from 'styled-components';

const ChangePasswordStyled = styled.div`
    & form {
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

        button {
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
    
    & .error-message {
        padding: 16px;
        margin-bottom: 12px;

        font-weight: 600;
        color: #ffffff;

        background: #fe968d;
        border-radius: 16px;
    }

    & .success-message {
        padding: 16px;
        margin-bottom: 12px;

        font-weight: 600;
        color: #ffffff;

        background: #b7e5a0;
        border-radius: 16px;
    }

    & .hide {
        display: none;
    }
`;

export default ChangePasswordStyled;
