import { Avatar } from "./Avatar";
import { GradientBackground } from "./GradientBackground";
import { Text } from "./Text";

export function Author() {
  return (
    <div className="relative flex flex-col items-center gap-6 max-w-[675px] mt-4 mx-4 md:pb-28">
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-50 blur-2xl">
        <GradientBackground />
      </div>

      <Avatar />
      <div>
        <Text
          family="chakra"
          weight="bold"
          className="text-xl md:text-6xl mx-auto w-fit"
        >
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
