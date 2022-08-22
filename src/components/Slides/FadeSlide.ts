import styled from 'styled-components';
import withFadeTransition from '../../hoc/with-fade-transition';

const FadeSlide = styled.div`
    padding-right: 40px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.5s ease;

    &[data-active='true'] {
        opacity: 1;
        z-index: 1;
    }
`;

export default withFadeTransition(FadeSlide);
