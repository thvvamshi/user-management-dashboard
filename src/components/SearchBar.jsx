function SearchBar({
  value,
  onChange,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row">

      <input
        type="text"
        placeholder="Search users..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 rounded-lg border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
      />

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="rounded-lg border border-slate-300 px-4 py-3"
      >
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="department">Department</option>
      </select>

      <button
        onClick={() =>
          setSortOrder(
            sortOrder === "asc"
              ? "desc"
              : "asc"
          )
        }
        className="rounded-lg bg-slate-800 px-5 py-3 text-white"
      >
        {sortOrder === "asc"
          ? "↑ ASC"
          : "↓ DESC"}
      </button>

    </div>
  );
}

export default SearchBar;