import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import { Login } from "../pages/Login";
import { Logup } from "../pages/Logup";
import { Home } from "../pages/Home";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route isPrivate={true} isAdmin={true} path="/cadastrar" component={Logup}/>
            <Route isPrivate={true} path="/home" component={Home}/>
        </Switch>
    )
}

export default Routes;