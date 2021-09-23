import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Container, Content, Form } from "./styles";

import { CPFInput } from "../../components/CPFInput";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/Auth";
import api from "../../services/api";

function Logup() {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    const { token } = useAuth();

    async function handleSubmit() {
        try
        {
            await api.post("/user", {
                name,
                cpf, 
                password
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        catch(err) {
            toast.error("Ocorreu um erro ao cadastrar um novo usuario, verifique as credenciais.");
        }
    }

    return (
        <Container>
            <Content>
                <h1>Cadastre um novo usuario</h1>

                <Form>
                    <Input onBlur={(event) => setName(event.target.value)} placeholder="Digite o nome"/>
                    <CPFInput onBlur={(event) => setCpf(event.target.value)} placeholder="Digite o CPF"/>
                    <Input onBlur={(event) => setPassword(event.target.value)} placeholder="Digite a senha"/>

                    <Button onClick={handleSubmit}>Cadastrar</Button>
                </Form>
            </Content>
        </Container>
    )
}

export { Logup }