import { useEffect, useState } from "react";
import { getUsers } from "../api/userService";
import { mapUser } from "../utils/mapper";

function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      setLoading(true);
      setError("");

      const data = await getUsers();
      setUsers(data.map(mapUser));
    } catch (err) {
      setError("Failed to load users.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    users,
    loading,
    error,
    setUsers,
    refreshUsers: fetchUsers,
  };
}

export default useUsers;