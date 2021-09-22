import React, { InputHTMLAttributes, useState } from "react";

import { Input } from "./../Input";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    
}

function CPFInput({ ...props }: InputProps) {
    const [cpf, setCpf] = useState("");

    function cpfMask(value: string) {
        return value
          .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
          .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})/, '$1-$2')
          .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    }

    function formatarCPF(event: React.ChangeEvent<HTMLInputElement>) {
        setCpf(cpfMask(event.target.value));
    }

    return <Input 
        value={cpf}
        onChange={(event) => formatarCPF(event)}
        {...props}
    />
}

export { CPFInput }