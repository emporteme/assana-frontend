import styled from 'styled-components';

const ProfileStyled = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 24px;

    & .sidebar,
    & .content .container {
        padding: 16px;

        background: #ffffff;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
        border-radius: 16px;
    }

    & .sidebar {
        height: fit-content;

        & .user-data {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;

            & img {
                width: 150px;
                height: 150px;

                border-radius: 50%;
            }

            & h2 {
                color: #14142b;
            }
        }

        & .tabs {
            display: flex;
            flex-direction: column;

            margin-top: 16px;

            & .tab {
                padding: 10px 12px;

                & p {
                    color: #14142b;
                }

                &.active {
                    background: #eff0f7;
                    border-radius: 16px;
                }

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }

    & .content {
        & h1 {
            margin-bottom: 18px;

            color: #14142b;
        }

        & .container {
            & .transactions {
                & h2 {
                    margin-bottom: 12px;
                }

                & .my-balance {
                    padding: 24px 20px;
                    margin-bottom: 24px;

                    background: #eff0f7;
                    border-radius: 16px;
                }

                & .new-transaction {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;

                    margin-bottom: 24px;

                    & form {
                        display: flex;
                        flex-direction: column;
                        gap: 16px;

                        & div {
                            display: flex;
                            flex-direction: column;
                            gap: 8px;

                            padding: 16px;

                            background: #eff0f7;
                            border-radius: 16px;

                            & input {
                                padding: 8px;
                                border: 0;
                                border-radius: 16px;
                            }
                        }

                        & button {
                            padding: 8px;

                            font-weight: 600;
                            color: #ffffff;

                            border: 0;
                            border-radius: 16px;
                            background: #60c1c6;

                            &:hover {
                                cursor: pointer;
                            }
                        }
                    }
                }

                & .transactions-history {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;

                    & .transaction {
                        padding: 8px 16px;

                        background: #eff0f7;
                        border-radius: 16px;
                    }
                }
            }

            .tree {
                width: 100%;
                height: 50vh;

                .structure {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    @media (min-width: 769px) {
        flex-direction: row;

        & .sidebar {
            width: 288px;
        }

        & .content {
            width: calc(100% - -20px - 20px);
        }
    }
`;

export default ProfileStyled;
