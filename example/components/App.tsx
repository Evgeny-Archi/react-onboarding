import React, { FC } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const App: FC = () => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;
