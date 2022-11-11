import styled from 'styled-components';

const AccountStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    grid-row-gap: 16px;
    grid-column-gap: 48px;

    & > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 12px 24px;

        background: #eff0f7;
        border-radius: 16px;

        overflow: scroll;

        & > img {
            &:hover {
                cursor: pointer;
            }
        }

        & > div {
            & p {
                overflow: scroll;
            }

            & p:first-child {
                font-size: 1rem;
                color: #6e7191;
            }

            & p:last-child {
                font-size: 1.25rem;
                color: #14142b;
            }
        }
    }
`;

export default AccountStyled;
