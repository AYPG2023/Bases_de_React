import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

enum AuthStatus {
    'checking',
    'authenticated',
    'notAuthenticated'
}

interface AuthState {
    status: AuthStatus;
    token?: string;

    user?: User
    isChecking: boolean;
    isAuthenticated: boolean;
}

interface User {
    name: string;
    email: string;

}
export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [status, setstatus] = useState(AuthStatus.checking);

    useEffect(() => {

        setTimeout(() => {
            setstatus(AuthStatus.notAuthenticated)
        }, 1500)

    }, [])


    return (

        <AuthContext.Provider value={{
            status: status, // 'authenticated' | 'not-authenticated'

            isChecking: status === AuthStatus.checking,
            isAuthenticated: status === AuthStatus.authenticated,
        }}>
            {children}
        </AuthContext.Provider >
    )
}

