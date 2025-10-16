"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export function Pagination({ totalPages, currentPage }: PaginationProps) {
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(pageNumber));
    return `/?${params.toString()}`;
  };

  if (totalPages <= 1) {
    return null;
  }

  const getPaginationRange = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const pages = getPaginationRange();

  const baseStyle =
    "flex h-9 w-9 items-center justify-center rounded-sm font-bold transition-colors";
  const primaryStyle = "bg-blue-dark text-white";
  const secondaryStyle = "border bg-gray-medium text-white hover:bg-blue-dark";
  return (
    <nav className="flex items-center justify-center gap-2">
      {pages.map((page, index) =>
        typeof page === "string" ? (
          <span
            key={`ellipsis-${index}`}
            className="flex h-9 w-9 items-center justify-center px-2 text-gray-500"
          >
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={createPageURL(page)}
            scroll={false}
            className={`
              ${baseStyle} 
              ${currentPage === page ? primaryStyle : secondaryStyle}
            `}
          >
            {page}
          </Link>
        )
      )}
    </nav>
  );
}
