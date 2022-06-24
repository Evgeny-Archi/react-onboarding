import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import svgUri from './assets/1.svg';
import { CrushReports } from './assets';
import { Wrapper } from '../../src/index';

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        text-size-adjust: 100%;
        font-family: Arial, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", -apple-system, sans-serif;
        font-size: 14px;
        line-height: 1.55;
    }

    h1, h2, h3 {
        margin: 0;
        padding: 0;
    }
`;

const App: FC = () => {
    return (
        <>
            <GlobalStyles />
            <div>
                <Header />

                <Wrapper>
                    <img src={svgUri} alt="" />
                </Wrapper>
                <CrushReports />
                <Main />
                <Footer />
            </div>
        </>
    );
};

export default App;
