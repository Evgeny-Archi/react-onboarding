import React, { FC } from 'react';
import styled from 'styled-components';
import SmallBlock, { RedBlock } from './SmallBlock';

const Container = styled.div`
    display: flex;
    height: 50px;
    background: #000;
    box-sizing: border-box;
    padding: 10px 5%;

    & > * {
        margin-right: 10px;
    }

    & > *:last-of-type {
        margin-right: 0;
    }
`;

const Logo = styled(SmallBlock)`
    width: 30px;
    border-radius: 50%;
    background: red;
`;

const Header: FC = () => {
    return (
        <Container>
            <Logo />
            <SmallBlock />
            <SmallBlock />
            <SmallBlock />
            <SmallBlock />
            <SmallBlock />
            <SmallBlock />
            <RedBlock />
        </Container>
    );
};

export default Header;
