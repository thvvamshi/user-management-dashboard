function EmptyState({
  onClearFilters,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20">

      <div className="mb-6 text-6xl">
        🔍
      </div>

      <h2 className="text-2xl font-semibold text-slate-800">
        No users found
      </h2>

      <p className="mt-3 text-center text-slate-500">
        Try changing your search or filters.
      </p>

      <button
        onClick={onClearFilters}
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
      >
        Clear Filters
      </button>

    </div>
  );
}

export default EmptyState;