import styled, { keyframes } from 'styled-components';
import withFadeTransition from '../../hoc/with-fade-transition';
import { FADEIN, FADEOUT } from '../../constants/animation-name';

export const FadeContainer = styled.div`
    position: relative;
    height: 100%;
    filter: url(#threshold);
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

const FadeTitle = styled.h3`
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

    &.${FADEIN} {
        animation: ${fadein} 0.8s ease-out forwards;
    }
    &.${FADEOUT} {
        animation: ${fadeout} 0.8s ease-out forwards;
    }
`;

export default withFadeTransition(FadeTitle);
