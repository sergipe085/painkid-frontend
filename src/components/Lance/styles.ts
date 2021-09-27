import styled from "styled-components";

export const Container = styled.div`
    height: 150px;
    width: 300px;
    border-radius: 8px;
    background-color: #525298;
    font-weight: 500;
    color: #fff;
    padding: 20px;
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    cursor: pointer;
    border: 0;
    transition: filter 200ms, transform 200ms;
    margin-top: 10px;
    flex-direction: column;

    &:hover {
        filter: brightness(0.8);
        transform: scale(0.97, 0.97);
    }
`;