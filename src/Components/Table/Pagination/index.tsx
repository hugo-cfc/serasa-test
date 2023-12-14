import React, { MouseEventHandler, useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: any;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const visiblePages = 4;

  const generatePageNumbers = () => {
    const pages = [];

    let start = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    let end = Math.min(start + visiblePages - 1, totalPages);

    if (end - start < visiblePages - 1) {
      start = Math.max(end - visiblePages + 1, 1);
    }

    if (start > 1) {
      pages.push(1);
      if (start > 2) {
        pages.push("...");
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div>
      <div className="pagination flex items-center">
        {generatePageNumbers().map((page, index) => (
          <span
            key={index}
            className={`px-1.5 py-2 pb-0 cursor-pointer ${
              page === "..."
                ? "ellipsis"
                : page === currentPage
                ? "active border-b border-green-600 text-green-600"
                : "border-b border-green-600 border-transparent"
            }`}
            onClick={() => {
              if (typeof page === "number") {
                onPageChange(page);
              }
            }}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
