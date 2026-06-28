import { useEffect, useMemo, useState } from "react";

import { getUsers } from "../api/userService";
import { mapUser } from "../utils/mapper";
import { searchUsers } from "../utils/search";
import { sortUsers } from "../utils/sort";

function useUsers() {
  // Original API data
  const [users, setUsers] = useState([]);

  // UI State
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // sort state
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

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

  const filteredUsers = useMemo(() => {
    let result = searchUsers(users, searchQuery);

    result = sortUsers(result, sortBy, sortOrder);

    return result;
  }, [users, searchQuery, sortBy, sortOrder]);
  return {
    users,
    filteredUsers,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    setUsers,
    refreshUsers: fetchUsers,
  };
}

export default useUsers;
