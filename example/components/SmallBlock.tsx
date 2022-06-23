import styled from 'styled-components';

const SmallBlock = styled.div`
    width: 120px;
    background: hsla(0, 0%, 100%, 0.2);
    border-radius: 6px;
`;

export const RedBlock = styled(SmallBlock)`
    background: hsla(0, 86%, 50%, 0.8);
`;

export default SmallBlock;
