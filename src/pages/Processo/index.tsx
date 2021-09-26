import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Button } from "../../components/Button";
import api from "../../services/api";
import { IProcesso } from "../ConsultarProcesso";

import { Container } from "./styles";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Processo() {
    const query = useQuery();

    const [processo, setProcesso] = useState<IProcesso>({} as IProcesso);

    useEffect(() => {
        async function getProcesso() {
            const response = await api.get("/processos/consultar", {
                params: {
                    numero_processo: query.get("numero_processo")
                }
            })

            setProcesso(response.data);
        }

        getProcesso();
    }, []);

    return (
        <Container>
            {
                processo ? (
                    <>
                        <div>numero: {processo.numero}</div>
                        <div>data de criacao: {formatDate(processo.created_at)}</div>
                        <div>lance atual: { processo.lance_atual_id || "nenhum" }</div>
                        <div>reclamante: {processo.reclamante}</div>
                        <div>reclamado: {processo.reclamado}</div>

                        <Button>
                            Ver lances
                        </Button>
                    </>
                ) : (
                    <h1>Processo nao encontrado</h1>
                )
            }
        </Container>
    )
}

function formatDate(a): string {
    const date = new Date(a);
    return date.toLocaleDateString("pt-BR");
}

export { Processo }