import React, { FC, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useAppSelector } from '../../hooks/redux';
import usePrevious from '../../hooks/use-previous';

const Container = styled.div`
    height: 240px;
    margin-left: 500px;
    margin-right: 40px;
    position: relative;
    transition: height 0.5s ease;
    overflow: hidden;
`;

const fadeinForward = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

const fadeoutForward = keyframes`
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 1;
        transform: translateX(-100%);
    }
`;

const fadeinBackward = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`;

const fadeoutBackward = keyframes`
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 1;
        transform: translateX(100%);
    }
`;

const Slide = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;

    &[data-active='true'] {
        opacity: 1;
        z-index: 1;
    }
    &.fadein-forward {
        animation: ${fadeinForward} 0.5s ease-out forwards;
    }
    &.fadeout-forward {
        animation: ${fadeoutForward} 0.5s ease-out forwards;
    }

    &.fadein-backward {
        animation: ${fadeinBackward} 0.5s ease-out forwards;
    }
    &.fadeout-backward {
        animation: ${fadeoutBackward} 0.5s ease-out forwards;
    }
`;

const Slides: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const slideRef = useRef<HTMLDivElement>(null);
    const slides = useAppSelector((state) => state.slider.slides);
    const { id, direction } = useAppSelector((state) => state.slider.activeSlide);
    const prevId = usePrevious<number>(id);

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
            {slides.map((slide) => {
                let className = '';

                if (direction !== null) {
                    if (slide.id === id) {
                        className = direction === 'forward' ? 'fadein-forward' : 'fadein-backward';
                    } else if (slide.id === prevId) {
                        className = direction === 'forward' ? 'fadeout-forward' : 'fadeout-backward';
                    }
                }
                return (
                    <Slide
                        key={slide.id}
                        data-active={slide.id === id}
                        ref={slide.id === id ? slideRef : undefined}
                        className={className}
                    >
                        {slide.content}
                    </Slide>
                );
            })}
        </Container>
    );
};

export default Slides;
