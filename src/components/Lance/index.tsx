import React, { HtmlHTMLAttributes } from "react";

import { Container } from "./styles";

interface ProcessoSearchedProps extends HtmlHTMLAttributes<HTMLDivElement> {
    valor: number;
    created_at: Date;
    leiloeiro: string;
    condicao: string;
    num_meses: number;
    data_inicio: Date;
    data_final: Date;
    valor_da_parcela: number;
}

function Lance({ valor, created_at, leiloeiro, condicao, num_meses, data_inicio, data_final, valor_da_parcela, ...props }: ProcessoSearchedProps) {
    return (
        <Container { ...props } >
            <div>valor: { valor }</div>
            <div>leiloeiro: { leiloeiro }</div>
            <div>condicao: { condicao }</div>
            <div>numero de meses: { num_meses }</div>
            <div>data inicio: { new Date(data_inicio).toLocaleDateString("pt-BR") }</div>
            <div>data final: { new Date(data_final).toLocaleDateString("pt-BR") }</div>
            <div>valor da parcela: { valor_da_parcela }</div>
            <div>criado em: { new Date(created_at).toLocaleDateString("pt-BR") }</div>
        </Container>
    );
}

export { Lance }