import UserRow from "./UserRow";

function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:block">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr>
              <th className="w-20 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                ID
              </th>

              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                User
              </th>

              <th className="w-72 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Email
              </th>

              <th className="w-44 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Department
              </th>

              <th className="w-36 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <UserRow
                  key={user.id}
                  user={user}
                  index={index}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-16 text-center text-slate-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;
