import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid red;
`;

type Props = {
    children?: ReactNode;
};

const Wrapper: FC<Props> = ({ children }) => {
    return <Container>{children}</Container>;
};

export default Wrapper;
