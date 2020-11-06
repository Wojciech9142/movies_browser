import styled, { css } from "styled-components";

export const BigPoster = styled.div`
    background-image: url(${({ image }) => image});
    height: 770px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    color: white;

    display: flex;
    justify-content: flex-end;
    flex-direction: column;



    &::before{
        content: "";
        position: absolute;
        width: 100%;
        height:100%;
        background: 
        linear-gradient(270deg, 
            #000000 14.11%, 
            rgba(0, 0, 0, 0.873268) 15.08%, 
            rgba(0, 0, 0, 0.720529) 16.51%, 
            rgba(0, 0, 0, 0.294577) 19.99%, 
            rgba(0, 0, 0, 0.159921) 21.88%, 
            rgba(0, 0, 0, 0) 25.68%), 
        linear-gradient(90deg, 
            #000000 13.6%, 
            rgba(0, 0, 0, 0.984059) 14.58%, 
            rgba(0, 0, 0, 0.967732) 15.44%, 
            rgba(0, 0, 0, 0.865569) 16.3%, 
            rgba(0, 0, 0, 0.230315) 22.87%, 
            rgba(0, 0, 0, 0) 26.64%), 
        linear-gradient(180deg, 
            #000000 0%, 
            rgba(0, 0, 0, 0.689555) 4.66%, 
            rgba(0, 0, 0, 0.439033) 9.34%, 
            rgba(0, 0, 0, 0.20628) 15.16%, 
            rgba(0, 0, 0, 0) 24.22%), 
        linear-gradient(189.44deg, 
            rgba(0, 0, 0, 0) 58.48%, 
            rgba(0, 0, 0, 0.106473) 63.17%, 
            rgba(0, 0, 0, 0.235359) 68.85%, 
            rgba(0, 0, 0, 0.492821) 78.08%, 
            rgba(0, 0, 0, 0.740286) 85.86%, 
            #000000 92.87%);
    }

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
        text-align: center;
    `}
`;

export const Rating = styled.div`
    z-index: 1;
    margin: 0 272px;
    font-weight: 500;
    font-size: 30px;
    line-height: 1.3;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    ${(props) => props.details && css`
        margin: 0;
        font-size:22px;
        margin-top: 24px;
        align-items: baseline;
    `}
`;

export const Star = styled.div`
    margin-right: 8px;
`;

export const Rate = styled.span`

&::after{
    content: " / 10";
    font-size: 16px;
    line-height: 1.2;
}


${(props) => props.details && css`
        margin: 0;

        &::after{
            content: " / 10";
            font-size: 14px;
            line-height: 1.2;
        }
    `}
`;

export const Votes = styled.p`
    color: white;
    z-index: 1;
    margin: 17px 0 56px 272px;

    ${(props) => props.detail && css`
        color: black;
        margin: 0 0 0 12px;
        font-size: 14px;
        line-height: 1.2;
    `}
`;

export const Image = styled.img`
    border-radius: 5px;
    min-width: 100%;
    max-height: 231px;

    ${(props) => props.poster &&  css`
        max-width: 100%;
        max-height: 100%;
    `}
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

export const Year = styled.p`
    font-size: 22px;
    line-height: 1.2;
    margin: 0 0 24px 0;
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

export const Genres = styled.div`
    display: flex;
`;

export const Genre = styled.div`
    padding: 8px 16px;
    margin-right: 16px;
    margin: 24px 16px 0 0;
    background: #E4E6F0;
    border-radius: 5px;
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 1.6;
`;

export const Rule = styled.p`
    font-size: 18px;
    line-height: 1.5;
    color: #7E839A;
`;