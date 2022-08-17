import React, { FC, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';

const colors = [
    { start: '#f6bb63', stop: '#fde56d' },
    { start: '#59f1cb', stop: '#57eee8' },
    { start: '#b679f4', stop: '#986ef3' },
];

const Shape = styled.svg`
    width: 500px;
    height: 500px;
    position: absolute;
    z-index: 1;
    top: -120px;
    left: -140px;
    transform-origin: 50% 50%;
    transition: transform 0.5s linear;

    stop {
        transition: all 0.5s linear;
    }
`;

const Pentagon: FC = () => {
    const { id, direction } = useAppSelector((state) => state.slider.activeSlide);
    const currentValue = useRef(id);
    const [rotateDeg, setRotateDeg] = useState(20);

    useEffect(() => {
        if (currentValue.current !== id) {
            if (direction === 'forward') {
                setRotateDeg((prevState) => prevState + 60);
            } else {
                setRotateDeg((prevState) => prevState - 60);
            }
            currentValue.current = id;
        }
    }, [direction, id]);

    return (
        <Shape
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 376 376"
            style={{ transform: `rotate(${rotateDeg}deg)` }}
        >
            <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop id="stop1" stopColor={colors[id].start} offset="0%"></stop>
                    <stop id="stop2" stopColor={colors[id].stop} offset="100%"></stop>
                </linearGradient>
            </defs>
            <path
                stroke="none"
                strokeWidth="0"
                fill="url(#sw-gradient)"
                d="M148 11.094010767585a80 80 0 0 1 80 0l93.205080756888 53.81197846483a80 80 0 0 1 40 69.282032302755l0 107.62395692966a80 80 0 0 1 -40 69.282032302755l-93.205080756888 53.81197846483a80 80 0 0 1 -80 0l-93.205080756888 -53.81197846483a80 80 0 0 1 -40 -69.282032302755l1.714083518205e-13 -107.62395692966a80 80 0 0 1 40 -69.282032302755"
            ></path>
        </Shape>
    );
};

export default Pentagon;
