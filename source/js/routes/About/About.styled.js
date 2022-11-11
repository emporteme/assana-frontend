import styled from 'styled-components';

export default styled.div`
    max-width: 1200px;

    margin: 0 auto;

    & .banner {
        display: none;
    }

    @media (min-width: 1044px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 24px;
        align-items: center;

        & .banner {
            display: block;

            & img {
                width: 100%;
            }
        }
    }
`;
