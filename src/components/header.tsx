"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { whatsappLink } from "@/content/site";
import { Close, Menu, WhatsApp } from "./icons";

const links = [
  { href: "#portfolio", rotulo: "Portfólio" },
  { href: "#servicos", rotulo: "Serviços" },
  { href: "#sobre", rotulo: "Sobre" },
  { href: "#contato", rotulo: "Contato" },
];

export function Header() {
  const [solido, setSolido] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const alvo = document.getElementById("fim-do-topo");
    if (!alvo) return;
    const io = new IntersectionObserver(([e]) => setSolido(!e.isIntersecting && e.boundingClientRect.top < 0));
    io.observe(alvo);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!aberto) return;
    const fechar = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", fechar);
    return () => window.removeEventListener("keydown", fechar);
  }, [aberto]);

  const claro = solido || aberto;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 pt-[env(safe-area-inset-top)] transition-[background-color,box-shadow,color] duration-300 ${
        claro ? "bg-white text-ink shadow-[0_1px_0_var(--color-line)] sm:bg-white/95 sm:backdrop-blur-md" : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-4 px-4 sm:h-20 sm:px-8">
        <a href="#topo" className="relative block h-9 w-[80px] shrink-0 sm:h-11 sm:w-[97px]" aria-label="RB Sheeny, voltar ao início">
          <Image
            src="/brand/rb-logo-branca.png"
            alt=""
            fill
            sizes="100px"
            priority
            className={`object-contain object-left transition-opacity duration-300 ${claro ? "opacity-0" : "opacity-100"}`}
          />
          <Image
            src="/brand/rb-logo-preta.png"
            alt=""
            fill
            sizes="100px"
            className={`object-contain object-left transition-opacity duration-300 ${claro ? "opacity-100" : "opacity-0"}`}
          />
        </a>

        <nav aria-label="Seções" className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.9375rem] font-medium opacity-80 transition-opacity hover:opacity-100 hover:underline"
            >
              {l.rotulo}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            className={`btn min-h-11! px-4! text-sm! sm:px-5! ${
              claro ? "bg-ink text-white hover:bg-ink-soft" : "bg-white text-ink hover:bg-stone"
            }`}
          >
            <WhatsApp className="size-[18px] text-whats" />
            WhatsApp
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full md:hidden"
            aria-expanded={aberto}
            aria-controls="menu-celular"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            onClick={() => setAberto((v) => !v)}
          >
            {aberto ? <Close className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <nav
        id="menu-celular"
        aria-label="Seções"
        hidden={!aberto}
        className="border-t border-line bg-white px-4 pb-6 md:hidden"
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setAberto(false)}
            className="flex min-h-14 items-center border-b border-line text-lg font-medium"
          >
            {l.rotulo}
          </a>
        ))}
      </nav>
    </header>
  );
}
