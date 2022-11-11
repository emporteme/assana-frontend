import styled from 'styled-components';

export const RecommenderStyled = styled.div`
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;

    width: fit-content;

    padding: 16px;
    margin-left: ${(props) => props.indent * 24}px;

    background: #eff0f7;
    border-radius: 8px;

    .red{
        color:red;
        font-weight: bold;
    }
    
    .blue{
        color:blue;
        font-weight: bold;
    }

    &:not(:first-child) {
        margin-top: 16px;
    }

    &::after {
        position: absolute;
        top: calc(50% - 1px);
        left: -${(props) => props.indent * 24 - 12}px;

        width: ${(props) => props.indent * 24 - 12}px;
        height: 2px;

        background: #60c1c6;
        content: '';
    }

    &:hover {
        cursor: pointer;
    }
`;

export const RecommendersStyled = styled.div`
    position: relative;

    overflow: scroll;

    &::after {
        position: absolute;
        top: 75px;
        left: 12px;

        width: 2px;
        height: calc(100% - 80px - 33px);

        background: #60c1c6;

        content: '';
    }
`;
