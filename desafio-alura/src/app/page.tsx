import { Author } from "@/components/Author";
import { PostFeed } from "@/components/PostFeed";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center w-full justify-between  pb-28">
        <Author />
      </div>
      <PostFeed />
    </div>
  );
}
