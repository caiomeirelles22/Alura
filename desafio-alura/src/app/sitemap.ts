import { MetadataRoute } from 'next';
import { getAllPosts } from '@/services/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!baseUrl) {
    throw new Error('A variável de ambiente NEXT_PUBLIC_SITE_URL não está definida.');
  }

  const { posts } = await getAllPosts({ limit: 1000, revalidate: 3600 }); 

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.id}`,
    lastModified: new Date(post.createdAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...postUrls,
  ];
}