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
  limit = 6,
}: GetPostsParams): Promise<{ posts: Post[]; totalCount: number }> {
  try {
    const totalPagesInApi = 5;
    const pageNumbers = Array.from(
      { length: totalPagesInApi },
      (_, i) => i + 1
    );

    const fetchPromises = pageNumbers.map((pageNum) =>
      fetch(`${API_URL}/posts?limit=9&page=${pageNum}`, { cache: "no-store" })
    );

    const responses = await Promise.all(fetchPromises);

    for (const res of responses) {
      if (!res.ok) {
        throw new Error("Falha ao buscar uma das páginas de posts da API.");
      }
    }

    const jsonPromises = responses.map((res) => res.json());
    const pageData = await Promise.all(jsonPromises);
    const allPosts: Post[] = pageData.flatMap((data) => data.posts);

    let filteredPosts = allPosts;

    if (category) {
      filteredPosts = filteredPosts.filter(
        (post) => post.category.slug === category
      );
    }

    if (query) {
      const lowercasedQuery = query.toLowerCase();
      filteredPosts = filteredPosts.filter((post) => {
        const titleMatch = post.title.toLowerCase().includes(lowercasedQuery);
        const categoryMatch = post.category.name
          .toLowerCase()
          .includes(lowercasedQuery);
        const tagsMatch = post.tags.some((tag) =>
          tag.name.toLowerCase().includes(lowercasedQuery)
        );
        return titleMatch || categoryMatch || tagsMatch;
      });
    }

    const totalCount = filteredPosts.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    return { posts: paginatedPosts, totalCount };
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
