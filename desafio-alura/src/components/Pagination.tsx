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

  const baseStyle =
    "flex h-9 w-9 items-center justify-center rounded-sm font-bold transition-colors";

  const primaryStyle = "bg-blue-dark text-white";
  const secondaryStyle =
    "border bg-gray-medium text-white hover:bg-blue-dark";

  return (
    <nav className="flex items-center justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
      ))}
    </nav>
  );
}
