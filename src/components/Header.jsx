import { Users, Plus } from "lucide-react";

function Header({ totalUsers, filteredUsers, onAddUser }) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
          <Users size={32} className="text-blue-600" />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            User Management Dashboard
          </h1>

          <p className="mt-1 text-slate-500">
            Manage users efficiently with search, filtering, sorting and
            pagination.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="rounded-xl bg-slate-100 px-5 py-3">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Total Users
          </p>

          <h2 className="text-2xl font-bold">{totalUsers}</h2>
        </div>

        <div className="rounded-xl bg-blue-50 px-5 py-3">
          <p className="text-xs uppercase tracking-wide text-blue-600">
            Showing
          </p>

          <h2 className="text-2xl font-bold text-blue-700">{filteredUsers}</h2>
        </div>

        <button
          onClick={onAddUser}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add User
        </button>
      </div>
    </div>
  );
}

export default Header;
