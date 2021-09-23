import React, { useEffect } from "react";
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Redirect } from "react-router-dom";

import { useAuth } from "../hooks/Auth";

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
    isAdmin?: boolean;
    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, isAdmin = false, component: Component, path, ...rest }) => {
    const { user } = useAuth();

    return (
        <ReactDOMRoute 
            render={({ location }) => {

                try
                {
                    if (isAdmin && !user["admin"]) {
                        return (
                            <Redirect to={{ 
                                pathname: isPrivate ? "/" : "/home",
                                state: { from: location }
                            }}/>
                        )
                    }
                }
                catch(err) {
                    console.log(err);
                }

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