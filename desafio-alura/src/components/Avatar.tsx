import Image from "next/image";
import { Text } from "./Text";

export function Avatar() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative size-40 md:size-56 border-2 border-cyan-primary rounded-full overflow-hidden">
        <Image
          src={"/FernandaAvatar.jpg"}
          alt={"avatar"}
          fill
          className="object-cover"
        />
      </div>

      <div className="text-center">
        <Text color="primary" weight="bold" family="chakra">
          Olá, meu nome é Fernanda_
        </Text>
      </div>
    </div>
  );
}
