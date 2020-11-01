import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 94px;
    background-color: #181818;
    padding: 0 292px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Nav = styled.nav`
    height: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
`;

export const PageHeader = styled.h1`
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1.5px;
    font-weight: 500px;
    margin-left: 12px;
    margin-right: 80px;
`;

export const Ul = styled.ul`
    margin: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 102px 102px;
    grid-gap: 16px;
    align-items: center;
`;

export const Li = styled.li`
    line-height: 21px;
    font-size: 14px;
    font-weight: 600;
    height: 48px;
    padding: 8px 0 0 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    width: 432px;
    height: 48px;
    border: 1px solid #E4E6F0;
    box-sizing: border-box;
    border-radius: 33px;
    padding: 12px 27px; 
    line-height: 24px;
    font-size:16px;
`;

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    &.${activeClassName}{
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 24px;
        text-decoration: none;
        padding: 13.5px 24px;
        color: white;
    }
`;