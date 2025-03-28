import useUsers from "../hooks/useUsers";
import { UserRow } from "./UserRow";

const UsersPage = () => {
  const { users, nextPage, prevPage } = useUsers();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Lista de Usuarios
      </h1>

      <div className="overflow-x-auto w-full max-w-lg shadow-lg rounded-xl">
        <table className="w-full border-collapse bg-gray-900 text-white rounded-xl overflow-hidden">
          <thead className="bg-gray-700">
            <tr>
              <th className="p-3">Avatar</th>
              <th className="p-3">Nombre</th>
              <th className="p-3">Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between w-full max-w-lg mt-4">
        <button
          onClick={prevPage}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Anteriores
        </button>
        <button
          onClick={nextPage}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Siguientes
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
