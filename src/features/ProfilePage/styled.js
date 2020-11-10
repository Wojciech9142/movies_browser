import styled, { css } from "styled-components";

export const Image = styled.img`
    border-radius: 5px;
    max-width: 100%;
    max-height: 100%;
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Header = styled.h3`
    font-weight: 600;
    font-size: 36px;
    line-height:1.2;
    margin: 8px 0 24px 0;
`;

export const Name = styled.div`
font-size:18px;
line-height:1.2;
color:#74788B;
margin: 0 0 8px 0;
`;

export const Value = styled.p`
display: inline-block;
color: #000000;
margin: 0;
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 1.6;
`;

export const Title = styled.h2`
    font-size: 64px;
    line-height: 1.2;
    font-weight: 600;
    z-index: 1;
    margin: 24.5px 272px;

    ${(props) => props.people && css`
        font-size: 20px;
        margin: 10px 0 8px 0;
        text-align: left;
    `}
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