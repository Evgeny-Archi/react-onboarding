import styled, { keyframes, css } from 'styled-components';

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

const Image = styled.img<{ active: boolean }>`
    will-change: transform, opacity;

    opacity: 0;
    transform: translate(${HIDDEN_IMAGE_OFFSET});

    ${({ active }) =>
        active &&
        css`
            opacity: 1;
            transform: translate(${ACTIVE_IMAGE_OFFSET});
        `}

    &.fadein-forward {
        animation: ${fadeinForward} 1.5s ease-out forwards;
    }

    &.fadein-backward {
        animation: ${fadeinBackward} 1.5s ease-out forwards;
    }

    &.fadeout-forward {
        animation: ${fadeoutForward} 0.5s ease-in forwards;
    }

    &.fadeout-backward {
        animation: ${fadeoutBackward} 0.5s ease-in forwards;
    }
`;

export default Image;
