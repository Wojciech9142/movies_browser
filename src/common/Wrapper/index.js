import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    padding: 56px 276px;
    background: #E5E5E5;

    ${(props) => props.itemList && css`
        padding: 0;
        display: grid;
        grid-template-columns: repeat(4, 324px);
        grid-gap: 24px;
        grid-auto-rows: minmax(300px, auto);
    `}

    ${(props) => props.genresList && css`
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        background: transparent;
    `}

    ${(props) => props.personsList && css`
        padding: 0;
        display: grid;
        grid-template-columns: repeat(6, 208px);
        grid-gap: 24px;
    `}

    ${(props) => props.moviePage && css`
        padding: 0;
        margin: 0;
    `}
`;