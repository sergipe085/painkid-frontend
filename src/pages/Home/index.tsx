import React, { useState } from "react";

import { Container, Content, Form } from "./styles";

import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/Auth";

function Home() {
    const { signOut, name } = useAuth();

    function handleLogout() {
        signOut();
    }

    return (
        <Container>
            <h1>Ola, { name }.</h1>

            <Button onClick={handleLogout}>Logout</Button>
        </Container>
    )
}

export { Home }