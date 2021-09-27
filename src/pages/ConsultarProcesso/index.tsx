import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import api from "../../services/api";

import { Container, Content } from "./styles";

export interface IProcesso {
    lance_atual_id: string;
    numero: string;
    reclamante: string;
    reclamado: string;
    tipo: "imovel" | "veiculo" | "diversos",
    valor: number;
    valor_inicial: number;
    valor_incremento: number;
    created_at: Date;
}

export interface ILance {
    id: string;
    valor: number
    created_at: Date;
}

function ConsultarProcesso() {
    const [processo, setProcesso] = useState<IProcesso>({} as IProcesso);
    const [maiorLance, setMaiorLance] = useState<ILance>({} as ILance);

    const [numero_processo, setNumeroProcesso] = useState("");

    const [valor_lance, setValorLance] = useState(0);

    async function handleConsultarProcesso() {
        try
        {
            const response = await api.get("/processos/consultar", {
                params: {
                    numero_processo
                }
            })

            setProcesso(response.data);

            await getMaiorLance(response.data.lance_atual_id);

            toast.success("Processo consultado com sucesso!");
        }
        catch(err) {
            console.log(err.response.data);
            const responseData = err.response.data;

            toast.error(`Ocorreu um erro ao consultar processo. ${responseData.message}`)
        }
    }

    async function handleCriarLance() {
        try
        {
            const response = await api.post("/processos/lance", {
                numero_processo,
                valor: valor_lance
            })

            console.log(response.data);

            toast.success("Lance criado com sucesso!");
        }
        catch(err) {
            console.log(err.response.data);
            const responseData = err.response.data;

            toast.error(`Ocorreu um erro ao criar o lance. ${responseData.message}`)
        }
    }

    async function getMaiorLance(lance_id: string) {
        if (!lance_id) {
            return;
        }

        try
        {
            const response = await api.get("/processos/lance", {
                params: {
                    lance_id
                }
            })

            console.log(response.data);

            setMaiorLance(response.data);
        }
        catch(err) {
            console.log(err.response.data);
            const responseData = err.response.data;

            toast.error(`Ocorreu um erro ao consultar o lance. ${responseData.message}`)
        }
    }

    return (
        <Container>
            <Content>
                <h1>Consultar processo</h1>
                <Input onChange={(event) => setNumeroProcesso(event.target.value)} placeholder="Numero do processo"/>
                <Input disabled value={processo.reclamante} placeholder="Reclamante"/>
                <Input disabled value={processo.reclamado} placeholder="Reclamado"/>
                <Input disabled value={processo.tipo} placeholder="Reclamado"/>
                <Input disabled value={processo.valor} placeholder="Valor"/>
                <Input disabled value={processo.valor_inicial} placeholder="Valor inicial"/>
                <Input disabled value={processo.valor_incremento} placeholder="Valor incremento"/>
                <Button onClick={handleConsultarProcesso}>Consultar</Button>
            </Content>

            {
                processo.numero && 
                <Content>
                    <h1>Adicionar lance</h1>
                    {
                        maiorLance && 
                        <Input disabled value={maiorLance.valor} placeholder="Lance atual"/>
                    }
                    <Input onChange={(event) => setValorLance(Number(event.target.value))} placeholder="Valor do lance"/>
                    <Button onClick={handleCriarLance}>Adicionar</Button>
                </Content>
            }
        </Container>
    )
}

export { ConsultarProcesso }