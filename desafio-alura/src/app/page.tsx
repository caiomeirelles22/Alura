import { Author } from "@/components/Author";
import { PostFeed } from "@/components/PostFeed";
import { getAllPosts } from "@/services/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fernanda Mascheti - Blog de Programação",
  description:
    "Blog sobre desenvolvimento, pensamento computacional e tecnologia. Aprenda HTML, CSS, JavaScript e muito mais!",
  openGraph: {
    title: "Fernanda Mascheti - Blog de Programação",
    description: "Blog sobre desenvolvimento e tecnologia.",
    url: process.env.API_URL,
    images: [
      {
        url: "/FernandaAvatar.jpg",
        width: 800,
        height: 600,
        alt: "Avatar de Fernanda Mascheti",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

interface HomeProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    page?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { q, category, page } = await searchParams;

  const currentPage = Number(page) || 1;
  const { posts, totalCount } = await getAllPosts({
    query: q,
    category: category,
    page: currentPage,
  });

  return (
    <div>
      <div className="flex justify-center w-full">
        <Author />
      </div>
      <PostFeed
        posts={posts}
        totalPages={Math.ceil(totalCount / 6)}
        currentPage={currentPage}
      />
    </div>
  );
}
