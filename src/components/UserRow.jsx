function UserRow({ user, onEdit, onDelete }) {
  return (
    <tr className="border-t border-slate-200 hover:bg-slate-50">
      <td className="px-6 py-4">{user.id}</td>

      <td className="px-6 py-4">
        {user.firstName} {user.lastName}
      </td>

      <td className="px-6 py-4">{user.email}</td>

      <td className="px-6 py-4">{user.department}</td>

      <td className="px-6 py-4">
        <div className="flex justify-center gap-3">
          <button
            onClick={() => onEdit(user)}
            className="rounded bg-blue-500 px-3 py-1 text-white transition hover:bg-blue-600"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(user)}
            className="rounded bg-red-500 px-3 py-1 text-white transition hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default UserRow;
