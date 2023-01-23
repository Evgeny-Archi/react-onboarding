import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './slice';
import { SliderProps } from '../types/types';
import { SliderState } from '../types/store';
import logger from './logger';
import Animations from '../enums/animations';

const createStore = ({ title, autoplay, slides, animation, disableClouds }: SliderProps) => {
    const normalizeSlides = slides.map((slide, idx) => {
        return {
            ...slide,
            id: idx,
        };
    });

    const preloadedState: SliderState = {
        title,
        autoplay: Boolean(autoplay),
        animation: animation || Animations.Default,
        slides: normalizeSlides,
        disableClouds: Boolean(disableClouds),
        activeSlide: {
            id: normalizeSlides[0].id,
            direction: null,
        },
    };

    const store = configureStore({
        reducer: {
            slider: sliderReducer,
        },
        preloadedState: {
            slider: preloadedState,
        },
        middleware: (getDefaultMiddleware) => {
            const middleware = getDefaultMiddleware();
            if (__DEV__) middleware.push(logger);
            return middleware;
        },
    });

    if (__DEV__) console.log(store.getState());

    return store;
};

export default createStore;
