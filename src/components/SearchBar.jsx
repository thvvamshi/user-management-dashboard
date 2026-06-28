import {
  Search,
  ArrowUpAZ,
  ArrowDownAZ,
  Building2,
  ArrowUpDown,
} from "lucide-react";

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
    <div className="mb-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        {/* Search */}

        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search by name or email..."
            className="
              h-12
              w-full
              rounded-lg
              border
              border-slate-300
              bg-white
              pl-11
              pr-4
              text-sm
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
          />
        </div>

        {/* Department */}

        <div className="relative">
          <Building2
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="
              h-11
              w-56
              appearance-none
              rounded-lg
              border
              border-slate-300
              bg-white
              pl-10
              pr-8
              text-sm
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
          >
            <option value="All">All Departments</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
          </select>
        </div>

        {/* Sort */}

        <div className="relative">
          <ArrowUpDown
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="
              h-11
              w-48
              appearance-none
              rounded-lg
              border
              border-slate-300
              bg-white
              pl-10
              pr-8
              text-sm
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
          >
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="department">Department</option>
          </select>
        </div>

        {/* Order */}

        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="
            flex
            h-11
            w-48
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-slate-900
            px-4
            text-sm
            font-medium
            text-white
            transition
            hover:bg-slate-800
          "
        >
          {sortOrder === "asc" ? (
            <>
              <ArrowUpAZ size={17} />
              Ascending
            </>
          ) : (
            <>
              <ArrowDownAZ size={17} />
              Descending
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
