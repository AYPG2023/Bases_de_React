import { useEffect, useState } from "react";
import { User } from "../interfaces/reqres.response";
import { loadUsersAction } from "../actions/load-users.action";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsersAction(1).then(setUsers);
  }, []);

  return {
    users,
  };
};

export default useUsers;
