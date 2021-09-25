import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
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

function ConsultarProcesso() {
    const [processo, setProcesso] = useState<IProcesso>({} as IProcesso);

    const [numero_processo, setNumeroProcesso] = useState("");
    const [reclamante, setReclamante] = useState("");
    const [reclamado, setReclamado] = useState("");
    const [tipo, setTipo] = useState("imovel");
    const [valor, setValor] = useState(0);
    const [valor_inicial, setValorInicial] = useState(0);
    const [valor_incremento, setValorIncremento] = useState(0);

    async function handleSubmit() {
        try
        {
            const response = await api.get("/processos/consultar", {
                params: {
                    numero_processo
                }
            })

            console.log(response.data);

            setProcesso(response.data);

            toast.success("Processo consultado com sucesso!");
        }
        catch(err) {
            console.log(err.response.data);
            const responseData = err.response.data;

            toast.error(`Ocorreu um erro ao consultar processo. ${responseData.message}`)
        }
    }

    return (
        <Container>
            <h1>Consultar processo</h1>
            <Input onChange={(event) => setNumeroProcesso(event.target.value)} placeholder="Numero do processo"/>
            <Input disabled value={processo.reclamante} placeholder="Reclamante"/>
            <Input disabled value={processo.reclamado} placeholder="Reclamado"/>
            <Input disabled value={processo.tipo} placeholder="Reclamado"/>
            <Input disabled value={processo.valor} placeholder="Valor"/>
            <Input disabled value={processo.valor_inicial} placeholder="Valor inicial"/>
            <Input disabled value={processo.valor_incremento} placeholder="Valor incremento"/>
            <Button onClick={handleSubmit}>Consultar</Button>
        </Container>
    )
}

export { ConsultarProcesso }