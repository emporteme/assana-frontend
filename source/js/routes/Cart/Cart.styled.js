import styled from 'styled-components';

const CartStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    max-width: 1200px;

    margin: 0 auto;

    & .cart-container {
        display: flex;
        flex-direction: column;
        gap: 24px;

        & .orders-container {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        & .orders-checkout {
            height: fit-content;
            padding: 16px;

            background: #ffffff;
            border-radius: 16px;

            box-shadow: 0px 8px 16px rgba(15, 15, 15, 0.05);

            & > div {
                display: flex;
                flex-direction: column;
                gap: 24px;

                & > div {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
            }

            & button {
                width: 100%;
                height: 48px;

                font-size: 1rem;
                font-weight: 600;
                color: #ffffff;

                background: #60c1c6;
                border: none;
                border-radius: 16px;

                &:hover {
                    cursor: pointer;
                }

                &:disabled {
                    color: #666666;

                    background-color: #cccccc;

                    &:hover {
                        cursor: not-allowed;
                    }
                }
            }
        }

        @media (min-width: 769px) {
            flex-direction: row;
            gap: 16px;

            & .orders-container {
                width: 70%;
            }

            & .orders-checkout {
                display: flex;
                flex-direction: column;
                gap: 8px;

                width: 30%;
            }
        }
    }
`;

export default CartStyled;
