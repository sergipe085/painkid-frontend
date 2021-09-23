import React, { useEffect } from "react";
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Redirect } from "react-router-dom";

import { useAuth } from "../hooks/Auth";

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, path, ...rest }) => {
    const { user } = useAuth();

    useEffect(() => {
        console.log(user);
    }, [])

    return (
        <ReactDOMRoute 
            render={({ location }) => {
                return isPrivate === !!user ? (
                    <Component/>
                ) : (
                    <Redirect to={{ 
                        pathname: isPrivate ? "/" : "/home",
                        state: { from: location }
                    }}/>
                )
            }}

            {...rest} 
        />
    );
}

export default Route;