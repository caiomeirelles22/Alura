"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search } from "@/icons/Search";

export function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [term, setTerm] = useState(searchParams.get("q") || "");

  useEffect(() => {
    if (term === searchParams.get("q")) {
      return;
    }

    const debounceTimer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (term) {
        params.set("q", term);
      } else {
        params.delete("q");
      }

      params.set("page", "1");

      router.push(`/?${params.toString()}`, { scroll: false });
    }, 300);

    return () => clearTimeout(debounceTimer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term ,router]);
  return (
    <div className="relative h-10 w-80">
      <input
        type="text"
        placeholder="Buscar..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="h-full w-full rounded-lg border border-cyan-primary px-4 pr-12 text-sm placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      <span className="absolute right-[15px] top-1/2 -translate-y-1/2">
        <Search />
      </span>
    </div>
  );
}
