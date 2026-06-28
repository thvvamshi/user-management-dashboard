import { Pencil, Trash2, Mail } from "lucide-react";

const badgeColors = {
  Engineering: "bg-blue-100 text-blue-700",
  Marketing: "bg-emerald-100 text-emerald-700",
  Sales: "bg-purple-100 text-purple-700",
  HR: "bg-pink-100 text-pink-700",
  Finance: "bg-orange-100 text-orange-700",
};

function UserRow({ user, index, onEdit, onDelete }) {
  const initials = `${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`;

  return (
    <tr
      className={`
        border-b border-slate-100
        transition-colors
        hover:bg-slate-50
        ${index % 2 === 0 ? "bg-white" : "bg-slate-50/30"}
      `}
    >
      {/* ID */}

      <td className="px-5 py-3">
        <span className="font-semibold text-slate-700">
          #{String(user.id).padStart(2, "0")}
        </span>
      </td>

      {/* User */}

      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
            {initials}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800">
              {user.firstName} {user.lastName}
            </h3>

            <p className="text-xs text-slate-500">@{user.username}</p>
          </div>
        </div>
      </td>

      {/* Email */}

      <td className="px-5 py-4">
        <div className="flex items-center gap-2">
          <Mail size={14} className="text-slate-400" />

          <span className="text-sm text-slate-600">{user.email}</span>
        </div>
      </td>

      {/* Department */}

      <td className="px-5 py-4">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
            badgeColors[user.department] ?? "bg-slate-100 text-slate-700"
          }`}
        >
          {user.department}
        </span>
      </td>

      {/* Actions */}

      <td className="px-5 py-4">
        <div className="flex justify-center gap-2">
          <button
            onClick={() => onEdit(user)}
            title="Edit"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              border
              border-amber-200
              bg-amber-50
              text-amber-600
              transition
              hover:bg-amber-100
            "
          >
            <Pencil size={16} />
          </button>

          <button
            onClick={() => onDelete(user)}
            title="Delete"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              border
              border-red-200
              bg-red-50
              text-red-600
              transition
              hover:bg-red-100
            "
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default UserRow;
