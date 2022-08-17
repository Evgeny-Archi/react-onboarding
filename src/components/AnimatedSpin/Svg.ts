import styled, { css, keyframes } from 'styled-components';
import { Car, Parts } from '../../assets';

const getFadeInAnimation = (offset: string, forwarded?: boolean) => keyframes`
        from {
            transform: rotate(0deg) translate(${offset}) rotate(0deg); opacity: 0;
        }
        35% {
            transform: rotate(${forwarded ? '160deg' : '-160deg'}) translate(${offset}) rotate(${
    forwarded ? '-160deg' : '160deg'
}); opacity: 1;
        }
        to {
            transform: rotate(${forwarded ? '180deg' : '-180deg'}) translate(${offset}) rotate(${
    forwarded ? '-180deg' : '180deg'
}); opacity: 1;
        }
`;

const getFadeOutAnimation = (offset: string, forwarded?: boolean) => keyframes`
    from { transform: rotate(0deg) translate(${offset}) rotate(0deg); opacity: 1; }
    50% { opacity: 1; }
    to { transform: rotate(${forwarded ? '180deg' : '-180deg'}) translate(${offset}) rotate(${
    forwarded ? '-180deg' : '180deg'
}); opacity: 0; }
`;

const HIDDEN_PARTS_OFFSET = '-50px, -120px';
const ACTIVE_PARTS_OFFSET = '50px, 120px';

export const PartsSvg = styled(Parts)<{ active: boolean }>`
    will-change: transform, opacity;
    opacity: 0;
    transform: translate(${HIDDEN_PARTS_OFFSET});

    ${({ active }) =>
        active &&
        css`
            opacity: 1;
            transform: translate(${ACTIVE_PARTS_OFFSET});
        `}

    &.fadein-forward {
        animation: ${getFadeInAnimation(HIDDEN_PARTS_OFFSET, true)} 2s ease-out forwards;
    }

    &.fadein-backward {
        animation: ${getFadeInAnimation(HIDDEN_PARTS_OFFSET)} 2s ease-out forwards;
    }

    &.fadeout-forward {
        animation: ${getFadeOutAnimation(ACTIVE_PARTS_OFFSET, true)} 0.5s linear forwards;
    }

    &.fadeout-backward {
        animation: ${getFadeOutAnimation(ACTIVE_PARTS_OFFSET)} 0.5s linear forwards;
    }
`;

const HIDDEN_CAR_OFFSET = '-100px, 150px';
const ACTIVE_CAR_OFFSET = '100px, -150px';

export const CarSvg = styled(Car)<{ active: boolean }>`
    will-change: transform, opacity;
    opacity: 0;
    transform: translate(${HIDDEN_CAR_OFFSET});

    ${({ active }) =>
        active &&
        css`
            opacity: 1;
            transform: translate(${ACTIVE_CAR_OFFSET});
        `}

    &.fadein-forward {
        animation: ${getFadeInAnimation(HIDDEN_CAR_OFFSET, true)} 2s ease-out forwards;
    }

    &.fadein-backward {
        animation: ${getFadeInAnimation(HIDDEN_CAR_OFFSET)} 2s ease-out forwards;
    }

    &.fadeout-forward {
        animation: ${getFadeOutAnimation(ACTIVE_CAR_OFFSET, true)} 0.5s linear forwards;
    }

    &.fadeout-backward {
        animation: ${getFadeOutAnimation(ACTIVE_CAR_OFFSET)} 0.5s linear forwards;
    }
`;
