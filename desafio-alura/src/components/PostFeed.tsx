import React, { Suspense } from "react";
import { PostCard } from "./PostCard";
import { SearchInput } from "./SearchInput";
import { Text } from "./Text";
import { Post } from "@/types";
import { CategoryFilter } from "./CategoryFilter";
import { Pagination } from "./Pagination";

interface PostFeedProps {
  posts: Post[];
  totalPages: number;
  currentPage: number;
  selectedCategory?: string;
  categoryName?: string;
}

export function PostFeed({
  posts,
  totalPages,
  currentPage,
  categoryName,
  selectedCategory,
}: PostFeedProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 py-10 px-4 xl:px-0">
      <div className="flex w-full items-start justify-center xl:justify-between flex-wrap gap-6 md:gap-4">
        <div className="flex items-center gap-2 md:gap-8 flex-wrap">
          <Text weight="bold" size="2xl" family="chakra" className="mx-auto">
            Minhas postagens
          </Text>
          <Suspense fallback={<div className="h-10 w-80" />}>
            <SearchInput />
          </Suspense>
        </div>
        <Suspense
          fallback={
            <div className="h-8 w-72 animate-pulse rounded bg-gray-200" />
          }
        >
          <CategoryFilter selectedCategory={selectedCategory} />
        </Suspense>
      </div>

      {posts.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex h-40 items-center justify-center">
          {categoryName ? (
            <Text color="muted">
              Nenhum item encontrado na categoria {categoryName}.
            </Text>
          ) : (
            <Text color="muted">Nenhum post encontrado.</Text>
          )}
        </div>
      )}

      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
