import React from "react";

import { Container, Content } from "./styles";

import { CPFInput } from "../../components/CPFInput";

function Login() {
    return (
        <Container>
            <Content>
                <h1>Faca login</h1>

                <CPFInput placeholder="Digite seu CPF"/>
            </Content>
        </Container>
    )
}

export { Login }