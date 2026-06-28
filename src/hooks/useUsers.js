import { useEffect, useMemo, useState } from "react";

import { getUsers } from "../api/userService";
import { mapUser } from "../utils/mapper";
import { searchUsers } from "../utils/search";
import { filterUsers } from "../utils/filter";
import { sortUsers } from "../utils/sort";
import { paginateUsers } from "../utils/pagination";
import { DEFAULT_PAGE_SIZE } from "../utils/constants";

function useUsers() {
  // Data
  const [users, setUsers] = useState([]);

  // Loading
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Search
  const [searchQuery, setSearchQuery] = useState("");

  // Filter
  const [department, setDepartment] = useState("All");

  // Sort
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  // Modal State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // Delete state
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

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

  // Search → Filter → Sort
  const filteredUsers = useMemo(() => {
    let result = searchUsers(users, searchQuery);

    result = filterUsers(result, department);

    result = sortUsers(result, sortBy, sortOrder);

    return result;
  }, [users, searchQuery, department, sortBy, sortOrder]);

  //clear
  function clearFilters() {
    setSearchQuery("");
    setDepartment("All");
    setSortBy("");
    setSortOrder("asc");

    setCurrentPage(1);
  }

  // Pagination
  const paginatedUsers = useMemo(() => {
    return paginateUsers(filteredUsers, currentPage, pageSize);
  }, [filteredUsers, currentPage, pageSize]);

  // Total Pages
  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / pageSize));

  function addUser(newUser) {
    const nextId =
      users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;

    setUsers((prev) => [
      {
        id: nextId,
        ...newUser,
      },
      ...prev,
    ]);
  }

  function updateUser(updatedUser) {
    setUsers((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
    );
  }

  function deleteUser(userId) {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
  }

  return {
    // Data
    users,
    filteredUsers,
    paginatedUsers,

    // UI
    loading,
    error,

    // Search
    searchQuery,
    setSearchQuery,

    // Filter
    department,
    setDepartment,

    // Sort
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,

    // Pagination
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    totalPages,

    // Modal
    isFormOpen,
    setIsFormOpen,
    editingUser,
    setEditingUser,

    // CRUD
    addUser,
    updateUser,
    deleteUser,

    // Delete
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,

    selectedUser,
    setSelectedUser,

    clearFilters,

    // Actions
    setUsers,
    refreshUsers: fetchUsers,
  };
}

export default useUsers;
