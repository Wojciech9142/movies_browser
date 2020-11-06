import styled, { css } from 'styled-components';

export const Tile = styled.div`
    height: 100%;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    background: #FFFFFF;
    padding: 16px;
    display: grid;
    grid-template-rows: repeat(4, auto) 24px;

    ${(props) => props.movieDetail && css`
        grid-template-columns:minmax(0, 315px) 1fr;
        grid-template-rows: auto;
        margin: 64px 276px;
        padding: 40px;
        grid-gap: 40px;
    `}

    ${(props) => props.people && css`
        display: grid;
        grid-template-rows: 1fr auto auto;
        text-align: center;
    `}
`;