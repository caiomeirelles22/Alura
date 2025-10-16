import { getAllCategories } from "@/services/posts";
import Link from "next/link";
import { Text } from "./Text";

export async function CategoryFilter() {
  const categories = await getAllCategories();

  return (
    <div className="flex items-start gap-4">
      <Text family="inter" weight="bold">
        Categorias:
      </Text>
      <div className="flex gap-4  max-w-96 flex-wrap">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/?category=${category.slug}`}
            className="rounded-sm bg-cyan-primary px-3 py-2 text-sm text-white transition-colors hover:bg-cyan-primary/80"
            scroll={false}
          >
            <Text color="white">{category.name}</Text>
          </Link>
        ))}
        <Link
          href={`/`}
          className="rounded-sm bg-cyan-primary px-3 py-2 text-sm text-white transition-colors hover:bg-cyan-primary/80"
          scroll={false}
        >
          <Text color="white">Todas categorias</Text>
        </Link>
      </div>
    </div>
  );
}
