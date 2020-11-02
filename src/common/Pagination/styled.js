import styled from "styled-components";

export const Button = styled.button`
    padding: 8px 16px;
    height: 36px;
    background: #E4E6F0;
    border-radius: 5px;
    margin: 0 6px;
    border: none;
`;

export const PaginationWrapper = styled.div`
    margin: 40px auto;
    display: flex;
    justify-content:center;
    align-items: center;
    grid-column-start:1;
    grid-column-end:5;
`;

export const PageNumber = styled.span`
    word-spacing: 8px;
    margin: 0 24px;
`;