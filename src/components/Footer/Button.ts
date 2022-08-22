import styled from 'styled-components';

const Button = styled.button`
    z-index: 2;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    box-sizing: border-box;
    background: transparent;
    border-radius: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: rgba(222, 224, 225, 0.3);
    color: #6f7070;

    &:hover {
        background-color: rgba(222, 224, 225, 0.6);
    }

    svg {
        width: 16px;
        height: auto;
    }
`;

export default Button;
