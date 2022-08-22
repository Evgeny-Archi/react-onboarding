import styled, { keyframes } from 'styled-components';
import withSlideTransition from '../../hoc/with-slide-transition';
import { SLIDEIN_FW, SLIDEOUT_FW, SLIDEIN_BW, SLIDEOUT_BW } from '../../constants/animation-name';

export const SlideContainer = styled.div`
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

const SlideTitle = styled.h3`
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

    &.${SLIDEIN_FW} {
        animation: ${fadeinForward} 0.5s ease-out forwards;
    }
    &.${SLIDEOUT_FW} {
        animation: ${fadeoutForward} 0.5s ease-out forwards;
    }

    &.${SLIDEIN_BW} {
        animation: ${fadeinBackward} 0.5s ease-out forwards;
    }
    &.${SLIDEOUT_BW} {
        animation: ${fadeoutBackward} 0.5s ease-out forwards;
    }
`;

export default withSlideTransition(SlideTitle);
