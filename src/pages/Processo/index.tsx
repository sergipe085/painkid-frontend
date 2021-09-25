import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import api from "../../services/api";

import { Container } from "./styles";

interface IProcesso {
    numero: string;
    reclamante: string;
    reclamado: string;
    tipo: "imovel" | "veiculo" | "diversos",
    valor: number;
    valor_inicial: number;
    valor_incremento: number;
}

function Processo() {
    const [numero, setNumero] = useState("");
    const [reclamante, setReclamante] = useState("");
    const [reclamado, setReclamado] = useState("");
    const [tipo, setTipo] = useState("imovel");
    const [valor, setValor] = useState(0);
    const [valor_inicial, setValorInicial] = useState(0);
    const [valor_incremento, setValorIncremento] = useState(0);

    async function handleSubmit() {
        try
        {
            const response = await api.post("/processos", {
                numero,
                reclamante,
                reclamado,
                tipo,
                valor,
                valor_inicial,
                valor_incremento
            })

            console.log(response.data);
            toast.success("Processo criado com sucesso!");
        }
        catch(err) {
            console.log(err.response.data);
            const responseData = err.response.data;

            toast.error(`Ocorreu um erro ao criar processo. ${responseData.message}`)
        }
    }

    return (
        <Container>
            <h1>Ola</h1>
            <Input onBlur={(event) => setNumero(event.target.value)} placeholder="Numero do processo"/>
            <Input onChange={(event) => setReclamante(event.target.value)} placeholder="Reclamante"/>
            <Input onChange={(event) => setReclamado(event.target.value)} placeholder="Reclamado"/>
            <Select onChange={(event) => setTipo(event.target.value)}>
                <option value="imovel">Imovel</option>
                <option value="veiculo">Veiculo</option>
                <option value="diversos">Diversos</option>
            </Select>
            <Input onChange={(event) => setValor(Number(event.target.value))} placeholder="Valor"/>
            <Input onChange={(event) => setValorInicial(Number(event.target.value))} placeholder="Valor inicial"/>
            <Input onChange={(event) => setValorIncremento(Number(event.target.value))} placeholder="Valor incremento"/>
            <Button onClick={handleSubmit}>Cadastrar</Button>
        </Container>
    )
}

export { Processo }