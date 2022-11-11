import styled from 'styled-components';

const WalletStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    grid-row-gap: 16px;
    grid-column-gap: 48px;

    & > .wallet-block {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;

        padding: 24px 20px;

        background: #eff0f7;
        border-radius: 12px;

        & > .wallet-information {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            & p:first-child {
                font-size: 1rem;
                color: #6e7191;
            }

            & p:last-child {
                font-size: 1.25rem;
                font-weight: 500;
            }
        }
    }

    & > .wallet-block:first-child {
        background: #60c1c6;

        & .wallet-information {
            & p {
                color: #ffffff;
            }
        }
    }
`;

export default WalletStyled;
