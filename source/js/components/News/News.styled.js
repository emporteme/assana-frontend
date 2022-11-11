import styled from 'styled-components';

export const NewDetailedStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.5);

    z-index: 1;

    & .content {
        display: flex;
        flex-direction: column;
        gap: 16px;

        width: calc(100% - 16px - 16px);
        max-width: 800px;

        background: #ffffff;
        border-radius: 16px;

        & .image-container {
            position: relative;

            height: 300px;

            background: linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.1)
                ),
                url(${(props) => props.bg});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 16px 16px 0 0;

            overflow: hidden;

            & img {
                position: absolute;

                top: 16px;
                right: 16px;

                &:hover {
                    cursor: pointer;
                }
            }
        }

        & .information {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 16px;
            padding-top: 0;
        }
    }
`;

export const NewStyled = styled.div`
    position: relative;

    min-width: 256px;
    min-height: 256px;

    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
        url(${(props) => props.bg});
    background-size: cover;
    background-position: center;
    border-radius: 12px;

    & .content {
        position: absolute;
        left: 0;
        bottom: 0px;

        width: 100%;

        padding: 16px;

        color: #ffffff;

        & h2 {
            font-size: 1.125rem;
        }

        & p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    &:hover {
        cursor: pointer;
    }
`;

export const NewsStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    grid-gap: 16px;
`;
