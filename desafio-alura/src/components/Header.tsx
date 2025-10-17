"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Code } from "@/icons/Code";
import { Text } from "./Text";
import { DarkModeToggle } from "./DarkModeToggle";
import { HamburguerMenu } from "@/icons/HamburguerMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <header
      className="fixed top-0 left-0 z-20 flex w-full items-center justify-between px-4 py-4 sm:px-8 md:px-12 lg:px-[82px] transition-colors duration-300"
      style={{
        background: "var(--background)",
        borderBottom: "1px solid",
        borderColor: "var(--card-border)",
      }}
    >
      <Link href="/" className="z-20 flex items-center gap-5">
        <div className="size-8 md:size-12">
          <Code />
        </div>
        <Text weight="bold" size="base" family="chakra" className="sm:text-2xl">
          FERNANDA MASCHETI
        </Text>
      </Link>

      <nav className="hidden items-center gap-6 md:flex">
        <Link href="/">
          <Text family="chakra" weight="bold" size="2xl" color="primary">
            Início
          </Text>
        </Link>
        <Link href="/">
          <Text family="chakra" weight="bold" size="2xl">
            Blog
          </Text>
        </Link>
        <DarkModeToggle />
      </nav>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="z-20 md:hidden"
        aria-label="Abrir menu"
      >
        <HamburguerMenu isMenuOpen={isMenuOpen} />
      </button>

      {isMenuOpen && (
        <div
          className="absolute top-0 left-0 z-10 flex h-screen w-full flex-col items-center justify-center gap-10 md:hidden transition-colors duration-300"
          style={{
            background: "var(--background)",
            color: "var(--foreground)",
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          <Link href="/">
            <Text family="chakra" weight="bold" size="2xl" color="primary">
              Início
            </Text>
          </Link>
          <Link href="/">
            <Text family="chakra" weight="bold" size="2xl">
              Blog
            </Text>
          </Link>
          <div className="mt-4">
            <DarkModeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
