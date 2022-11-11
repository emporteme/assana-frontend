import styled from 'styled-components';

const FooterStyled = styled.div`
    background-color: #ffffff;

    .container {
        padding: 24px 0;
        margin: 0 16px;

        @media (min-width: 426px) and (max-width: 580px) {
            margin: 0 32px;
        }

        @media (min-width: 581px) {
            margin: 0 64px;
        }

        & .footer {
            width: 100%;
            max-width: 1200px;

            margin: 0 auto;

            & .navbar {
                display: grid;
                grid-template-columns: 1fr 1fr;

                & .logo,
                & .nav-links {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                }

                & .nav-links {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;

                    & > a {
                        font-weight: 400;
                        color: #6e7191;
                        text-decoration: none;
                    }

                    @media (min-width: 769px) {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;

                        & > a {
                            &:not(:last-child) {
                                margin-bottom: 0;
                            }
                        }
                    }
                }

                @media (min-width: 769px) {
                    grid-template-columns: 90px 1fr;
                    grid-column-gap: 128px;
                }
            }

            & .divider {
                margin: 16px 0;
                border: 0.5px solid #e3e3ea;
            }

            & .etc {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2px;

                & .confidentiality,
                & .copyright,
                & .contacts {
                    font-size: 12px;
                    font-weight: 400;

                    color: #959595;
                    text-decoration: none;
                }

                & .contacts:first-child {
                    margin-top: 8px;
                }
            }
        }
    }
`;

export default FooterStyled;
