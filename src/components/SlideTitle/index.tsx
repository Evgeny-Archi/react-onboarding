import React, { FC } from 'react';
import styled from 'styled-components';
import SlideTitle from './Title';

const Container = styled.div`
    width: 250px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 20px;
    z-index: 1;
`;

const Title: FC = () => {
    return (
        <Container>
            <SlideTitle />
        </Container>
    );
};

export default Title;
