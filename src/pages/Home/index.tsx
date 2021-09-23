import React, { useState } from "react";

import { Container, Content, Form } from "./styles";

import { CPFInput } from "../../components/CPFInput";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/Auth";

function Home() {
    return (
        <h1>Home</h1>
    )
}

export { Home }