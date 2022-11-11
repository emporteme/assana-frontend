import styled from 'styled-components';

export default styled.div`
    min-height: calc(100vh - 94.5px - 185px - 48px);

    margin: 24px 16px;

    @media (min-width: 426px) and (max-width: 580px) {
        margin: 24px 32px;
    }

    @media (min-width: 581px) {
        margin: 24px 64px;
    }
`;
