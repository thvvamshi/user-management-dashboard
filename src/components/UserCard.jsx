import { Pencil, Trash2 } from "lucide-react";

function UserCard({
  user,
  onEdit,
  onDelete,
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-lg font-semibold">
            {user.firstName} {user.lastName}
          </h3>

          <p className="text-sm text-slate-500">
            @{user.username}
          </p>

        </div>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          {user.department}
        </span>

      </div>

      <div className="mt-5 space-y-2">

        <p className="text-sm text-slate-600">
          <strong>Email:</strong> {user.email}
        </p>

        <p className="text-sm text-slate-600">
          <strong>Phone:</strong> {user.phone}
        </p>

        <p className="text-sm text-slate-600">
          <strong>Company:</strong> {user.company}
        </p>

      </div>

      <div className="mt-6 flex gap-3">

        <button
          onClick={() => onEdit(user)}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-amber-500 py-2 text-white hover:bg-amber-600"
        >
          <Pencil size={18} />

          Edit
        </button>

        <button
          onClick={() => onDelete(user)}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-500 py-2 text-white hover:bg-red-600"
        >
          <Trash2 size={18} />

          Delete
        </button>

      </div>

    </div>
  );
}

export default UserCard;