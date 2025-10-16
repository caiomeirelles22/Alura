import Image from "next/image";
import { Post } from "@/types";
import { Text } from "@/components/Text";
import { GradientBackgroundDetail } from "./GradientBackgroundDetail";

interface PostHeaderProps {
  post: Post;
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <article className="relative flex flex-col lg:pt-24 lg:flex-row items-center lg:items-start justify-between gap-4 lg:gap-12 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 w-[125%] h-[125%] -translate-x-1/2 -translate-y-1/2 -z-10 opacity-60 blur-3xl"
        aria-hidden="true"
      >
        <GradientBackgroundDetail />
      </div>

      <div className="flex flex-col gap-6 w-full lg:w-auto order-2 lg:order-1 items-center lg:items-start">
        <Text
          as="h1"
          family="chakra"
          weight="bold"
          leading="none"
          size="2xl"
          className="text-center lg:text-left md:text-6xl"
        >
          {post.title}
        </Text>

        <div className="flex flex-col gap-4 w-fit">
          <Text as="span" weight="bold" family="inter" align="center">
            Categoria:
          </Text>
          <span className="rounded-sm bg-cyan-primary px-3 py-2 text-sm text-white w-fit font-bold">
            {post.category.name}
          </span>
        </div>

        <div className="flex flex-col gap-4 w-fit">
          <Text as="span" weight="bold">
            Tags:
          </Text>
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            {post.tags.map((tag) => (
              <span
                key={tag.slug}
                className="rounded-sm border border-cyan-primary px-3 py-1 text-sm text-cyan-primary"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[608px] order-1 lg:order-2 flex-shrink-0">
        <div className="relative w-full h-auto aspect-[608/358] rounded-lg">
          <Image
            src={post.imageUrl}
            alt={`Capa do post: ${post.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 608px"
            priority
          />
        </div>
      </div>
    </article>
  );
}
