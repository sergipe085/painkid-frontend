import React, { useState } from "react";

import { Container, Content, Form } from "./styles";

import { CPFInput } from "../../components/CPFInput";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/Auth";

function Login() {
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    async function handleSubmit() {
        if (cpf === "" || password === "") {
            console.log("invalid");
            return;
        }

        await signIn({ cpf, password });
    }

    return (
        <Container>
            <Content>
                <h1>Faca login</h1>

                <Form>
                    <CPFInput onBlur={(event) => setCpf(event.target.value)} placeholder="Digite seu CPF"/>
                    <Input onBlur={(event) => setPassword(event.target.value)} placeholder="Digite sua senha" type="password"/>

                    <Button onClick={handleSubmit}>Login</Button>
                </Form>
            </Content>
        </Container>
    )
}

export { Login }