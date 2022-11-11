import styled from 'styled-components';

const OrderStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    padding: 16px;

    background: #ffffff;
    border-radius: 16px;

    box-shadow: 0px 8px 16px rgba(15, 15, 15, 0.05);

    & .image-container {
        position: relative;

        width: 64px;
        height: 64px;

        background: ${props => props.image ? `url(${props.image})` : '#ffffff'};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        border: 1px solid #60c1c6;
        border-radius: 24px;

        & img {
            width: 100%;
            height: 100%;

            border-radius: 50%;
        }

        & .bonus {
            position: absolute;
            top: -4px;
            right: -4px;

            padding: 2px 4px;

            font-size: 0.75rem;
            font-weight: 600;
            color: #ffffff;

            background: #60c1c6;
            border-radius: 8px;
        }
    }

    & .order-container {
        display: flex;
        flex-direction: column;
        gap: 8px;

        & .order-counter {
            display: flex;
            flex-direction: row;
            gap: 8px;

            & button {
                width: 24px;
                height: 24px;

                font-weight: 600;
                color: #60c1c6;

                background: #ffffff;
                border: 1px solid #60c1c6;
                border-radius: 50%;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
`;

export default OrderStyled;
