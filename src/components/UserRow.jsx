import { Pencil, Trash2 } from "lucide-react";

function UserRow({ user, onEdit, onDelete }) {
  return (
    <tr className="border-t border-slate-200 transition hover:bg-slate-50 even:bg-slate-50/40">
      <td className="px-6 py-4 font-medium">#{user.id}</td>

      <td className="px-6 py-4">
        <div>
          <p className="font-semibold text-slate-800">
            {user.firstName} {user.lastName}
          </p>

          <p className="text-sm text-slate-500">@{user.username}</p>
        </div>
      </td>

      <td className="px-6 py-4 text-slate-600">{user.email}</td>

      <td className="px-6 py-4">
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {user.department}
        </span>
      </td>

      <td className="px-6 py-4">
        <div className="flex justify-center gap-2">
          <button
            onClick={() => onEdit(user)}
            className="rounded-lg bg-amber-100 p-2 text-amber-600 transition hover:bg-amber-200"
            title="Edit User"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(user)}
            className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-200"
            title="Delete User"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default UserRow;
