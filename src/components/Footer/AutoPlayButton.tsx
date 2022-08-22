import React, { FC } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Play } from '../../assets';
import { useAppSelector, useAppDispatcher } from '../../hooks/redux';
import { toggleAutoplay } from '../../store/slice';

const PlayButton = styled(Button)`
    &[data-active='true'] {
        color: #6f7070;
        background-color: rgba(222, 224, 225, 0.6);
    }
    &[data-active='false'] {
        color: #b1b6ba;
        background-color: rgba(222, 224, 225, 0.3);
    }
    &:hover {
        background-color: rgba(222, 224, 225, 0.6);
    }
    svg {
        width: 20px;
    }
`;

const AutoPlayButton: FC = () => {
    const dispatch = useAppDispatcher();
    const autoplay = useAppSelector((state) => state.slider.autoplay);

    return (
        <PlayButton data-active={autoplay} onClick={() => dispatch(toggleAutoplay())}>
            <Play />
        </PlayButton>
    );
};

export default AutoPlayButton;
