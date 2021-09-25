import { HTMLAttributes } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/Auth"
import { Container } from "./styles"

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

function Header({ children, ...props }: HeaderProps) {
    const { user } = useAuth();

    return (
        <Container { ...props }>
            { children }
            <Link to="/home">Inicio</Link>
            <Link to="/consultarProcesso">Consultar processo</Link>
            {
                user != null && user["admin"] && (
                    <>
                        <Link to="/cadastrarProcesso">Cadastrar processo</Link>
                    </>
                )
            }
        </Container>
    )
}

export { Header }