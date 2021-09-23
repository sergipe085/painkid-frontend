import React, { useState } from "react";
import api from "../../services/api";

import { Container, Content, Form } from "./styles";

import { CPFInput } from "../../components/CPFInput";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

interface ILoginResponse {
    data: {
        token: string;
        user: {
            name: string;
            admin: boolean;
            cpf: string;
            id: string;
        }
    }
}

function Login() {
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit() {
        if (cpf === "" || password === "") {
            console.log("invalid");
            return;
        }

        const { data } = await api.post<ILoginResponse>("/auth", {
            cpf, 
            password
        })  

        console.log(data);
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