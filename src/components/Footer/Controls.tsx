import React, { FC, useEffect, useRef, useState, memo } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useAppSelector, useAppDispatcher } from '../../hooks/redux';
import { setActiveSlide } from '../../store/slice';
import { Circle } from '../../assets';

const ControlsPanel = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
`;

const SlideBlock = styled.div`
    width: 45px;
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    border-radius: 16px;
    background-color: rgba(222, 224, 225, 0.6);
    transition: transform 0.5s ease;
`;

const Separator = styled.div`
    width: 40px;
    text-align: center;
    color: #c2c2c5;
`;

const CircleSvg = styled(Circle)`
    fill: rgb(177, 182, 186);

    &[data-active='true'] {
        fill: #6f7070;
    }
`;

const Controls: FC = () => {
    const ref = useRef<HTMLButtonElement>(null);
    const [activeOffset, setActiveOffset] = useState(0);
    const slides = useAppSelector((state) => state.slider.slides);
    const { id } = useAppSelector((state) => state.slider.activeSlide);
    const dispatch = useAppDispatcher();

    const setActiveSlideHandler = (id: number) => {
        dispatch(setActiveSlide(id));
    };

    useEffect(() => {
        if (ref.current) {
            setActiveOffset(ref.current.offsetLeft);
        }
    }, [id]);

    return (
        <ControlsPanel>
            {slides.map((slide) => {
                return (
                    <>
                        <Button
                            onClick={slide.id === id ? undefined : () => setActiveSlideHandler(slide.id)}
                            key={slide.id}
                            ref={slide.id === id ? ref : null}
                        >
                            {slide.navIcon || <CircleSvg data-active={slide.id === id} />}
                        </Button>
                        {slide.id < slides.length - 1 && <Separator>&#8212;</Separator>}
                    </>
                );
            })}
            <SlideBlock style={{ transform: `translateX(${activeOffset}px)` }} />
        </ControlsPanel>
    );
};

export default memo(Controls);
