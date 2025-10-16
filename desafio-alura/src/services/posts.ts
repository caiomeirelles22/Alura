import { Category, Post } from "@/types";

const API_URL = process.env.API_URL;

interface GetPostsParams {
  query?: string;
  category?: string;
  page?: number;
  limit?: number;
}

export async function getAllPosts({
  query,
  category,
  page = 1,
}: GetPostsParams): Promise<{ posts: Post[]; totalCount: number }> {
  try {
    let url = `${API_URL}/posts`;
    if (category) {
      url = `${API_URL}/posts/category/${category}`;
    }

    const params = new URLSearchParams();
    if (query) params.append("q", query);
    params.append("page", String(page));
    params.append("limit", "6");

    const response = await fetch(`${url}?${params.toString()}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Falha ao buscar os posts da API.");
    }

    const data = await response.json();
    const totalCount = data.pagination.totalPosts || 0;

    return { posts: data.posts, totalCount };
  } catch (error) {
    console.error("Erro na busca de posts:", error);
    return { posts: [], totalCount: 0 };
  }
}

export async function getAllCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${API_URL}/posts?limit=9`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) {
      throw new Error("Falha ao buscar posts para extrair categorias.");
    }
    const data = await response.json();
    const posts: Post[] = data.posts;
    const categoryMap = new Map<string, Category>();

    posts.forEach((post) => {
      if (!categoryMap.has(post.category.slug)) {
        categoryMap.set(post.category.slug, post.category);
      }
    });

    return Array.from(categoryMap.values());
  } catch (error) {
    console.error("Erro na busca de categorias:", error);
    return [];
  }
}

export async function getPostById(id: string): Promise<Post | null> {
  try {
    const response = await fetch(`${API_URL}/posts/id/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.post;
  } catch (error) {
    console.error(`Erro na busca do post com ID ${id}:`, error);
    return null;
  }
}
