import React, { FC, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Slides from './Slides';
import { useAppSelector } from '../../hooks/redux';

const Container = styled.div`
    height: 240px;
    margin-left: 500px;
    margin-right: 40px;
    position: relative;
    transition: height 0.5s ease;
    overflow: hidden;
`;

const BaseSlide: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const slideRef = useRef<HTMLDivElement>(null);
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
            <Slides ref={slideRef} />
        </Container>
    );
};

export default BaseSlide;
