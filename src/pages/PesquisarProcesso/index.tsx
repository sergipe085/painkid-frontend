import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ProcessoSearched } from "../../components/ProcessoSearched";
import api from "../../services/api";
import { IProcesso } from "../ConsultarProcesso";

import { Container, Pesquisa } from "./styles";

function PesquisarProcesso() {
    const [input, setInput] = useState("");
    const [processos, setProcessos] = useState<IProcesso[]>([] as IProcesso[]);

    async function HandlePesquisa() {
        try
        {
            const response = await api.get("/processos/search", {
                params: {
                    input
                }
            });

            setProcessos(response.data);
        }
        catch(err) {
            console.log(err.response.data);
            const responseData = err.response.data;

            toast.error(`Ocorreu um erro ao consultar processo. ${responseData.message}`)
        }
    }

    return (
        <Container>
            <h1>Pesquisar processo</h1>
            <Pesquisa>
                <Input onChange={(event) => setInput(event.target.value)} placeholder="Numero do processo"></Input>
                <Button onClick={HandlePesquisa}>Pesquisar</Button>
            </Pesquisa>
            <div>
                {
                    processos.map((processo) => {
                        return (
                            <ProcessoSearched key={processo.numero} numero={processo.numero}/>
                        )
                    })
                }
            </div>
        </Container>
    )
}

export { PesquisarProcesso }