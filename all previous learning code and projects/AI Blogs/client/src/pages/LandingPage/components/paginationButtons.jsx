import React from "react";

const PaginationButtons = ({ currentPage, totalPages, onPageChange, fetchBlogs }) => {
  // Get page numbers limited to 5
  const getPageNumbers = () => {
    let start = Math.max(1, currentPage - 2);
    let end = start + 4;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - 4);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  // Handler for page change + fetch
  const handlePageChange = (page) => {
    onPageChange(page); // update page state in parent
    fetchBlogs(page); // call query function for new blogs
  };

  return (
    <nav aria-label="Pagination" className="flex justify-center mt-6">
      <ul className="flex items-center gap-2 text-base h-10">
        {/* Previous Button */}
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className={`flex items-center justify-center px-4 h-10 leading-tight border rounded-s-lg transition-colors
              ${currentPage === 1
                ? "text-[rgb(var(--muted-foreground))] bg-[rgb(var(--muted))] cursor-not-allowed"
                : "text-[rgb(var(--foreground))] bg-[rgb(var(--card))] border-[rgb(var(--border))] hover:bg-[rgb(var(--muted))]"
              }`}
          >
            Previous
          </button>
        </li>

        {/* Page Numbers */}
        {getPageNumbers().map((page) => (
          <li key={page}>
            <button
              onClick={() => handlePageChange(page)}
              className={`flex items-center justify-center px-4 h-10 leading-tight border rounded-md transition-colors
                ${page === currentPage
                  ? "z-10 text-[rgb(var(--primary-foreground))] border-[rgb(var(--primary))] bg-[rgb(var(--primary))]"
                  : "text-[rgb(var(--foreground))] bg-[rgb(var(--card))] border-[rgb(var(--border))] hover:bg-[rgb(var(--muted))]"
                }`}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className={`flex items-center justify-center px-4 h-10 leading-tight border rounded-e-lg transition-colors
              ${currentPage === totalPages
                ? "text-[rgb(var(--muted-foreground))] bg-[rgb(var(--muted))] cursor-not-allowed"
                : "text-[rgb(var(--foreground))] bg-[rgb(var(--card))] border-[rgb(var(--border))] hover:bg-[rgb(var(--muted))]"
              }`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationButtons;
