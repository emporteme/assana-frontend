import styled from 'styled-components';

export const ChildrenStyled = styled.div`
    position: absolute;

    top: ${(props) => props.indent * 138}px;
    left: ${(props) => (props.position === 'right' ? props.indent * 500 : 0)}px;
    right: ${(props) => (props.position === 'left' ? props.indent * 500 : 0)}px;

    width: fit-content;
    height: 118px;

    padding: 16px;

    background: #eff0f7;
    border-radius: 16px;
`;

export const RootStyled = styled.div`
    position: absolute;
    left: ${(props) => props.total_users_score / 2 * 500}px;

    width: fit-content;
    height: 118px;

    padding: 16px;

    background: #eff0f7;
    border-radius: 16px;
`;

export const StructureStyled = styled.div`
    position: relative;

    height: 1000px;

    overflow-x: scroll;
`;
