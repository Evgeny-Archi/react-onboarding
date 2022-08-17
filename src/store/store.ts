import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './slice';
import { SliderProps } from '../types/types';
import { SliderState } from '../types/store';
import logger from './logger';

const createStore = ({ title, autoplay, slides }: SliderProps) => {
    const normalizeSlides = slides.map((slide, idx) => {
        return {
            ...slide,
            id: idx,
        };
    });

    const preloadedState: SliderState = {
        title,
        autoplay: Boolean(autoplay),
        animation: 'slide',
        slides: normalizeSlides,
        activeSlide: {
            id: normalizeSlides[0].id,
            direction: null,
        },
    };

    return configureStore({
        reducer: {
            slider: sliderReducer,
        },
        preloadedState: {
            slider: preloadedState,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    });
};

export default createStore;
