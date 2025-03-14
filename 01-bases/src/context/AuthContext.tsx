import { createContext, PropsWithChildren } from "react";


export const AuthContext = createContext({});

export const useAuthContext = () => (AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {


    return (

        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

