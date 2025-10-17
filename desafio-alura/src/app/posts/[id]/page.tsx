import { notFound } from "next/navigation";
import { getPostById } from "@/services/posts";
import { PostHeader } from "@/components/PostHeader";
import { PostContent } from "@/components/PostContent";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Metadata, ResolvingMetadata } from "next";

interface PostPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata(
  { params }: PostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = params;
  const post = await getPostById(id);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: post.content.substring(0, 155).trim() + "...",
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 155).trim() + "...",
      url: `${siteUrl}/posts/${post.id}`,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: `Capa do post: ${post.title}`,
        },
        ...previousImages,
      ],
      type: "article",
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.content.substring(0, 155).trim() + "...",
      images: [post.imageUrl],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await getPostById(id);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.imageUrl,
    author: {
      "@type": "Person",
      name: post.author,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Fernanda Mascheti",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/FernandaAvatar.jpg`,
      },
    },
    datePublished: post.createdAt,
    description: post.content.substring(0, 155).trim() + "...",
  };

  return (
    <main className="pb-16 pt-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
