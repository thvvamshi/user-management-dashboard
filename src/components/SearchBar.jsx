import { Search, ArrowUpAZ, ArrowDownAZ } from "lucide-react";

function SearchBar({
  value,
  onChange,

  department,
  setDepartment,

  sortBy,
  setSortBy,

  sortOrder,
  setSortOrder,
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center">
      {/* Search */}

      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search users..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Department */}

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
      >
        <option value="All">All Departments</option>

        <option value="Engineering">Engineering</option>
      </select>

      {/* Sort */}

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
      >
        <option value="">Sort By</option>

        <option value="name">Name</option>

        <option value="email">Email</option>

        <option value="department">Department</option>
      </select>

      {/* Order */}

      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        className="flex items-center justify-center gap-2 rounded-xl bg-slate-800 px-5 py-3 text-white transition hover:bg-slate-900"
      >
        {sortOrder === "asc" ? (
          <>
            <ArrowUpAZ size={18} />
            Ascending
          </>
        ) : (
          <>
            <ArrowDownAZ size={18} />
            Descending
          </>
        )}
      </button>
    </div>
  );
}

export default SearchBar;
