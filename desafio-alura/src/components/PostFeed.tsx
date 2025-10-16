import React, { Suspense } from "react";
import { CategoryFilter } from "./CategoryFilter";
import { PostCard } from "./PostCard";
import { SearchInput } from "./SearchInput";
import { Text } from "./Text";

export function PostFeed() {
  const posts = Array.from({ length: 6 }); 
  const categories = ["IA", "Back-end", "Front-end"];

  return (
    <div className="flex w-full max-w-6xl mx-auto flex-col items-center gap-12 py-10">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-8">
          <Text weight="bold" size="2xl" family="chakra">
            Minhas postagens
          </Text>
          <Suspense fallback={<div className="w-80 h-10" /> }>
            <SearchInput />
          </Suspense>
        </div>

        <div className="flex items-center gap-4">
          <Text family="inter" weight="bold">
            Categorias:
          </Text>
          <div className="flex gap-4">
            {categories.map((category) => (
              <CategoryFilter key={category} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-3 gap-x-6 gap-y-8">
        {posts.map((_, index) => (
          <PostCard key={index} />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button className="h-9 w-9 rounded bg-slate-800 text-white transition-colors hover:bg-slate-700">
          1
        </button>
        <button className="h-9 w-9 rounded bg-slate-200 text-slate-600 transition-colors hover:bg-slate-300">
          2
        </button>
        <button className="h-9 w-9 rounded bg-slate-200 text-slate-600 transition-colors hover:bg-slate-300">
          3
        </button>
      </div>
    </div>
  );
}
