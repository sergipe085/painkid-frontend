import React from "react";

import { Container, Content, Form } from "./styles";

import { CPFInput } from "../../components/CPFInput";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

function Login() {
    return (
        <Container>
            <Content>
                <h1>Faca login</h1>

                <Form>
                    <CPFInput placeholder="Digite seu CPF"/>
                    <Input placeholder="Digite sua senha" type="password"/>
                    <Button></Button>
                </Form>
            </Content>
        </Container>
    )
}

export { Login }