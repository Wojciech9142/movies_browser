import styled, { css } from "styled-components";

export const Button = styled.button`
    padding: 8px 16px;
    height: 36px;
    background: #D6E4FF;
    border-radius: 5px;
    margin: 0 6px;
    border: none;
    cursor: pointer;

    ${(props) => props.disable && css`
        background: #E4E6F0;
        cursor:inherit;
    `}
`;

export const PaginationWrapper = styled.div`
    margin: 40px auto;
    display: flex;
    justify-content:center;
    align-items: center;
`;

export const PageNumber = styled.span`
    word-spacing: 8px;
    margin: 0 24px;
`;