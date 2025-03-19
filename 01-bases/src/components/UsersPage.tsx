import useUsers from "../hooks/useUsers";
import { UserRow } from "./UserRow";
// https://reqres.in/api/users?page=2
const UsersPage = () => {
  const { users } = useUsers();

  console.log(users);
  return (
    <>
      <h1>Usuario:</h1>

      <table className="w-[500px] bg-black rounded-xl text-white">
        <thead>
          <tr>
            <th className="">Avatar</th>
            <th className="">Nombre</th>
            <th className="">Email</th>
          </tr>
        </thead>

        <tbody>
          <UserRow />
        </tbody>
      </table>

      <div className="flex justify-between w-[500px] mt-2 ">
        <button className="p-2 bg-blue-500 text-white rounded-[15px]">
          Anteriores
        </button>
        <button className="p-2 bg-blue-500 text-white rounded-[15px]">
          Siguientes
        </button>
      </div>
    </>
  );
};

export default UsersPage;
