import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';

const Heading = styled.h2`
    font-size: 30px;
    font-weight: normal;
    margin-left: 500px;
    margin-bottom: 20px;
`;

const Title: FC = () => {
    const title = useAppSelector((state) => state.slider.title);

    return <Heading>{title}</Heading>;
};

export default Title;
