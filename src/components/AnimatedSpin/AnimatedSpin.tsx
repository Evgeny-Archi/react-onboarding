import React, { FC, Fragment } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/redux';
import usePrevious from '../../hooks/use-previous';
import Image from './Image';
import { CarSvg, PartsSvg } from './Svg';

const Container = styled.div`
    position: absolute;
    top: -120px;
    left: -120px;
    z-index: 2;
`;

const Block = styled.div`
    width: 500px;
    height: 500px;
    position: relative;

    img {
        width: 200px;
        height: auto;
        position: absolute;
        top: 200px;
        left: 200px;
        /* filter: drop-shadow(0 60px 30px hsla(60, 0%, 53%, 30%)) drop-shadow(0 60px 40px hsla(100, 10%, 10%, 20%)); */
        filter: drop-shadow(0 70px 30px hsla(243, 15%, 50%, 50%)) drop-shadow(0 70px 40px hsla(100, 10%, 10%, 30%));
    }

    svg {
        width: 60px;
        height: auto;
        position: absolute;
        top: 250px;
        left: 250px;
        filter: blur(4px) drop-shadow(0 40px 30px hsla(100, 10%, 10%, 40%));
    }
`;

const AnimatedSpin: FC = () => {
    const { slides } = useAppSelector((state) => state.slider);
    const { id, direction } = useAppSelector((state) => state.slider.activeSlide);
    const prevImageId = usePrevious<number>(id);

    return (
        <Container>
            <Block>
                {slides.map((slide) => {
                    let className = '';

                    if (direction !== null) {
                        if (slide.id === id) {
                            className = direction === 'forward' ? 'fadein-forward' : 'fadein-backward';
                        } else if (slide.id === prevImageId) {
                            className = direction === 'forward' ? 'fadeout-forward' : 'fadeout-backward';
                        }
                    }
                    return (
                        <Fragment key={slide.id}>
                            <Image
                                src={slide.imageUrl}
                                alt={slide.title}
                                active={slide.id === id}
                                className={className}
                            />
                            <CarSvg active={slide.id === id} className={className} />
                            <PartsSvg active={slide.id === id} className={className} />
                        </Fragment>
                    );
                })}
            </Block>
        </Container>
    );
};

export default AnimatedSpin;
