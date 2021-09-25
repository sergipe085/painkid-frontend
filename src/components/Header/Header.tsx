import { HTMLAttributes } from "react"
import { Link } from "react-router-dom"
import { Container } from "./styles"

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

function Header({ children, ...props }: HeaderProps) {
    return (
        <Container { ...props }>
            { children }
            <Link to="/home">Inicio</Link>
            <Link to="/processos">Cadastrar processo</Link>
        </Container>
    )
}

export { Header }