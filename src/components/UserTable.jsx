import UserRow from "./UserRow";

function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full">
        <thead className="sticky top-0 bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
              ID
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
              Name
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
              Email
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
              Department
            </th>

            <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
