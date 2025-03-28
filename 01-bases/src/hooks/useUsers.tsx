import { useEffect, useRef, useState } from "react";
import { User } from "../interfaces/reqres.response";
import { loadUsersAction } from "../actions/load-users.action";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    loadUsersAction(currentPageRef.current).then(setUsers);
  }, []);

  const nextPage = async () => {
    const nextPageNumber = currentPageRef.current + 1;
    const newUsers = await loadUsersAction(nextPageNumber);

    if (newUsers.length > 0) {
      setUsers(newUsers);
      currentPageRef.current = nextPageNumber;
    }
  };

  const prevPage = async () => {
    if (currentPageRef.current > 1) {
      const prevPageNumber = currentPageRef.current - 1;
      const newUsers = await loadUsersAction(prevPageNumber);
      setUsers(newUsers);
      currentPageRef.current = prevPageNumber;
    }
  };

  return {
    users,
    nextPage,
    prevPage,
    currentPage: currentPageRef.current, // Devuelve la página actual si la necesitas en el UI
  };
};

export default useUsers;
