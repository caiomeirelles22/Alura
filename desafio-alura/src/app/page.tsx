import { Author } from "@/components/Author";
import { PostFeed } from "@/components/PostFeed";
import { getAllPosts, getAllCategories } from "@/services/posts";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Fernanda Mascheti - Blog de Programação",
  description:
    "Blog sobre desenvolvimento, pensamento computacional e tecnologia. Aprenda HTML, CSS, JavaScript e muito mais!",
  openGraph: {
    title: "Fernanda Mascheti - Blog de Programação",
    description: "Blog sobre desenvolvimento e tecnologia.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
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
  searchParams: {
    q?: string;
    category?: string;
    page?: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const { q, category, page } = await searchParams;
  const currentPage = Number(page) || 1;

  const [
    { posts, totalCount }, 
    allCategories
  ] = await Promise.all([
    getAllPosts({
      query: q,
      category: category,
      page: currentPage,
    }),
    getAllCategories()
  ]);

  const categoryName = allCategories.find(c => c.slug === category)?.name;

  return (
    <div>
      <div className="flex w-full justify-center">
        <Author />
      </div>
      <PostFeed
        posts={posts}
        totalPages={Math.ceil(totalCount / 6)}
        currentPage={currentPage}
        selectedCategory={category}
        categoryName={categoryName}
      />
    </div>
  );
}