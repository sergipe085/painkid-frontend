import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
`;

export const Pesquisa = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 50px;

    input {
        flex: 10;
        width: 400px;
    }

    button {
        flex: 1;
    }
`;