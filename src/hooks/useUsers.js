import { useEffect, useMemo, useState } from "react";

import { getUsers } from "../api/userService";
import { mapUser } from "../utils/mapper";
import { searchUsers } from "../utils/search";
import { sortUsers } from "../utils/sort";
import { filterUsers } from "../utils/filter";

function useUsers() {
  // Original API data
  const [users, setUsers] = useState([]);

  // UI State
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //    Filter state
  const [department, setDepartment] = useState("All");

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

    result = filterUsers(result, department);

    result = sortUsers(result, sortBy, sortOrder);

    return result;
  }, [users, searchQuery, department, sortBy, sortOrder]);

  return {
    users,
    filteredUsers,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    department,
    setDepartment,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    setUsers,
    refreshUsers: fetchUsers,
  };
}

export default useUsers;
