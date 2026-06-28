import useUsers from "../hooks/useUsers";

function Dashboard() {
  const { users, loading, error } = useUsers();

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <main className="dashboard">
      <div className="container">
        <h1>User Management Dashboard</h1>

        <p>Total Users: {users.length}</p>

        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
    </main>
  );
}

export default Dashboard;