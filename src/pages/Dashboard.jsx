import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import UserTable from "../components/UserTable";
import MobileUserList from "../components/MobileUserList";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";
import UserForm from "../components/UserForm";
import DeleteDialog from "../components/DeleteDialog";

import toast from "react-hot-toast";

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

    clearFilters,

    isFormOpen,
    setIsFormOpen,

    editingUser,
    setEditingUser,

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
  } = useUsers();

  function handleEdit(user) {
    setEditingUser(user);
    setIsFormOpen(true);
  }

  function handleDelete(user) {
    setSelectedUser(user);
    setIsDeleteDialogOpen(true);
  }

  function handleDeleteConfirm() {
    deleteUser(selectedUser.id);

    toast.success("User deleted successfully");

    setIsDeleteDialogOpen(false);
    setSelectedUser(null);
  }

  return (
    <main className="min-h-screen bg-slate-100 py-4">
      <div className="mx-auto max-w-[1450px] px-5">
        <Header
          totalUsers={users.length}
          filteredUsers={filteredUsers.length}
          onAddUser={() => {
            setEditingUser(null);
            setIsFormOpen(true);
          }}
        />

        <section className="mt-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
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
          </div>
          {loading && <Loader />}

          {!loading && error && <ErrorState message={error} />}

          {!loading && !error && (
            <>
              {filteredUsers.length === 0 ? (
                <EmptyState onClearFilters={clearFilters} />
              ) : (
                <>
                  {/* Mobile */}

                  <MobileUserList
                    users={paginatedUsers}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />

                  {/* Desktop */}

                  <UserTable
                    users={paginatedUsers}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />

                  <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      setCurrentPage={setCurrentPage}
                      pageSize={pageSize}
                      setPageSize={setPageSize}
                    />
                  </div>
                </>
              )}

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
                onConfirm={handleDeleteConfirm}
              />
            </>
          )}
        </section>
      </div>
    </main>
  );
}

export default Dashboard;
