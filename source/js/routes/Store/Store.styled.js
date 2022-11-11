import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    max-width: 1200px;
    margin: 0 auto;

    & .loading {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;
    }

    & .horizontal-filter {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        row-gap: 8px;

        & .catalog {
            padding: 4px 10px;

            color: #60c1c6;

            border: 1px solid #60c1c6;
            border-radius: 16px;

            &:hover {
                cursor: pointer;
            }
        }

        & .catalog.active {
            color: #ffffff;

            background: #60c1c6;
        }
    }

    & .search-bar {
        position: relative;

        width: 100%;
        max-width: 440px;
        height: 56px;

        & img {
            position: absolute;

            width: 32px;
            height: 32px;

            top: 12px;
            left: 12px;
        }

        & input {
            padding-left: 52px;

            width: 100%;
            height: 100%;

            font-size: 1rem;
            color: #6e7191;

            background: #eff0f6;
            border: none;
            border-radius: 16px;

            &::placeholder {
                color: #6e7191;
            }
        }
    }

    & .container {
        display: grid;
        grid-template-columns: repeat(auto-fill, 288px);
        align-items: center;
        justify-content: center;
        gap: 16px;
    }
`;
