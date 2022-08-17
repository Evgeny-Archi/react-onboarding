import { ReactNode } from 'react';

export interface Slide {
    title: string;
    content: ReactNode;
    imageUrl: string;
    navIcon?: ReactNode;
}

export interface SliderProps {
    title: string;
    autoplay?: boolean;
    slides: Slide[];
    className?: string;
}
