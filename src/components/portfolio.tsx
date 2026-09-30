"use client";

import Image from "next/image";
import { avisoIlustrativas, whatsappLink, type Projeto } from "@/content/site";
import { contagem, IncorporadoraSelect, TipoChips, useFiltro } from "./portfolio-filter";
import { ArrowDown, ArrowUpRight } from "./icons";

const slug = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");

const rotuloTipo = (p: Projeto) => (p.tipo === "stand" ? "Stand de vendas" : "Apartamento decorado");

/** Cartão branco que fica sobre a foto do topo. */
export function HeroFilterCard() {
  const { lista } = useFiltro();
  return (
    <div
      className="rise grid gap-5 bg-white p-5 text-ink shadow-[0_24px_60px_-20px_rgba(22,18,15,0.35)] sm:p-7 md:grid-cols-[auto_minmax(220px,1fr)_auto] md:items-end md:gap-8"
      style={{ ["--i" as string]: 5 }}
    >
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Tipo de projeto</p>
        <TipoChips />
      </div>
      <div>
        <label htmlFor="inc-topo" className="mb-3 block text-sm font-medium text-muted">
          Incorporadora
        </label>
        <IncorporadoraSelect id="inc-topo" />
      </div>
      <a href="#portfolio" className="btn bg-ink text-white hover:bg-ink-soft">
        Ver {contagem(lista.length).toLowerCase()}
        <ArrowDown className="size-[18px]" />
      </a>
    </div>
  );
}

type Variante = "destaque" | "lado" | "grade" | "metade" | "inteiro";

const layout: Record<Variante, { proporcao: string; colunas: string }> = {
  destaque: { proporcao: "aspect-[4/3] md:aspect-[16/11]", colunas: "md:col-span-7" },
  lado: { proporcao: "aspect-[4/3] md:aspect-square", colunas: "md:col-span-5" },
  grade: { proporcao: "aspect-[4/5]", colunas: "md:col-span-4" },
  metade: { proporcao: "aspect-[4/5] md:aspect-[4/3]", colunas: "md:col-span-6" },
  inteiro: { proporcao: "aspect-[4/5] md:aspect-[21/9]", colunas: "md:col-span-12" },
};

/** Os dois primeiros formam a linha de destaque; o resto vai de três em três, e a última linha nunca fica com buraco. */
function varianteDe(i: number, total: number): Variante {
  if (i === 0) return total === 1 ? "inteiro" : "destaque";
  if (i === 1) return "lado";
  const resto = (total - 2) % 3;
  const posicao = i - 2;
  const naUltimaLinha = posicao >= total - 2 - resto;
  if (naUltimaLinha && resto === 2) return "metade";
  if (naUltimaLinha && resto === 1) return "inteiro";
  return "grade";
}

function Card({ p, variante }: { p: Projeto; variante: Variante }) {
  const { proporcao, colunas } = layout[variante];
  const detalhes = [p.incorporadora, p.interiores && `Interiores: ${p.interiores}`].filter(Boolean).join(" · ");

  return (
    <article className={`group ${colunas}`} style={{ viewTransitionName: `p-${slug(p.nome)}` }}>
      <a
        href={whatsappLink(`Olá! Vi o projeto "${p.nome}" no site da RB Sheeny e quero conversar sobre um lançamento.`)}
        target="_blank"
        rel="noopener"
        className="block"
      >
        <div className={`relative overflow-hidden bg-ink-soft ${proporcao}`}>
          <Image
            src={p.foto}
            alt={p.alt}
            fill
            sizes={variante === "inteiro" ? "100vw" : variante === "grade" ? "(min-width: 768px) 32vw, 100vw" : "(min-width: 768px) 58vw, 100vw"}
            className="zoom-img object-cover"
          />
          <span className="absolute top-4 left-4 bg-white px-3 py-2 text-xs font-semibold tracking-[0.06em] text-ink uppercase">
            {rotuloTipo(p)}
          </span>
          {p.ilustrativa && (
            <span className="absolute right-3 bottom-3 bg-ink/70 px-2 py-1 text-[11px] font-medium text-white/90">
              Imagem ilustrativa
            </span>
          )}
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3
              className={`font-semibold tracking-[-0.015em] ${variante === "destaque" || variante === "inteiro" ? "text-2xl sm:text-[1.75rem]" : "text-xl"}`}
            >
              {p.nome}
            </h3>
            <p className="mt-1 text-[0.9375rem] text-muted">{detalhes}</p>
          </div>
          <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-line transition-[background-color,border-color,color] duration-200 group-hover:border-red group-hover:bg-red group-hover:text-white">
            <ArrowUpRight className="size-[18px]" />
          </span>
        </div>
      </a>
    </article>
  );
}

export function Portfolio() {
  const { lista, limpar } = useFiltro();

  return (
    <section id="portfolio" aria-labelledby="portfolio-titulo" className="mx-auto max-w-[1320px] px-4 py-24 sm:px-8 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="portfolio-titulo" className="display max-w-[14ch] text-[clamp(2.5rem,6vw,4.75rem)]">
          Projetos <span className="accent text-red">entregues</span>
        </h2>
        <p className="text-[0.9375rem] text-muted" aria-live="polite">
          {contagem(lista.length)}
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-y border-line py-5 sm:flex-row sm:items-center sm:justify-between">
        <TipoChips tamanho="sm" />
        <div className="w-full sm:w-72">
          <label htmlFor="inc-portfolio" className="sr-only">
            Incorporadora
          </label>
          <IncorporadoraSelect id="inc-portfolio" />
        </div>
      </div>

      {lista.length === 0 ? (
        <div className="mt-12 flex flex-col items-start gap-5 bg-stone p-8 sm:p-12">
          <p className="max-w-[40ch] text-xl font-medium">Nenhum projeto com essa combinação de filtros ainda.</p>
          <button type="button" onClick={limpar} className="btn border border-ink text-ink hover:bg-ink hover:text-white">
            Mostrar todos os projetos
          </button>
        </div>
      ) : (
        <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-12">
          {lista.map((p, i) => (
            <Card key={p.nome} p={p} variante={varianteDe(i, lista.length)} />
          ))}
        </div>
      )}

      <p className="mt-12 text-sm text-muted">{avisoIlustrativas}</p>
    </section>
  );
}
