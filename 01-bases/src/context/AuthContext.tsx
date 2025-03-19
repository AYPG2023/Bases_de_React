import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

enum AuthStatus {
  "checking",
  "authenticated",
  "notAuthenticated",
}

interface AuthState {
  status: AuthStatus;
  token?: string;

  user?: User;
  isChecking: boolean;
  isAuthenticated: boolean;

  // Como definir los metodos
  loginWithEmailPassword: (email: string, password: string) => void;
  logout: () => void;
}

interface User {
  name: string;
  email: string;
}
export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setstatus] = useState(AuthStatus.checking);

  const [user, setUser] = useState<User>();

  useEffect(() => {
    setTimeout(() => {
      setstatus(AuthStatus.notAuthenticated);
    }, 1500);
  }, []);

  const loginWithEmailPassword = (email: string, password: string) => {
    setUser({
      name: "Anderson Perdomo",
      email: email,
    });
    setstatus(AuthStatus.authenticated);
  };

  const logout = () => {
    setUser(undefined);
    setstatus(AuthStatus.notAuthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        status: status, // 'authenticated' | 'not-authenticated'
        user: user,

        isChecking: status === AuthStatus.checking,
        isAuthenticated: status === AuthStatus.authenticated,

        // Esto es un metodo
        loginWithEmailPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
