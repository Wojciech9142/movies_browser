import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    padding: 56px 276px;
    background: #E5E5E5;

    ${(props) => props.itemList && css`
        padding: 0;
        display: grid;
        grid-template-columns: repeat(4, 324px);
        grid-gap: 24px;
    `}

    ${(props) => props.genresList && css`
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        background: transparent;
    `}

    ${(props) => props.personsList && css`
        display: grid;
        grid-template-columns: repeat(6, 208px);
        padding : 0;
        grid-gap: 24px;
    `}
`;