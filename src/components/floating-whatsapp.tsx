"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/content/site";
import { WhatsApp } from "./icons";

/** Botão flutuante: só aparece depois do topo e some quando o contato está na tela. */
export function FloatingWhatsApp() {
  const [depoisDoTopo, setDepoisDoTopo] = useState(false);
  const [contatoVisivel, setContatoVisivel] = useState(false);

  useEffect(() => {
    const topo = document.getElementById("fim-do-topo");
    const contato = document.getElementById("contato");
    const io = new IntersectionObserver((entradas) => {
      for (const e of entradas) {
        if (e.target === topo) setDepoisDoTopo(!e.isIntersecting && e.boundingClientRect.top < 0);
        if (e.target === contato) setContatoVisivel(e.isIntersecting);
      }
    });
    if (topo) io.observe(topo);
    if (contato) io.observe(contato);
    return () => io.disconnect();
  }, []);

  const visivel = depoisDoTopo && !contatoVisivel;

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener"
      aria-label="Falar com a RB Sheeny no WhatsApp"
      tabIndex={visivel ? 0 : -1}
      aria-hidden={!visivel}
      className={`btn fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] z-30 bg-red text-white shadow-[0_12px_30px_-8px_rgba(131,25,42,0.55)] hover:bg-red-deep transition-[opacity,transform] duration-300 sm:right-6 sm:bottom-6 ${
        visivel ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsApp className="size-5" />
      WhatsApp
    </a>
  );
}
