import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import { Login } from "../pages/Login";
import { Logup } from "../pages/Logup";
import { Home } from "../pages/Home";
import { CadastrarProcesso } from "../pages/CadastrarProcesso";
import { ConsultarProcesso } from "../pages/ConsultarProcesso";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route isPrivate={true} isAdmin={true} path="/cadastrar" component={Logup}/>
            <Route isPrivate={true} path="/home" component={Home}/>
            <Route isPrivate={true} isAdmin={true} path="/cadastrarProcesso" component={CadastrarProcesso}/>
            <Route isPrivate={true} path="/consultarProcesso" component={ConsultarProcesso}/>
        </Switch>
    )
}

export default Routes;