import React, { ReactElement, ComponentType, ReactNode, ForwardedRef } from 'react';
import { useAppSelector } from '../hooks/redux';
import usePrevious from '../hooks/use-previous';
import { FADEIN, FADEOUT } from '../constants/animation-name';

type Props = {
    id?: number;
    children?: ReactNode;
    forwardedRef?: ForwardedRef<HTMLDivElement>;
};

type ComponentProps = {
    children?: ReactNode;
    ref?: ForwardedRef<HTMLDivElement>;
    className?: string;
};

const withFadeTransition = (Component: ComponentType<ComponentProps>) => {
    // eslint-disable-next-line react/display-name
    return (props: Props): ReactElement => {
        const { id, direction } = useAppSelector((state) => state.slider.activeSlide);
        const prevId = usePrevious<number>(id);

        let className = '';

        if (direction !== null) {
            if (props.id === id) {
                className = FADEIN;
            } else if (props.id === prevId) {
                className = FADEOUT;
            }
        }

        return (
            <Component data-active={props.id === id} ref={props.forwardedRef} className={className}>
                {props.children}
            </Component>
        );
    };
};

export default withFadeTransition;
