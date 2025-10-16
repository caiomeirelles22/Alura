import { getAllCategories } from "@/services/posts";
import Link from "next/link";
import { Text } from "./Text";

interface CategoryFilterProps {
  selectedCategory?: string;
}

export async function CategoryFilter({ selectedCategory }: CategoryFilterProps) {
  const categories = await getAllCategories();

  const baseStyle = "rounded-sm px-3 py-2 text-sm text-white transition-colors";
  const defaultStyle = `${baseStyle} bg-cyan-primary hover:bg-cyan-primary/80`;
  const activeStyle = `${baseStyle} bg-blue-dark`;

  return (
    <div className="flex flex-col flex-wrap items-start gap-4 lg:flex-row">
      <Text family="inter" weight="bold" className="mx-auto">
        Categorias:
      </Text>
      <div className="flex gap-4  max-w-96 flex-wrap">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/?category=${category.slug}`}
            className={
              selectedCategory === category.slug ? activeStyle : defaultStyle
            }
            scroll={false}
          >
            <Text color="white" weight="bold">{category.name}</Text>
          </Link>
        ))}
        <Link
          href={`/`}
          
          className={!selectedCategory ? activeStyle : defaultStyle}
          scroll={false}
        >
          <Text color="white" weight="bold">Todas categorias</Text>
        </Link>
      </div>
    </div>
  );
}