import { Users, Plus } from "lucide-react";

function Header({ totalUsers, filteredUsers, onAddUser }) {
  return (
    <header className="rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}

        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
            <Users size={28} className="text-blue-600" />
          </div>  

          <div>
            <h1 className="font-bold tracking-tight text-slate-900 text-2xl lg:text-[30px]">
              User Management Dashboard
            </h1>

            <p className="mt-1 text-[15px] text-slate-500">
              Manage users efficiently with search, filters, sorting and CRUD
              operations.
            </p>
          </div>
        </div>

        {/* Right */}

        <div className="flex flex-wrap items-center gap-3">
          {/* Total */}

          <div className="min-w-[110px] rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
              Total Users
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              {totalUsers}
            </h2>
          </div>

          {/* Showing */}

          <div className="min-w-[110px] rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
            <p className="text-[11px] font-medium uppercase tracking-wider text-blue-600">
              Showing
            </p>

            <h2 className="mt-1 text-2xl font-bold text-blue-600">
              {filteredUsers}
            </h2>
          </div>

          {/* Button */}

          <button
            onClick={onAddUser}
            className="
              flex
              h-11
              items-center
              gap-2
              rounded-xl
              bg-blue-600
              px-5
              text-sm
              font-semibold
              text-white
              transition-all
              hover:bg-blue-700
              active:scale-[0.98]
            "
          >
            <Plus size={18} />
            Add User
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
