import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { useAppSelector } from '../../hooks/redux';
import usePrevious from '../../hooks/use-previous';

const Container = styled.div`
    width: 300px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    filter: url(#threshold);
`;

const Relative = styled.div`
    position: relative;
    height: 100%;
`;

const fadeout = keyframes`
    0% {
        opacity: 1;
        filter: blur(0px);
    }
    90% {
        opacity: 0.6;
        filter: blur(10px);
    }
    100% {
        opacity: 0;
        filter: blur(100px);
    }
`;

const fadein = keyframes`
    0% {
        opacity: 0;
        filter: blur(100px);
    }
    10% {
        opacity: 0.6;
        filter: blur(10px);
    }
    100% {
        opacity: 1;
        filter: blur(0px);
    }
`;

const Heading = styled.h3`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 42px;
    color: #fefefc;
    text-align: center;
    line-height: 1;
    opacity: 0;

    &[data-active='true'] {
        opacity: 1;
    }

    &.fadein {
        animation: ${fadein} 0.8s ease-out forwards;
    }
    &.fadeout {
        animation: ${fadeout} 0.8s ease-out forwards;
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
                            className = 'fadein';
                        } else if (slide.id === prevId) {
                            className = 'fadeout';
                        }
                    }
                    return (
                        <Heading key={slide.id} data-active={slide.id === id} className={className}>
                            {slide.title}
                        </Heading>
                    );
                })}
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
            </Relative>
        </Container>
    );
};

export default SlideTitle;
