export interface Category {
  slug: string
  name: string
  description?: string
}

export interface Post {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
  likes: number
  category: Category
  tags: {
    slug: string
    name: string
  }[]
  imageUrl: string
}