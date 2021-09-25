import React, { SelectHTMLAttributes } from "react";

import { Container } from "./styles"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    
}

function Select({ children, ...props }: SelectProps) {
    return (
        <Container>
            <select {...props}>
                { children }
            </select>
        </Container>
    )
}

export { Select }