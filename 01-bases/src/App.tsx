//import BasicTypes from './typescript/BasicTypes'
//import ObjectLiterals from "./typescript/ObjectLiterals";
// import BasicFunctions from "./typescript/BasicFunctions";

//import { LoginPage } from "./components/LoginPage";
import UsersPage from "./components/UsersPage";
import { AuthProvider } from "./context/AuthContext";

//import { Counter } from "./components/Counter";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-4xl mb-5">React + TS </h1>
          {/*<BasicTypes/> */}
          {/* <ObjectLiterals /> */}
          {/* <BasicFunctions /> */}
          {/*  <Counter />  */}
          {/* <LoginPage />   */}
          <UsersPage />
        </div>
      </AuthProvider>
    </>
  );
}
export default App;
