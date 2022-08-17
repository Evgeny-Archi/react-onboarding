import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliderState } from '../types/store';

const initialState: SliderState = {
    title: '',
    autoplay: false,
    animation: 'slide',
    activeSlide: {
        id: 0,
        direction: null,
    },
    slides: [],
};

const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        setActiveSlide(state, action: PayloadAction<number>) {
            state.activeSlide = {
                id: action.payload,
                direction: state.activeSlide.id < action.payload ? 'forward' : 'backward',
            };
        },
        toggleAutoplay(state) {
            state.autoplay = !state.autoplay;
        },
        next(state) {
            if (state.slides.length - 1 === state.activeSlide.id) {
                state.activeSlide.id = 0;
                state.activeSlide.direction = 'backward';
            } else {
                state.activeSlide.id += 1;
                state.activeSlide.direction = 'forward';
            }
        },
    },
});

export const { next, setActiveSlide, toggleAutoplay } = sliderSlice.actions;

export default sliderSlice.reducer;
