import { notFound } from "next/navigation";
import { getPostById } from "@/services/posts";
import { PostHeader } from "@/components/PostHeader";
import { PostContent } from "@/components/PostContent";
import { RelatedPosts } from "@/components/RelatedPosts";

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-4 pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <PostHeader post={post} />
        <PostContent content={post.content} />
        <RelatedPosts
          categorySlug={post.category.slug}
          currentPostId={post.id}
        />
      </div>
    </main>
  );
}
