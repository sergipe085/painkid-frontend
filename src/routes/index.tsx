import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import { Login } from "../pages/Login";
import { Logup } from "../pages/Logup";
import { Home } from "../pages/Home";
import { Processo } from "../pages/Processo";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route isPrivate={true} isAdmin={true} path="/cadastrar" component={Logup}/>
            <Route isPrivate={true} path="/home" component={Home}/>
            <Route isPrivate={true} path="/processos" component={Processo}/>
        </Switch>
    )
}

export default Routes;