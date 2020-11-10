import React from 'react';
import { HeaderWrapper, Input, Li, Nav, PageHeader, StyledNavLink, Ul } from './styled';

const Header = () => {
    return (
        <HeaderWrapper>
            <Nav>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.8774 24.9939L32.9858 27.4906C34.1458 27.9639 35.4158 27.1122 35.4158 25.8589V14.7939C35.4158 13.5406 34.1458 12.6872 32.9858 13.1606L26.8774 15.6572" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5068 31.9014H20.9552C24.5952 31.9014 26.8785 29.5297 26.8785 26.1714V14.4797C26.8785 11.1214 24.6052 8.74969 20.9552 8.74969H10.5068C6.85516 8.74969 4.5835 11.1214 4.5835 14.4797V26.1714C4.5835 29.5297 6.85516 31.9014 10.5068 31.9014Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <PageHeader>Movies Browser</PageHeader>
                <Ul>
                    <Li><StyledNavLink to="/movie">MOVIES</StyledNavLink></Li>
                    <Li><StyledNavLink to="/people">PEOPLE</StyledNavLink></Li>
                </Ul>
            </Nav>
            <Input placeholder="🔍 Search for movies..." />
        </HeaderWrapper>)
}

export default Header;