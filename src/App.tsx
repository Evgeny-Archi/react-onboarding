import React, { FC } from 'react';
import svgUri from './assets/crush-reports.svg';
import { Props } from './types';

export { Props } from './types';

const App: FC<Props> = ({ name, children }) => {
    console.log(name);
    console.log('test');
    return (
        <div>
            <h1>Title</h1>
            <div>{children}</div>
            <img src={svgUri} alt="" />
        </div>
    );
};

export default App;
