import styled from 'styled-components';

export default styled.div`
    width: 100vw;

    & .beta-test-warning {
        position: sticky;
        top: 0px;
        padding: 6px 0;

        font-size: 12px;
        font-weight: 400;
        color: #ffffff;
        text-align: center;

        background: #fe968d;

        z-index: 9999;
    }
`;
