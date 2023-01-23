import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Content from './Content';
import Pentagon from './Pentagon';
import Header from './Header';
import SlideTitle from './SlideTitle';
import Title from './Title';
import Slides from './Slides';
import Footer from './Footer/Footer';
import AnimatedSpin from './AnimatedSpin/AnimatedSpin';
import { useAppSelector, useAppDispatcher } from '../hooks/redux';
import { setAutoplayedSlide } from '../store/slice';
import { SliderProps } from '../types/types';

const Relative = styled.div`
    position: relative;
`;

const Slider: FC<Pick<SliderProps, 'className'>> = ({ className }) => {
    const intervalRef = useRef<number>();
    const dispatch = useAppDispatcher();
    const autoplay = useAppSelector((state) => state.slider.autoplay);

    useEffect(() => {
        if (autoplay) {
            intervalRef.current = window.setInterval(() => {
                dispatch(setAutoplayedSlide());
            }, 1500);
        } else {
            clearInterval(intervalRef.current);
        }
    }, [autoplay, dispatch]);

    return (
        <Relative>
            <AnimatedSpin />
            <Content className={className}>
                <Pentagon />
                <SlideTitle />
                <Header />
                <Title />
                <Slides />
                <Footer />
            </Content>
        </Relative>
    );
};

export default Slider;
