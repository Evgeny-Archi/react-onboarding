import React, { FC, forwardRef, ForwardedRef } from 'react';
import { useAppSelector } from '../../hooks/redux';
import SlideSlide from './SlideSlide';
import FadeSlide from './FadeSlide';
import Animations from '../../enums/animations';

type Props = {
    ref?: ForwardedRef<HTMLDivElement>;
};

// eslint-disable-next-line react/display-name
const Slides: FC<Props> = forwardRef((props, ref) => {
    const { slides, animation } = useAppSelector((state) => state.slider);
    const { id } = useAppSelector((state) => state.slider.activeSlide);

    const Slide = animation === Animations.Default ? SlideSlide : FadeSlide;

    return (
        <>
            {slides.map((slide) => (
                <Slide key={slide.id} id={slide.id} forwardedRef={slide.id === id ? ref : null}>
                    {slide.content}
                </Slide>
            ))}
        </>
    );
});

export default Slides;
