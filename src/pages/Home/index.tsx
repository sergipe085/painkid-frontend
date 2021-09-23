import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/Auth";

function Home() {
    const { signOut, name, user } = useAuth();

    function handleLogout() {
        signOut();
    }

    return (
        <Container>
            <h1>Ola, { name }.</h1>

            <Button onClick={handleLogout}>Logout</Button>

            { user["admin"] && <Link to="/cadastrar">cadastrar</Link> }
        </Container>
    )
}

export { Home }