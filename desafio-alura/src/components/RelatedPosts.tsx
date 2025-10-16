import { getAllPosts } from "@/services/posts";
import { Text } from "@/components/Text";
import { PostCard } from "@/components/PostCard";

interface RelatedPostsProps {
  categorySlug: string;
  currentPostId: string;
}

export async function RelatedPosts({
  categorySlug,
  currentPostId,
}: RelatedPostsProps) {
  const { posts: relatedPostsResponse } = await getAllPosts({
    category: categorySlug,
    page: 1,
    limit: 4,
  });

  const relatedPosts = relatedPostsResponse
    .filter((p) => p.id !== currentPostId)
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <Text
        as="h2"
        family="chakra"
        weight="bold"
        className="mb-8 text-center text-3xl"
      >
        Postagens relacionadas
      </Text>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((relatedPost) => (
          <PostCard key={relatedPost.id} post={relatedPost} />
        ))}
      </div>
    </section>
  );
}
