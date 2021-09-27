import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    flex-direction: row;
    padding: 0px 100px;
`;

export const Pesquisa = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 35px;

    input {
        flex: 10;
        width: 400px;
    }

    button {
        flex: 1;
    }
`;

export const LanceAtual = styled.div`
    margin-bottom: 40px;
`;