import { MailIcon } from "@/icons/MailIcon";
import { Text } from "./Text";
import Link from "next/link";
import { Copyright } from "./Copyright";
import { LinkedinIcon } from "@/icons/LinkedinIcon";
import { Github } from "@/icons/Github";

export function Footer() {
  return (
    <footer
      className="border-t transition-colors duration-300"
      style={{
        borderColor: "rgba(0,0,0,0.06)",
        background: "var(--background)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:gap-4">
          <div className="flex flex-col gap-2">
            <Text color="primary" family="chakra" weight="bold" size="base">
              Vamos conversar?
            </Text>
            <Text
              as="h2"
              family="chakra"
              size="xl"
              weight="bold"
              color="default"
              className="text-xl md:text-6xl"
              leading="none"
            >
              Entre em contato
            </Text>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="mailto:fernandamascheti@gmail.com"
              className="flex items-center gap-2 hover:underline"
            >
              <MailIcon
                className="h-5 w-5"
                style={{ color: "var(--color-cyan-primary)" }}
              />
              <Text as={"span"} color="muted" family="inter">
                fernandamascheti@gmail.com
              </Text>
            </Link>
            <Link
              href="https://linkedin.com/in/fernanda-mascheti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <LinkedinIcon />
              <Text as={"span"} color="muted" family="inter">
                /Fernanda Mascheti
              </Text>
            </Link>
            <Link
              href="https://github.com/fernandamascheti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Github />
              <Text as={"span"} color="muted" family="inter">
                /fernandamascheti
              </Text>
            </Link>
          </div>
        </div>

        <Copyright />
      </div>
    </footer>
  );
}
