"use client";

import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const maxVisiblePages = 5;
  const half = Math.floor(maxVisiblePages / 2);

  let start = Math.max(2, currentPage - half);
  let end = Math.min(totalPages - 1, currentPage + half);

  if (currentPage <= half + 1) {
    start = 2;
    end = Math.min(totalPages - 1, maxVisiblePages);
  }

  if (currentPage >= totalPages - half) {
    start = Math.max(2, totalPages - maxVisiblePages + 1);
    end = totalPages - 1;
  }

  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const createPageLink = (page: number, label?: string, disabled?: boolean) => (
    <Link
      key={label ?? page}
      href={disabled ? "#" : `?page=${page}`}
      aria-disabled={disabled}
      className={`inline-flex items-center justify-center rounded-md border 
        px-2 py-1 text-xs 
        tabletMinWidth:px-3 tabletMinWidth:py-2 tabletMinWidth:text-sm
        font-medium transition-colors
        ${
          disabled
            ? "text-gray-400 border-gray-300 cursor-not-allowed pointer-events-none"
            : page === currentPage
            ? "bg-primary text-primary-foreground border-primary"
            : "hover:bg-muted border-gray-300"
        }
      `}
    >
      {label ?? page}
    </Link>
  );

  return (
    <div className="flex items-center justify-center mt-8 gap-2 flex-wrap w-full max-w-3xl mx-auto">
      {/* Left: First + Prev */}
      <div className="flex gap-1 tabletMinWidth:gap-2">
        {createPageLink(1, "First", currentPage === 1)}
        {createPageLink(currentPage - 1, "<-", currentPage === 1)}
      </div>

      {/* Middle: Page Numbers */}
      <div className="flex items-center gap-1 tabletMinWidth:gap-2 flex-wrap justify-center">
        {createPageLink(1)}

        {start > 2 && <span className="px-1 tabletMinWidth:px-2">...</span>}

        {pages.map((page) => createPageLink(page))}

        {end < totalPages - 1 && <span className="px-1 tabletMinWidth:px-2">...</span>}

        {totalPages > 1 && createPageLink(totalPages)}
      </div>

      {/* Right: Next + Last */}
      <div className="flex gap-1 tabletMinWidth:gap-2">
        {createPageLink(currentPage + 1, "->", currentPage === totalPages)}
        {createPageLink(totalPages, "Last", currentPage === totalPages)}
      </div>
    </div>
  );
}
