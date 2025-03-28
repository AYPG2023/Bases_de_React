import { User } from "../interfaces/reqres.response";

interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  return (
    <tr className="border-b border-gray-700 hover:bg-gray-800 transition">
      <td className="p-3 flex justify-center">
        <img
          className="w-12 h-12 rounded-full"
          src={user.avatar}
          alt="user avatar"
        />
      </td>
      <td className="p-3 text-center">
        {user.first_name} {user.last_name}
      </td>
      <td className="p-3 text-center">{user.email}</td>
    </tr>
  );
};
