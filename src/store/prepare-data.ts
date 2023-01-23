import { Slide } from '../types/types';

interface ReturnedSlide extends Slide {
    id: number;
}

const prepareData = (slides: Slide[]): ReturnedSlide[] => {
    return slides.map((slide, idx) => {
        return {
            ...slide,
            id: idx,
        };
    });
};

export default prepareData;
