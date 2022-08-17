import { Middleware } from '@reduxjs/toolkit';

const logger: Middleware = ({ getState }) => {
    return (next) => (action) => {
        console.log('Dispatch:', action);

        const returnValue = next(action);

        console.log('State:', getState().slider);
        return returnValue;
    };
};

export default logger;
