import { ChevronLeft, ChevronRight } from "lucide-react";
import { PAGE_SIZE_OPTIONS } from "../utils/constants";

function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
  pageSize,
  setPageSize,
}) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="mt-5 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 md:flex-row md:items-center md:justify-between">
      {/* Left */}

      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-slate-600">
          Rows per page
        </span>

        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setCurrentPage(1);
          }}
          className="
            rounded-lg
            border
            border-slate-300
            bg-white
            px-3
            py-2
            text-sm
            outline-none
            transition
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-100
          "
        >
          {PAGE_SIZE_OPTIONS.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Center */}

      <div className="flex items-center justify-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="
            flex
            h-10
            items-center
            gap-2
            rounded-lg
            border
            border-slate-300
            px-4
            text-sm
            font-medium
            transition
            hover:bg-slate-100
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <ChevronLeft size={16} />
          Previous
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              text-sm
              font-semibold
              transition
              ${
                currentPage === page
                  ? "bg-blue-600 text-white shadow-sm"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
              }
            `}
          >
            {page}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="
            flex
            h-10
            items-center
            gap-2
            rounded-lg
            border
            border-slate-300
            px-4
            text-sm
            font-medium
            transition
            hover:bg-slate-100
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Right */}

      <div className="text-sm text-slate-500">
        Page <span className="font-semibold text-slate-700">{currentPage}</span>{" "}
        of <span className="font-semibold text-slate-700">{totalPages}</span>
      </div>
    </div>
  );
}

export default Pagination;
