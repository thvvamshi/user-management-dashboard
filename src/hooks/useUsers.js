import { useEffect, useMemo, useState } from "react";

import { getUsers } from "../api/userService";
import { mapUser } from "../utils/mapper";
import { searchUsers } from "../utils/search";

function useUsers() {
  // Original API data
  const [users, setUsers] = useState([]);

  // UI State
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Search State
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch Users
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
      console.error(err);
      setError("Failed to load users.");
    } finally {
      setLoading(false);
    }
  }

  // Search
  const filteredUsers = useMemo(() => {
    return searchUsers(users, searchQuery);
  }, [users, searchQuery]);

  return {
    // Data
    users,
    filteredUsers,

    // UI State
    loading,
    error,

    // Search
    searchQuery,
    setSearchQuery,

    // Actions
    setUsers,
    refreshUsers: fetchUsers,
  };
}

export default useUsers;
