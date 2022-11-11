import styled from 'styled-components';

const MainStyled = styled.div`
    max-width: 1200px;
    margin: 0 auto;
 
    & .banner {
        display: flex;
        flex-direction: column;

        @media (min-width: 769px) {
            flex-direction: row;
            align-items: center;

            & .banner-image {
                width: 100%;
            }

            & .banner-content {
                width: 100%;
            }
        }
        & .width{
            width: 100%;
        }
        & .banner-image {
            & img {
                width: 100%;

                border-radius: 20px;
            }
        }

        & .banner-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            
            margin-top: 32px;

            @media (min-width: 769px) {
                margin-top: 0;
                width: 90%;
                margin-left: 5%;
                align-items: start;
            }

            & h1 {
                font-size: 2.5rem;
                color: #60c1c6;

                line-height: 1;
                text-align: center;
            }

            & p {
                margin-top: 16px;

                font-size: 1.25rem;
                color: #14142b;

                line-height: 1.2;
                text-align: center;
            }

            & button {
                padding: 14px 51px;
                margin-top: 32px;

                font-size: 1rem;
                color: #f7f7fc;

                background: #60c1c6;
                border: 0;
                border-radius: 40px;

                & a {
                    font-size: 1rem;
                    font-weight: 600;

                    color: #f7f7fc;
                    text-decoration: none;
                }
            }
        }
    }

    & .offers {
        display: flex;
        flex-direction: column;

        margin-top: 64px;

        & h2 {
            font-size: 1.75rem;
            font-weight: 700;
            color: #14142b;

            text-align: center;
        }

        & .offers-list {
            display: flex;
            flex-direction: column;
            grid-gap: 32px;

            margin-top: 48px;

            @media (min-width: 1044px) {
                flex-direction: row;
                justify-content: space-between;

                & .offers-item {
                    width: 30%;
                }
            }

            & .offers-item {
                display: flex;
                flex-direction: column;
                align-items: center;

                & .offer-image-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    width: 100px;
                    height: 100px;
                }

                & h3 {
                    margin-top: 24px;

                    font-size: 1.375rem;
                    font-weight: 600;
                    color: #14142b;

                    text-align: center;
                    line-height: 1.2;
                }

                & p {
                    margin-top: 16px;

                    font-size: 1rem;

                    text-align: center;
                }
            }
        }
    }

    & .benefits {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        grid-gap: 32px;

        margin-top: 64px;

        @media (min-width: 769px) {
            flex-direction: row;

            & .benefits-image {
                width: 50%;
            }

            & .benefits-content {
                width: 50%;
            }
        }

        & .benefits-image {
            & img {
                width: 100%;
                border-radius: 20px;
            }
        }

        & .benefits-content {
            display: flex;
            flex-direction: column;
            gap: 32px;

            & div {
                display: flex;
                flex-direction: column;
                align-items: center;

                text-align: center;

                & h2 {
                    font-weight: 700;
                    color: #14142b;

                    & span {
                        font-size: inherit;
                        font-weight: 700;
                        color: #60c1c6;
                    }
                }

                & p {
                    margin-top: 16px;
                }

                & ol {
                    margin-top: 16px;

                    list-style-position: inside;
                }
            }
        }
    }

    & .mission {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        grid-gap: 32px;

        margin-top: 64px;

        & h2 {
            font-weight: 700;
            color: #14142b;

            & span {
                font-size: inherit;
                font-weight: 700;
                color: #60c1c6;
            }
        }

        & .mission-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            

            width: 100%;

            gap: 32px;

            & .mission-image {
                display: flex;
                align-items: center;
                justify-content: center;

                & img {
                    width: 100%;
                    max-width: 432px;
                }
            }

            & .mission-video {
                & iframe {
                    width: 100%;
                    max-width: 580px;
                    height: 350px;
                    margin:0;
                    border-radius: 16px;
                }
            }
        }

        & > p {
            color: #14142b;

            text-align: center;
        }

        @media (min-width: 769px) {
            & .mission-content {
                display: flex;
                flex-direction: row;

                & .mission-image {
                    width: 50%;
                }

                & .mission-video {
                    width: 50%;

                    & iframe {
                        width: 100%;
                    }
                }
            }

            & > p {
                width: 50%;
            }
        }
    }
`;

export default MainStyled;
