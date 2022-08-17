import createStore from '../store/store';
import sliderReducer from '../store/slice';
import { SliderProps, Slide } from './types';

export interface SlideState extends Slide {
    id: number;
}

interface ActiveSlide {
    id: number;
    direction: null | 'forward' | 'backward';
}

export type SliderState = {
    title: SliderProps['title'];
    autoplay: SliderProps['autoplay'];
    activeSlide: ActiveSlide;
    animation: string;
    slides: SlideState[];
};

export type AppState = {
    slider: ReturnType<typeof sliderReducer>;
};
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
