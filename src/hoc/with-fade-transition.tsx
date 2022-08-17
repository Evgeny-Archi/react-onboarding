import React, { ReactElement, ComponentType, ReactNode, ForwardedRef } from 'react';
import { useAppSelector } from '../hooks/redux';

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

const withFadeTransition = (Component: ComponentType<WithChildren>) => {
    // eslint-disable-next-line react/display-name
    return (props: Props): ReactElement => {
        const { id } = useAppSelector((state) => state.slider.activeSlide);

        return (
            <Component data-active={props.id === id} ref={props.forwardedRef}>
                {props.children}
            </Component>
        );
    };
};

export default withFadeTransition;
