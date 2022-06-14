import React, { FC } from 'react';
import styled from 'styled-components';

const Title = styled.h1<{ color: string }>`
    color: ${({ color }) => color || '#ccc;'};
    border: 1px solid red;
`;

const Header: FC = () => {
    return <Title color="blue">Header</Title>;
};

export default Header;
