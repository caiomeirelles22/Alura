import Link from "next/link";
import { Text } from "./Text";

export function CategoryFilter() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Link
        href={"#"}
        className={`rounded-sm px-3 py-2 text-sm transition-colors ${"bg-cyan-primary text-white"}`}
      >
        <Text color="white"> Front</Text>
      </Link>
    </div>
  );
}
