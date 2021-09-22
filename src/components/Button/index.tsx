import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement> {
    
}

function Button({ ...props }: ButtonProps) {
    return <Container></Container>
}

export { Button }