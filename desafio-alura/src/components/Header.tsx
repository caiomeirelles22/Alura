import { Code } from "@/icons/Code";
import { Text } from "./Text";

export function Header() {
  return (
    <header className="flex items-center w-full justify-between px-[82px]">
      <div className="flex gap-5 items-center">
        <Code />
        <Text weight="bold" size="2xl" family="chakra">
          FERNANDA MASCHETI
        </Text>
      </div>
      <div className="flex gap-8">
        <Text family="chakra" weight="bold" size="2xl" color="primary">
          Início
        </Text>
        <Text family="chakra" weight="bold" size="2xl">
          Blog
        </Text>
      </div>
    </header>
  );
}
