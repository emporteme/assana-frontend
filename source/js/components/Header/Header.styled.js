import styled from 'styled-components';

export default styled.div`
    background: #ffffff;
    box-shadow: 0px 8px 16px rgba(15, 15, 15, 0.05);

    .container {
        margin: 0 16px;

        @media (min-width: 426px) and (max-width: 580px) {
            margin: 0 32px;
        }

        @media (min-width: 581px) {
            margin: 0 64px;
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            width: 100%;
            max-width: 1200px;

            padding: 16px 0;
            margin: 0 auto;

            .nav-items {
                display: none;

                @media (min-width: 769px) {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    width: 80%;

                    & .nav-links {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 48px;

                        align-self: flex-end;

                        max-width: 400px;

                        & a {
                            font-weight: 500;
                            color: #6e7191;

                            text-decoration: none;
                        }
                    }

                    & .nav-icons {
                        display: flex;
                        align-items: center;
                        gap: 16px;

                        max-width: 80px;
                        height: 24px;

                        & a:first-child {
                            position: relative;

                            & p {
                                position: absolute;
                                top: -6px;
                                right: 6px;

                                display: flex;
                                align-items: center;
                                justify-content: center;

                                width: 16px;
                                height: 16px;

                                font-weight: 500;
                                color: #ffffff;

                                background: #60c1c6;
                                border-radius: 50%;
                            }
                        }

                        & a {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }

            .hamburger {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 16px;

                & > a {
                    display: block;

                    width: 24px;
                    height: 24px;
                }

                &:hover {
                    cursor: pointer;
                }

                @media (min-width: 769px) {
                    display: none;
                }
            }

            @media (min-width: 769px) {
                gap: 26%;
            }
        }

        .dropdown {
            position: absolute;

            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(144px, 1fr));

            padding-bottom: 14px;

            background: #ffffff;
            border-radius: 0 0 16px 16px;
            box-shadow: 0px 8px 16px rgba(15, 15, 15, 0.05);

            z-index: 1;

            & a {
                font-weight: 500;
                color: #6e7191;
                text-decoration: none;
            }

            @media (min-width: 769px) {
                display: none;
            }
        }
    }

    .dropdown {
        position: absolute;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(144px, 1fr));

        width: 100%;

        padding: 0 16px 16px 16px;

        background: #ffffff;
        border-radius: 0 0 16px 16px;

        z-index: 1;

        & a {
            justify-self: center;

            padding: 6px 0;

            font-weight: 500;
            color: #6e7191;
            text-decoration: none;
        }

        @media (min-width: 769px) {
            display: none;
        }
    }
`;
