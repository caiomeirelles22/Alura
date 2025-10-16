import { MailIcon } from "@/icons/MailIcon";
import { Text } from "./Text";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:gap-4">
          <div className="flex flex-col gap-2">
            <Text color="primary" family="chakra" weight="bold" size="base">
              Vamos conversar?
            </Text>
            <Text
              as="h2"
              family="chakra"
              size="6xl"
              weight="bold"
              color="default"
              className="text-2xl md:text-6xl"
            >
              Entre em contato
            </Text>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="mailto:fernandamascheti@gmail.com"
              className="flex items-center gap-2 text-gray-900 hover:underline"
            >
              <MailIcon className="h-5 w-5 text-cyan-500" />
              <Text as={"span"} color="muted" family="inter">
                fernandamascheti@gmail.com
              </Text>
            </Link>
            <Link
              href="https://linkedin.com/in/fernanda-mascheti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-900 hover:underline"
            >
              <MailIcon className="h-5 w-5 text-cyan-500" />
              <Text as={"span"} color="muted" family="inter">
                /Fernanda Mascheti
              </Text>
            </Link>
            <Link
              href="https://github.com/fernandamascheti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-900 hover:underline"
            >
              <MailIcon className="h-5 w-5 text-cyan-500" />
              <Text as={"span"} color="muted" family="inter">
                /fernandamascheti
              </Text>
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Text color="muted" className="text-sm">
            © Copyright 2025. Produzido por Fernanda Mascheti
          </Text>
        </div>
      </div>
    </footer>
  );
}
