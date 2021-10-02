import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Lance } from "../../components/Lance";
import api from "../../services/api";
import { ILance, IProcesso } from "../ConsultarProcesso";

import Loading from "react-loading";

import { Container, LanceAtual, Content } from "./styles";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Processo() {
    const query = useQuery();

    const [loading, setLoading] = useState(false);

    const [processo, setProcesso] = useState<IProcesso>({} as IProcesso);
    const [lances, setLances] = useState<ILance[]>([] as ILance[]);
    const [lance_atual, setLanceAtual] = useState<ILance>({} as ILance);

    const [valor_lance, setValorLance] = useState(0);
    const [leiloeiro, setLeiloeiro] = useState("");
    const [condicao, setCondicao] = useState("");
    const [num_meses, setNumMeses] = useState(0);
    const [data_inicio, setDataInicio] = useState("");
    const [data_final, setDataFinal] = useState("");
    const [valor_da_parcela, setValorDaParcela] = useState(0);

    async function handleAddLance() {
        try 
        {
            setLoading(true);

            await api.post("processos/lance", {
                numero_processo: processo.numero,
                valor: valor_lance,
                leiloeiro,
                data_inicio,
                condicao,
                num_meses,
                data_final,
                valor_da_parcela
            })
    
            await getProcesso();

            setLoading(false);
            toast.success("Lance adicionado com sucesso");
        }
        catch(err) {
            console.log(err.response.data);
            const responseData = err.response.data;

            toast.error(`Ocorreu um erro ao criar o lance. ${responseData.message}`)

            setLoading(false);
        }
    }

    async function getProcesso() {
        const response = await api.get("/processos/consultar", {
            params: {
                numero_processo: query.get("numero_processo")
            }
        })

        if (response.data.lance_atual_id) {
            try
            {
                const lance_response = await api.get("/processos/lance", {
                    params: {
                        lance_id: response.data.lance_atual_id
                    }
                })
    
                const lances_response = await api.get("/processos/lances", {
                    params: {
                        numero_processo: response.data.numero
                    }
                })
    
                const new_lances: ILance[] = lances_response.data;
                const lanceAtualIndex= new_lances.findIndex((value) => value.id === lance_response.data.id);
                new_lances.splice(lanceAtualIndex, 1);
    
    
                setLances(new_lances);
                setLanceAtual(lance_response.data);
            }
            catch(err) {
                console.log(err.response.data);
                const responseData = err.response.data;

                toast.error(`Ocorreu um erro ao criar o lance. ${responseData.message}`)
            }
        }

        setProcesso(response.data);
    }


    useEffect(() => {
        getProcesso();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            {
                processo ? (
                    <>
                        <Content>
                            <h1>Lances</h1>
                            {
                                lance_atual.valor ? (
                                    <>
                                        <LanceAtual>
                                            <h2>Lance atual:</h2>
                                            <Lance 
                                                valor={lance_atual?.valor} 
                                                created_at={lance_atual?.created_at} 
                                                leiloeiro={lance_atual?.leiloeiro}
                                                condicao={lance_atual?.condicao}
                                                data_final={lance_atual?.data_final}
                                                data_inicio={lance_atual?.data_inicio}
                                                num_meses={lance_atual?.num_meses}
                                                valor_da_parcela={lance_atual?.valor_da_parcela}
                                                ></Lance>
                                        </LanceAtual>
                                        { lances.map((lance) => 
                                            <Lance 
                                                key={lance.id} 
                                                valor={lance.valor} 
                                                created_at={lance.created_at}
                                                condicao={lance.condicao}
                                                leiloeiro={lance.leiloeiro}
                                                data_final={lance.data_final}
                                                data_inicio={lance.data_inicio}
                                                num_meses={lance.num_meses}
                                                valor_da_parcela={lance.valor_da_parcela}
                                            ></Lance>) }
                                    </>
                                ) : (
                                    <div>Esse processo nao tem lances ainda</div>
                                )
                            }
                        </Content>
                        <Content>
                            <h1>Adicionar Lance</h1>

                            <Input onChange={(event) => setValorLance(Number(event.target.value))} placeholder="valor do lance"/>
                            <Input onChange={(event) => setLeiloeiro(event.target.value)} placeholder="leiloeiro"/>
                            <Input onChange={(event) => setCondicao(event.target.value)} placeholder="condicao"/>
                            <Input onChange={(event) => setValorDaParcela(Number(event.target.value))} placeholder="valor da parcela"/>
                            <Input onChange={(event) => setNumMeses(Number(event.target.value))} placeholder="numero de meses"/>
                            <Input onChange={(event) => setDataInicio(event.target.value)} placeholder="data inicio"/>
                            <Input onChange={(event) => setDataFinal(event.target.value)} placeholder="data final"/>
                            {
                                loading ? 
                                <Loading width={"15%"} type="spin"></Loading>
                                :
                                <Button onClick={handleAddLance}>Adicionar Lance</Button>   
                            }
                        </Content>
                        <Content>
                            <h1>Processo</h1>
                            <div>numero: {processo.numero}</div>
                            <div>data de criacao: {formatDate(processo.created_at)}</div>
                            <div>lance atual: { lance_atual?.valor || "nenhum" }</div>
                            <div>reclamante: {processo.reclamante}</div>
                            <div>reclamado: {processo.reclamado}</div>
                            <div>valor: {processo.valor}</div>
                            <div>valor_inicial: {processo.valor_inicial}</div>
                            <div>valor_incremento: {processo.valor_incremento}</div>
                        </Content>
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