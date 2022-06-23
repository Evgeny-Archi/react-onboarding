import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import svgUri from './assets/1.svg';
import { CrushReports } from './assets';

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
        font-family: Arial, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", -apple-system, sans-serif;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
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
                <img src={svgUri} alt="" />
                <CrushReports />
                <Main />
                <Footer />
            </div>
        </>
    );
};

export default App;
