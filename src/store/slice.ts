import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliderState } from '../types/store';
import Directions from '../enums/directions';
import Animations from '../enums/animations';

const initialState: SliderState = {
    title: '',
    autoplay: false,
    animation: Animations.Default,
    disableClouds: false,
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
                direction: state.activeSlide.id < action.payload ? Directions.Forward : Directions.Backward,
            };
        },
        toggleAutoplay(state) {
            state.autoplay = !state.autoplay;
        },
        setAutoplayedSlide(state) {
            if (state.slides.length - 1 === state.activeSlide.id) {
                state.activeSlide.id = 0;
                state.activeSlide.direction = Directions.Backward;
            } else {
                state.activeSlide.id += 1;
                state.activeSlide.direction = Directions.Forward;
            }
        },
    },
});

export const { setAutoplayedSlide, setActiveSlide, toggleAutoplay } = sliderSlice.actions;

export default sliderSlice.reducer;
