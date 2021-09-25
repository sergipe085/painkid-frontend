import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    gap: 8px;

    input, div {
        width: 300px;
    }
`;

export const Content = styled.main`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;

    margin-top: 12vh;
`;

export const Form = styled.div`
    flex-direction: column;
    margin-top: 20px;

    input {
        margin-top: 8px;
    }

    button {
        margin-top: 18px;
    }
`;