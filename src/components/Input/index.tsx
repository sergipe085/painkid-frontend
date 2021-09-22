import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    
}

function Input({ ...props }: InputProps) {
    return <Container { ...props }/>
}

export { Input }