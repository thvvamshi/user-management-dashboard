import { PAGE_SIZE_OPTIONS } from "../utils/constants";

function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
  pageSize,
  setPageSize,
}) {
  return (
    <div className="mt-6 flex items-center justify-between">
      <div>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="border rounded px-3 py-2"
        >
          {PAGE_SIZE_OPTIONS.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-3 items-center">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Previous
        </button>

        <span>
          {currentPage} / {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;