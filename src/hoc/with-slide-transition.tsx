import React, { ReactElement, ComponentType, ReactNode, ForwardedRef } from 'react';
import { useAppSelector } from '../hooks/redux';
import usePrevious from '../hooks/use-previous';
import Directions from '../enums/directions';
import { SLIDEIN_FW, SLIDEOUT_FW, SLIDEIN_BW, SLIDEOUT_BW } from '../constants/animation-name';

type Props = {
    [key: string]: unknown;
    id: number;
    children?: ReactNode;
};

type ComponentProps = {
    children?: ReactNode;
    className?: string;
};

function withSlideTransition<T extends HTMLElement>(
    Component: ComponentType<ComponentProps & { ref?: ForwardedRef<T> }>
) {
    // eslint-disable-next-line react/display-name
    return (props: Props & { forwardedRef?: ForwardedRef<T> }): ReactElement => {
        const { id, direction } = useAppSelector((state) => state.slider.activeSlide);
        const prevId = usePrevious<number>(id);

        let className = '';

        if (direction !== null) {
            if (props.id === id) {
                className = direction === Directions.Forward ? SLIDEIN_FW : SLIDEIN_BW;
            } else if (props.id === prevId) {
                className = direction === Directions.Forward ? SLIDEOUT_FW : SLIDEOUT_BW;
            }
        }

        return (
            <Component data-active={props.id === id} ref={props.forwardedRef} className={className} {...props}>
                {props.children}
            </Component>
        );
    };
}

export default withSlideTransition;
