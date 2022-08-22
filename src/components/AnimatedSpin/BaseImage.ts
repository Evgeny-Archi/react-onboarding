import styled, { keyframes } from 'styled-components';
import withSlideTransition from '../../hoc/with-slide-transition';
import { SLIDEIN_FW, SLIDEOUT_FW, SLIDEIN_BW, SLIDEOUT_BW } from '../../constants/animation-name';

const HIDDEN_IMAGE_OFFSET = '-180px, -50px';
const ACTIVE_IMAGE_OFFSET = '180px, 50px';

const fadeinForward = keyframes`
    from { transform: rotate(0deg) translate(${HIDDEN_IMAGE_OFFSET}) rotate(0deg); opacity: 0; }
    45% { transform: rotate(160deg) translate(${HIDDEN_IMAGE_OFFSET}) rotate(-160deg); opacity: 1; }
    to { transform: rotate(180deg) translate(${HIDDEN_IMAGE_OFFSET}) rotate(-180deg); opacity: 1; }
`;

const fadeinBackward = keyframes`
    from { transform: rotate(0deg) translate(${HIDDEN_IMAGE_OFFSET}) rotate(0deg); opacity: 0; }
    45% { transform: rotate(-160deg) translate(${HIDDEN_IMAGE_OFFSET}) rotate(160deg); opacity: 1; }
    to { transform: rotate(-180deg) translate(${HIDDEN_IMAGE_OFFSET}) rotate(180deg); opacity: 1; }
`;

const fadeoutForward = keyframes`
    from { transform: rotate(0deg) translate(${ACTIVE_IMAGE_OFFSET}) rotate(0deg); opacity: 1; }
    50% { opacity: 1; }
    to { transform: rotate(180deg) translate(${ACTIVE_IMAGE_OFFSET}) rotate(-180deg); opacity: 0; }
`;

const fadeoutBackward = keyframes`
    from { transform: rotate(0deg) translate(${ACTIVE_IMAGE_OFFSET}) rotate(0deg); opacity: 1; }
    50% { opacity: 1; }
    to { transform: rotate(-180deg) translate(${ACTIVE_IMAGE_OFFSET}) rotate(180deg); opacity: 0; }
`;

const BaseImage = styled.img`
    width: 200px;
    height: auto;
    position: absolute;
    top: 200px;
    left: 200px;
    filter: drop-shadow(0 60px 30px hsla(60, 0%, 53%, 30%)) drop-shadow(0 60px 40px hsla(100, 10%, 10%, 20%));
    /* filter: drop-shadow(0 70px 30px hsla(243, 15%, 50%, 50%)) drop-shadow(0 70px 40px hsla(100, 10%, 10%, 30%)); */
    will-change: transform, opacity;

    opacity: 0;
    transform: translate(${HIDDEN_IMAGE_OFFSET});

    &[data-active='true'] {
        opacity: 1;
        transform: translate(${ACTIVE_IMAGE_OFFSET});
    }

    &.${SLIDEIN_FW} {
        animation: ${fadeinForward} 1.5s ease-out forwards;
    }

    &.${SLIDEIN_BW} {
        animation: ${fadeinBackward} 1.5s ease-out forwards;
    }

    &.${SLIDEOUT_FW} {
        animation: ${fadeoutForward} 0.5s ease-in forwards;
    }

    &.${SLIDEOUT_BW} {
        animation: ${fadeoutBackward} 0.5s ease-in forwards;
    }
`;

export default withSlideTransition<HTMLImageElement>(BaseImage);
