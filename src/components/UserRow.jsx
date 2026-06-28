function UserRow({ user }) {
  return (
    <tr className="border-t border-slate-200 hover:bg-slate-50">

      <td className="px-6 py-4">{user.id}</td>

      <td className="px-6 py-4">
        {user.firstName} {user.lastName}
      </td>

      <td className="px-6 py-4">{user.email}</td>

      <td className="px-6 py-4">{user.department}</td>

      <td className="px-6 py-4">

        <div className="flex justify-center gap-2">

          <button
            className="rounded-lg bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700"
          >
            Edit
          </button>

          <button
            className="rounded-lg bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </td>

    </tr>
  );
}

export default UserRow;