import React, { FC } from 'react';
import styled from 'styled-components';
import Controls from './Controls';
import AutoPlayButton from './AutoPlayButton';

const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
`;

const Footer: FC = () => {
    return (
        <Container>
            <Controls />
            <AutoPlayButton />
        </Container>
    );
};

export default Footer;
