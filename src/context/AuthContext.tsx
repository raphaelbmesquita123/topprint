import { createContext } from "react";

type AuthContextProvider = {
    user: {
        email: string
    } 
}
export const AuthContext = createContext<AuthContextProvider>(null);