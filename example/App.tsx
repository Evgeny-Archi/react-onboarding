import React, { FC } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import sliderItems from './stub';
import SListItemder from '../src';

const Header = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 40px;
    font-size: 20px;
    font-weight: bold;
    color: #2b2b2b;
`;

const Footer = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 40px;
    font-size: 20px;
    font-weight: bold;
`;

const Container = styled.div`
    padding: 60px;
    box-sizing: border-box;
    background-color: #e7e7e7;
`;

const App: FC = () => {
    document.title = 'Example page';

    return (
        <>
            <Header>Header</Header>
            <Container>
                <GlobalStyles />
                <SListItemder {...sliderItems} />
            </Container>
            <Footer>Footer</Footer>
        </>
    );
};

export default App;
