import Image from "next/image";
import { Text } from "./Text";
import Link from "next/link";
import { Post } from "@/types";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article
      className={`flex w-full flex-col rounded-sm p-6 gap-[26px] shadow-sm border border-solid
        transition-all duration-300 ease-in-out hover:shadow-[0px_4px_44px_0px_#1CA7C84D]`}
      style={{
        background: "var(--background)",
        border: "1px solid",
        borderColor: "var(--card-border)",
      }}
    >
      <div className="relative h-[196px] w-full rounded-[4px]">
        <Image
          src={post.imageUrl}
          alt={`Capa do post: ${post.title}`}
          fill
          className="object-cover"
        />
        <div
          className="absolute bottom-0 right-0 text-white text-sm font-semibold py-1.5 w-[130px] h-[30px] text-center flex items-center justify-center"
          style={{ background: "var(--color-cyan-primary)" }}
        >
          <Text color="white" className="text-sm">
            {post.category.name}
          </Text>
        </div>
      </div>

      <div className="flex flex-col flex-grow gap-3">
        <Text as="h3" family="chakra" size="xl" weight="bold" color="default">
          {post.title}
        </Text>

        <Text as="p" color="muted" className="leading-relaxed">
          {post.content.substring(0, 100)}...
        </Text>

        <Link href={`/posts/${post.id}`} passHref>
          <Text
            as="span"
            family="inter"
            color="primary"
            weight="bold"
            className="hover:underline mt-auto"
          >
            Ler mais
          </Text>
        </Link>
      </div>
    </article>
  );
}
