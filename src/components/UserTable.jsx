import EmptyState from "./EmptyState";
import UserRow from "./UserRow";

function UserTable({ users }) {
  if (users.length === 0) {
    return <EmptyState />;
  }

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Department</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;