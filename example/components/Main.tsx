import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-height: 90vh;
`;

const Main: FC = () => {
    return (
        <Container>
            <h1>Main</h1>
        </Container>
    );
};

export default Main;
