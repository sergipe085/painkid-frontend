import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    /* align-items: center; */
    height: 100vh;
    flex-direction: row;

`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    
    margin-top: 12vh;
    
    input, div {
        width: 300px;
    }

    button {
        margin-top: 12px;
    }
`;