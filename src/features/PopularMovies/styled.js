import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionHeader = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    color: #18181B;
`;

export const Image = styled.img`
    max-width: 100%;
`;

export const Title = styled.h3`
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    color: #18181B;
    margin-top: 16px;
    margin-bottom:0;
`;

export const Year = styled.h4`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    margin: 8px 0;
    color: #7E839A;
`;

export const GenreElement = styled.p`
    height: 36px;
    background: #E4E6F0;
    border-radius: 5px;
    margin: 8px 8px 8px 0px;
    padding: 8px 16px;
    font-size: 14px;
    line-height: 1.4;
    text-align: center;
`;

export const Rates = styled.div`
    position: static;
    bottom: 0;
    display: flex;
    align-items: center;
`;

export const RatesAverange = styled.span`
    color: #18181B;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin: 0 12px;
`;

export const RatesCount = styled.span`
    font-size: 16px;
    line-height: 1.5;
    color: #7E839A;
    margin: 0 12px;
`;

export const StyledLink = styled(Link)`
    text-decoration :none;
    color: black;
`