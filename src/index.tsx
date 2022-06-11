import React, { FC } from 'react';
import svgUri from './assets/1.svg';
import { CrushReports } from './assets';
import { Props } from './types';

export { Props } from './types';

const App: FC<Props> = ({ children }) => {
    return (
        <div>
            <h1>Title</h1>
            <div>{children}</div>
            <img src={svgUri} alt="" />
            <CrushReports />
        </div>
    );
};

export default App;
