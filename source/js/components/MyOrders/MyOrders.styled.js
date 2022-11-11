import styled from 'styled-components';

const MyOrdersStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    & .page-container {
        display: flex;
        flex-direction: column;
        gap: 16px;

        & .order {
            padding: 16px;
            background: #eff0f7;
            border-radius: 16px;

            overflow: scroll;

            & table {
                width: 100%;
                border-collapse: collapse;

                & th,
                & td {
                    padding: 4px 8px;

                    border: 1px solid #ddd;
                }
            }

            & div {
                margin-top: 16px;

                & p {
                    color: #14142b;

                    width: 300px;

                    & span {
                        font-size: inherit;
                        color: #6e7191;
                    }
                }

                & .status-container {
                    position: relative;

                    width: 100%;

                    & .status-label {
                        position: absolute;
                        top: -12px;
                        left: 12px;

                        padding: 0 6px;

                        font-weight: 400;

                        color: #4e4b66;

                        background: #eff0f7;
                    }

                    & .status-select {
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
                width: 24px !important;
                height: 24px !important;

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
`;

export default MyOrdersStyled;
