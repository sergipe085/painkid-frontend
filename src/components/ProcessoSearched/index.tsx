import React, { HtmlHTMLAttributes } from "react";
import { Button } from "../Button";
import { useHistory } from "react-router";

import { Container } from "./styles";

interface ProcessoSearchedProps extends HtmlHTMLAttributes<HTMLDivElement> {
    numero: string;
}

function ProcessoSearched({ numero, ...props }: ProcessoSearchedProps) {
    const { push } = useHistory();

    return (
        <Container onClick={() => push(`/processo?numero_processo=${numero}`)} { ...props } >
            <div>{ numero }</div>
        </Container>
    );
}

export { ProcessoSearched }