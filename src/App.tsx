import React, { FC } from 'react';
import { Provider as ReduxStoreProvider } from 'react-redux';
import createStore from './store/store';
import Slider from './components/Slider';
import { SliderProps } from './types/types';

const App: FC<SliderProps> = ({ className, ...sliderProps }) => {
    const store = createStore(sliderProps);

    console.log(store.getState());

    return (
        <ReduxStoreProvider store={store}>
            <Slider className={className} />
        </ReduxStoreProvider>
    );
};

export default App;
