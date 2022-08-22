import React, { FC } from 'react';
import SlideTitle, { SlideContainer } from './SlideTitle';
import FadeTitle, { FadeContainer } from './FadeTitle';
import { useAppSelector } from '../../hooks/redux';
import Animations from '../../enums/animations';

const Title: FC = () => {
    const { slides, animation } = useAppSelector((state) => state.slider);
    const AnimatedTitle = animation === Animations.Default ? SlideTitle : FadeTitle;
    const Container = animation === Animations.Default ? SlideContainer : FadeContainer;

    return (
        <Container>
            {slides.map((slide) => (
                <AnimatedTitle key={slide.id} id={slide.id}>
                    {slide.title}
                </AnimatedTitle>
            ))}
            {animation === Animations.Fade && (
                <svg id="filters">
                    <defs>
                        <filter id="threshold">
                            <feColorMatrix
                                in="SourceGraphic"
                                type="matrix"
                                values="1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 255 -140"
                            />
                        </filter>
                    </defs>
                </svg>
            )}
        </Container>
    );
};

export default Title;
