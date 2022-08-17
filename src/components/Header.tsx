import React, { FC } from 'react';
import styled from 'styled-components';
import logoUrl from '../assets/logo.png';

const LogoContainer = styled.header`
    display: flex;
    justify-content: flex-end;
    padding: 40px 40px 20px;

    img {
        width: 40px;
        height: 40px;
    }
`;

const Header: FC = () => {
    return (
        <LogoContainer>
            <img src={logoUrl} alt="" />
        </LogoContainer>
    );
};

export default Header;
