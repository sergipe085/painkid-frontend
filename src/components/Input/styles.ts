import styled from "styled-components";

export const Container = styled.input`
    height: 50px;
    width: 200px;
    border: none;
    color: #ffff;
    border-radius: 8px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #252836;

    &::placeholder {
        color: #A8A8B3;
    }

    transition: transform 200ms;

    &:focus {
        transform: scale(1.03, 1.03);
    }
`;