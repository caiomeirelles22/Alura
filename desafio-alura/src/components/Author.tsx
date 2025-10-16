import { Avatar } from "./Avatar";
import { Text } from "./Text";

export function Author() {
  return (
    <div className="flex flex-col gap-6 max-w-[675px]">
      <Avatar />
      <div>
        <Text family="chakra" weight="bold" size="6xl">
          Eu ensino{" "}
          <span className="bg-gradient-to-r from-[#8C61D5] to-[#1CA7C8] bg-clip-text text-transparent">
            Programação
          </span>
        </Text>
      </div>

      <Text family="inter" color="muted" align="center">
        Sou Engenheira de Computação e Pedagoga. Ensino pensamento computacional
        para estudantes do Ensino Fundamental e Médio. Ensino sobre pensamento
        computacional usando HTML, CSS e JavaScript. Veja os projetos que já
        desenvolvi!
      </Text>
    </div>
  );
}
