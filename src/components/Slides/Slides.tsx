import React, { FC, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/redux';

const Container = styled.div`
    height: 240px;
    margin-left: 500px;
    position: relative;
    transition: height 0.5s ease;
`;

const Slide = styled.div`
    padding-right: 40px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.5s ease;

    &[data-active='true'] {
        opacity: 1;
        z-index: 1;
    }
`;

const Slides: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const slideRef = useRef<HTMLDivElement>(null);
    const slides = useAppSelector((state) => state.slider.slides);
    const { id } = useAppSelector((state) => state.slider.activeSlide);

    useEffect(() => {
        if (slideRef.current && containerRef.current) {
            if (slideRef.current.offsetHeight > 240) {
                containerRef.current.style.height = `${slideRef.current.offsetHeight}px`;
            } else {
                containerRef.current.style.height = '240px';
            }
        }
    }, [id]);

    return (
        <Container ref={containerRef}>
            {slides.map((slide) => (
                <Slide key={slide.id} data-active={slide.id === id} ref={slide.id === id ? slideRef : undefined}>
                    {slide.content}
                </Slide>
            ))}
        </Container>
    );
};

export default Slides;
