import { Text } from "@/components/Text";

interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  return (
    <article className="prose prose-lg mt-12 max-w-none text-left">
      <Text as="p" color="muted">
        {content}
      </Text>
    </article>
  );
}
