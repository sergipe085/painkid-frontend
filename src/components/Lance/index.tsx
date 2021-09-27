import React, { HtmlHTMLAttributes } from "react";

import { Container } from "./styles";

interface ProcessoSearchedProps extends HtmlHTMLAttributes<HTMLDivElement> {
    valor: number;
    created_at: Date;
}

function Lance({ valor, created_at, ...props }: ProcessoSearchedProps) {
    return (
        <Container { ...props } >
            <div>valor: { valor }</div>
            <div>criado em: { new Date(created_at).toLocaleDateString("pt-BR") }</div>
        </Container>
    );
}

export { Lance }