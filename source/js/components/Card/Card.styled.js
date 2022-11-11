import styled from 'styled-components';

export default styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;

    background: #ffffff;
    border-radius: 16px;

    box-shadow: 0px 8px 16px rgba(15, 15, 15, 0.05);

    & .image-container {
        height: 200px;

        overflow: hidden;

        background: ${props => props.image ? `url(${props.image})` : '#f5f5f5'};
        background-size: cover;
        background-position: center;

        border-radius: 16px 16px 0 0;
    }

    & .information {
        display: flex;
        flex-direction: column;
        gap: 8px;

        padding: 16px;

        & > p {
            color: #4e4b66;
        }

        & .details {
            display: flex;
            align-items: center;
            justify-content: space-between;

            & button {
                padding: 8px 24px;

                font-weight: 600;
                color: #60c1c6;

                background: #ffffff;
                border: 2px solid #60c1c6;
                border-radius: 40px;

                &:hover {
                    cursor: pointer;
                }

                &:active {
                    color: #ffffff;
                    background: #60c1c6;
                }
            }
        }
    }

    & .bonus {
        position: absolute;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 8px 16px;

        top: 14px;
        right: 14px;

        width: 96px;
        height: 34px;

        background: rgba(96, 193, 198, 0.7);
        border-radius: 40px;
        backdrop-filter: blur(30px);

        & img {
            weight: auto;
            height: 18px;
        }

        & span {
            color: #ffffff;
        }
    }
`;
