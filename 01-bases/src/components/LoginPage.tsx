import { useAuthContext } from "../context/AuthContext"

export const LoginPage = () => {
    const { isChecking, isAuthenticated } = useAuthContext();

    if (isChecking) {
        return (
            <h3>
                Loading...
            </h3>
        )
    }

    return (
        <>
            {
                isAuthenticated ? (
                    <>
                        <h3>Bienvenido</h3>

                        <button>Salir</button>
                    </>

                ) : (
                    <>
                        <h3>Ingresar a la aplicación</h3>

                        <button>Ingresar</button>
                    </>
                )
            }
            <h3>
                Login Page
            </h3>

            <span>{status}</span>
        </>
    )
}
