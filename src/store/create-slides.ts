import { Slide } from '../types/types';

interface ReturnedSlide extends Slide {
    id: number;
}

const addSlideIdentifier = (slide: Slide, id: number): ReturnedSlide => {
    return {
        ...slide,
        id,
    };
};

const createNormalizedSlides = (slides: Slide[]): ReturnedSlide[] => {
    return slides.map((slide, idx) => addSlideIdentifier(slide, idx));
};

export default createNormalizedSlides;
