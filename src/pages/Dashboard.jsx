import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import UserTable from "../components/UserTable";
import useUsers from "../hooks/useUsers";

function Dashboard() {
  const { users, loading, error } = useUsers();

  return (
    <main className="dashboard">
      <div className="container">
        <h1>User Management Dashboard</h1>

        <p>Manage users with search, filtering, sorting and CRUD operations.</p>

        {loading && <Loader />}

        {!loading && error && <ErrorState message={error} />}

        {!loading && !error && <UserTable users={users} />}
      </div>
    </main>
  );
}

export default Dashboard;