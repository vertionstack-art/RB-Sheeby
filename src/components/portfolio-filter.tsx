"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { flushSync } from "react-dom";
import { projetos, type Projeto, type TipoProjeto } from "@/content/site";

export type FiltroTipo = "todos" | TipoProjeto;

type Filtro = {
  tipo: FiltroTipo;
  incorporadora: string;
  lista: Projeto[];
  setTipo: (t: FiltroTipo) => void;
  setIncorporadora: (i: string) => void;
  limpar: () => void;
};

const Ctx = createContext<Filtro | null>(null);

export const tiposFiltro: { valor: FiltroTipo; rotulo: string }[] = [
  { valor: "todos", rotulo: "Todos" },
  { valor: "stand", rotulo: "Stands" },
  { valor: "decorado", rotulo: "Decorados" },
];

/** Incorporadoras que têm pelo menos um projeto no portfólio. */
export const incorporadorasDoPortfolio = Array.from(new Set(projetos.map((p) => p.incorporadora))).sort();

function comTransicao(atualizar: () => void) {
  type Transicao = { ready: Promise<void>; finished: Promise<void>; updateCallbackDone: Promise<void> };
  const doc = document as Document & { startViewTransition?: (cb: () => void) => Transicao };
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!doc.startViewTransition || reduzir) {
    atualizar();
    return;
  }
  // Se o navegador cancelar a animação (aba em segundo plano, clique rápido), o filtro já foi aplicado: só ignoramos o aviso.
  const t = doc.startViewTransition(() => flushSync(atualizar));
  t.ready.catch(() => {});
  t.finished.catch(() => {});
  t.updateCallbackDone.catch(() => {});
}

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [tipo, setTipoState] = useState<FiltroTipo>("todos");
  const [incorporadora, setIncState] = useState("Todas");

  const setTipo = useCallback((t: FiltroTipo) => comTransicao(() => setTipoState(t)), []);
  const setIncorporadora = useCallback((i: string) => comTransicao(() => setIncState(i)), []);
  const limpar = useCallback(
    () =>
      comTransicao(() => {
        setTipoState("todos");
        setIncState("Todas");
      }),
    [],
  );

  const lista = useMemo(
    () =>
      projetos.filter(
        (p) => (tipo === "todos" || p.tipo === tipo) && (incorporadora === "Todas" || p.incorporadora === incorporadora),
      ),
    [tipo, incorporadora],
  );

  const valor = useMemo(
    () => ({ tipo, incorporadora, lista, setTipo, setIncorporadora, limpar }),
    [tipo, incorporadora, lista, setTipo, setIncorporadora, limpar],
  );

  return <Ctx.Provider value={valor}>{children}</Ctx.Provider>;
}

export function useFiltro() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useFiltro precisa estar dentro de <PortfolioProvider>");
  return v;
}

export const contagem = (n: number) => (n === 0 ? "Nenhum projeto" : n === 1 ? "1 projeto" : `${n} projetos`);

export function TipoChips({ tamanho = "md" }: { tamanho?: "md" | "sm" }) {
  const { tipo, setTipo } = useFiltro();
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Tipo de projeto">
      {tiposFiltro.map((t) => (
        <button
          key={t.valor}
          type="button"
          className={`chip ${tamanho === "sm" ? "min-h-10! px-4!" : ""}`}
          aria-pressed={tipo === t.valor}
          onClick={() => setTipo(t.valor)}
        >
          {t.rotulo}
        </button>
      ))}
    </div>
  );
}

export function IncorporadoraSelect({ id }: { id: string }) {
  const { incorporadora, setIncorporadora } = useFiltro();
  return (
    <select id={id} className="field" value={incorporadora} onChange={(e) => setIncorporadora(e.target.value)}>
      <option value="Todas">Todas as incorporadoras</option>
      {incorporadorasDoPortfolio.map((i) => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </select>
  );
}
