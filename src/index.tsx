import React, { FC } from 'react';
import { Props } from './types';

export { Props } from './types';

const App: FC<Props> = ({ children }) => {
    return (
        <div>
            <h1>Title</h1>
            <div>{children}</div>
        </div>
    );
};

export default App;
