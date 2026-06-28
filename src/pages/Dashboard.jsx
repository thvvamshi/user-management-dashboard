import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import UserTable from "../components/UserTable";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";

import useUsers from "../hooks/useUsers";

function Dashboard() {
  const {
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
  } = useUsers();
  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <Header
          totalUsers={users.length}
          filteredUsers={filteredUsers.length}
        />

        <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
          {loading && <Loader />}

          {!loading && error && <ErrorState message={error} />}

          {!loading && !error && <UserTable users={filteredUsers} />}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
