import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { useAppSelector } from '../../hooks/redux';
import usePrevious from '../../hooks/use-previous';

const Container = styled.div`
    width: 250px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 20px;
    z-index: 1;
`;

const Relative = styled.div`
    position: relative;
    height: 100%;
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

const Heading = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 42px;
    color: #fefefc;
    text-align: center;
    line-height: 1;
    opacity: 0;

    &[data-active='true'] {
        opacity: 1;
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

const SlideTitle: FC = () => {
    const { id, direction } = useAppSelector((state) => state.slider.activeSlide);
    const slides = useAppSelector((state) => state.slider.slides);
    const prevId = usePrevious<number>(id);

    return (
        <Container>
            <Relative>
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
                        <Heading key={slide.id} data-active={slide.id === id} className={className}>
                            {slide.title}
                        </Heading>
                    );
                })}
            </Relative>
        </Container>
    );
};

export default SlideTitle;
