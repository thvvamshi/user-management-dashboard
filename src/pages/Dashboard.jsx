import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import UserTable from "../components/UserTable";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import UserForm from "../components/UserForm";
import DeleteDialog from "../components/DeleteDialog";

import useUsers from "../hooks/useUsers";

function Dashboard() {
  const {
    users,
    filteredUsers,
    paginatedUsers,

    loading,
    error,

    addUser,
    updateUser,
    deleteUser,

    isDeleteDialogOpen,
    setIsDeleteDialogOpen,

    selectedUser,
    setSelectedUser,

    searchQuery,
    setSearchQuery,

    department,
    setDepartment,

    sortBy,
    setSortBy,

    sortOrder,
    setSortOrder,

    currentPage,
    setCurrentPage,

    pageSize,
    setPageSize,

    totalPages,

    isFormOpen,
    setIsFormOpen,

    editingUser,
    setEditingUser,
  } = useUsers();

  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <Header
          totalUsers={users.length}
          filteredUsers={filteredUsers.length}
          onAddUser={() => {
            setEditingUser(null);
            setIsFormOpen(true);
          }}
        />

        <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            department={department}
            setDepartment={setDepartment}
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />

          {loading && <Loader />}

          {!loading && error && <ErrorState message={error} />}

          {!loading && !error && (
            <>
              <UserTable
                users={paginatedUsers}
                onEdit={(user) => {
                  setEditingUser(user);
                  setIsFormOpen(true);
                }}
                onDelete={(user) => {
                  setSelectedUser(user);
                  setIsDeleteDialogOpen(true);
                }}
              />

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                pageSize={pageSize}
                setPageSize={setPageSize}
              />
              <UserForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                editingUser={editingUser}
                addUser={addUser}
                updateUser={updateUser}
              />
              <DeleteDialog
                isOpen={isDeleteDialogOpen}
                user={selectedUser}
                onClose={() => {
                  setIsDeleteDialogOpen(false);
                  setSelectedUser(null);
                }}
                onConfirm={() => {
                  deleteUser(selectedUser.id);

                  setIsDeleteDialogOpen(false);
                  setSelectedUser(null);
                }}
              />
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
