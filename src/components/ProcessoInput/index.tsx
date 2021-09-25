import React, { InputHTMLAttributes, useState } from "react";

import { Input } from "../Input";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    
}

function ProcessoInput({ ...props }: InputProps) {
    const [processo, setProcesso] = useState("");

    function processoMask(value: string) {
        return value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1 $2 $3/$4-$5");
    }

    function formatarCPF(event: React.ChangeEvent<HTMLInputElement>) {
        setProcesso(processoMask(event.target.value));
    }

    return <Input 
        value={processo}
        onChange={(event) => formatarCPF(event)}
        {...props}
    />
}

export { ProcessoInput }