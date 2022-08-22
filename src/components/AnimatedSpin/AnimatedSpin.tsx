import React, { FC, Fragment } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/redux';
import BaseImage from './BaseImage';
import BottomBluredImage from './BottomBluredImage';
import TopBluredImage from './TopBluredImage';
import carUrl from '../../assets/car.svg';
import partsUrl from '../../assets/parts.svg';
// import topSphereUrl from '../../assets/top-sphere.svg';
// import bottomSphereUrl from '../../assets/bottom-sphere.svg';

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
`;

const AnimatedSpin: FC = () => {
    const { slides } = useAppSelector((state) => state.slider);
    const { disableClouds } = useAppSelector((state) => state.slider);

    return (
        <Container>
            <Block>
                {slides.map((slide) => (
                    <Fragment key={slide.id}>
                        <BaseImage src={slide.imageUrl} alt={slide.title} id={slide.id} />
                        {!disableClouds && (
                            <>
                                <TopBluredImage src={carUrl} alt="" id={slide.id} />
                                <BottomBluredImage src={partsUrl} alt="" id={slide.id} />
                            </>
                        )}
                    </Fragment>
                ))}
            </Block>
        </Container>
    );
};

export default AnimatedSpin;
