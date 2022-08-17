import React, { ReactElement, ComponentType, ReactNode, ForwardedRef } from 'react';
import { useAppSelector } from '../hooks/redux';
import usePrevious from '../hooks/use-previous';

type Props = {
    id?: number;
    children?: ReactNode;
    forwardedRef?: ForwardedRef<HTMLDivElement>;
};

type WithChildren = {
    children?: ReactNode;
    ref?: ForwardedRef<HTMLDivElement>;
    className?: string;
};

const withSlideTransition = (Component: ComponentType<WithChildren>) => {
    // eslint-disable-next-line react/display-name
    return (props: Props): ReactElement => {
        const { id, direction } = useAppSelector((state) => state.slider.activeSlide);
        const prevId = usePrevious<number>(id);

        let className = '';

        if (direction !== null) {
            if (props.id === id) {
                className = direction === 'forward' ? 'fadein-forward' : 'fadein-backward';
            } else if (props.id === prevId) {
                className = direction === 'forward' ? 'fadeout-forward' : 'fadeout-backward';
            }
        }

        return (
            <Component data-active={props.id === id} ref={props.forwardedRef} className={className}>
                {props.children}
            </Component>
        );
    };
};

export default withSlideTransition;
