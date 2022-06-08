import React, { FC } from 'react';
import styled from 'styled-components';
import svgUri from './assets/crush-reports.svg';
import { Props } from './types';

type ContainerPros = {
    color?: string;
};

const Container = styled.div<ContainerPros>`
    border: 1px solid red;
    color: ${({ color }) => color || '#000;'};
`;

export { Props } from './types';

const App: FC<Props> = ({ name, children }) => {
    console.log(name);
    return (
        <div>
            <h1>Title</h1>
            <Container color="#ccc">React app</Container>
            <div>{children}</div>
            <img src={svgUri} alt="" />
        </div>
    );
};

export default App;
