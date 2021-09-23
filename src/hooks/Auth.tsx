import React, { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

interface AuthState {
    token: string;
    user: object;
}

interface SignInCredentials {
    cpf: string;
    password: string;
}

interface AuthContextData {
    name: string;
    user: object;
    signIn({ cpf, password }: SignInCredentials): Promise<void>;
    signOut(): void;
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>((): AuthState => {
        const token = localStorage.getItem("@PainKid:token");
        const user = localStorage.getItem("@PainKid:user");

        if (token && user) {
            return {
                token,
                user: JSON.parse(user)
            }
        }

        return {} as AuthState;
    })

    const signIn = useCallback(async ({cpf, password }: SignInCredentials) => {
        const response = await api.post("/auth", {
            cpf, 
            password
        });

        const { token, user } = response.data;
        
        localStorage.setItem("@PainKid:token", token);
        localStorage.setItem("@PainKid:user", JSON.stringify(user));

        setData({ token, user });
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem("@PainKid:token");
        localStorage.removeItem("@PainKid:user");

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider value={ { name: "serjolas", user: data.user, signIn, signOut } }>
            { children }
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return authContext;
}