import styled, { keyframes } from 'styled-components';
import withSlideTransition from '../../hoc/with-slide-transition';

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

const SlideSlide = styled.div`
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

export default withSlideTransition(SlideSlide);
