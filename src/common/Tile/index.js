import styled, { css } from 'styled-components';

export const Tile = styled.div`
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    background: #FFFFFF;
    padding: 16px;

    ${(props) => props.image && css`
        width: 324px;
        height: 650px;
    `}
`;