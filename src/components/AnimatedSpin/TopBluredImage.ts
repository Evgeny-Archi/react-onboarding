import styled, { keyframes } from 'styled-components';
import withSlideTransition from '../../hoc/with-slide-transition';
import { SLIDEIN_FW, SLIDEOUT_FW, SLIDEIN_BW, SLIDEOUT_BW } from '../../constants/animation-name';

const HIDDEN_IMAGE_OFFSET = '-100px, 150px';
const ACTIVE_IMAGE_OFFSET = '100px, -150px';

const slideinForward = keyframes`
    from {
            transform: rotate(0deg) translate(${HIDDEN_IMAGE_OFFSET}) rotate(0deg); opacity: 0;
        }
        35% {
            transform: rotate(160deg) translate(${HIDDEN_IMAGE_OFFSET}) rotate(-160deg); opacity: 1;
        }
        to {
            transform: rotate(180deg) translate(${HIDDEN_IMAGE_OFFSET}) rotate(-180deg); opacity: 1;
        }
`;

const slideoutForward = keyframes`
    from {
            transform: rotate(0deg) translate(${ACTIVE_IMAGE_OFFSET}) rotate(0deg); opacity: 1;
        }
        50% { opacity: 1; }
        to {
            transform: rotate(180deg) translate(${ACTIVE_IMAGE_OFFSET}) rotate(-180deg); opacity: 0;
        }
`;

const slideinBackward = keyframes`
    from {
            transform: rotate(0deg) translate(${HIDDEN_IMAGE_OFFSET}) rotate(0deg); opacity: 0;
        }
        35% {
            transform: rotate(-160deg) translate(${HIDDEN_IMAGE_OFFSET}) rotate(160deg); opacity: 1;
        }
        to {
            transform: rotate(-180deg) translate(${HIDDEN_IMAGE_OFFSET}) rotate(180deg); opacity: 1;
        }
`;

const slideoutBackward = keyframes`
    from {
            transform: rotate(0deg) translate(${ACTIVE_IMAGE_OFFSET}) rotate(0deg); opacity: 1;
        }
        50% { opacity: 1; }
        to {
            transform: rotate(-180deg) translate(${ACTIVE_IMAGE_OFFSET}) rotate(180deg); opacity: 0;
        }
`;

const TopBluredImage = styled.img`
    width: 60px;
    height: auto;
    position: absolute;
    top: 230px;
    left: 220px;
    filter: blur(4px) drop-shadow(0 40px 30px hsla(100, 10%, 10%, 40%));

    opacity: 0;
    transform: translate(${HIDDEN_IMAGE_OFFSET});

    &[data-active='true'] {
        opacity: 1;
        transform: translate(${ACTIVE_IMAGE_OFFSET});
    }

    &.${SLIDEIN_FW} {
        animation: ${slideinForward} 2s ease-out forwards;
    }

    &.${SLIDEIN_BW} {
        animation: ${slideinBackward} 2s ease-out forwards;
    }

    &.${SLIDEOUT_FW} {
        animation: ${slideoutForward} 0.5s linear forwards;
    }

    &.${SLIDEOUT_BW} {
        animation: ${slideoutBackward} 0.5s linear forwards;
    }
`;

export default withSlideTransition<HTMLImageElement>(TopBluredImage);
