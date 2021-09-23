import React, { ButtonHTMLAttributes, ReactNode } from "react";

import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
    return <Container { ...props } >{ children }</Container>
}

export { Button }