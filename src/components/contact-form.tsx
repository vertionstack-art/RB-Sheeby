"use client";

import { useId, useState } from "react";
import { whatsappLink } from "@/content/site";
import { WhatsApp } from "./icons";

type Perfil = "incorporadora" | "arquitetura";

type Campo = {
  nome: string;
  rotulo: string;
  tipo?: "text" | "select" | "textarea";
  obrigatorio?: boolean;
  opcoes?: string[];
  autoComplete?: string;
};

const formularios: Record<Perfil, { aba: string; intro: string; botao: string; campos: Campo[] }> = {
  incorporadora: {
    aba: "Sou incorporadora",
    intro: "Para incorporadoras e construtoras que vão lançar um empreendimento.",
    botao: "Pedir orçamento pelo WhatsApp",
    campos: [
      { nome: "nome", rotulo: "Seu nome", obrigatorio: true, autoComplete: "name" },
      { nome: "empresa", rotulo: "Incorporadora", obrigatorio: true, autoComplete: "organization" },
      {
        nome: "servico",
        rotulo: "O que você precisa",
        tipo: "select",
        opcoes: ["Stand de vendas", "Apartamento decorado", "Stand e decorado"],
      },
      { nome: "bairro", rotulo: "Bairro do lançamento" },
      { nome: "contato", rotulo: "WhatsApp ou e-mail", obrigatorio: true, autoComplete: "tel" },
    ],
  },
  arquitetura: {
    aba: "Sou arquiteto(a)",
    intro: "Para escritórios de interiores que precisam de quem execute o decorado.",
    botao: "Enviar projeto pelo WhatsApp",
    campos: [
      { nome: "nome", rotulo: "Seu nome", obrigatorio: true, autoComplete: "name" },
      { nome: "empresa", rotulo: "Escritório", obrigatorio: true, autoComplete: "organization" },
      { nome: "projeto", rotulo: "Conte sobre o projeto", tipo: "textarea" },
      { nome: "contato", rotulo: "WhatsApp ou e-mail", obrigatorio: true, autoComplete: "tel" },
    ],
  },
};

export function ContactForm() {
  const [perfil, setPerfil] = useState<Perfil>("incorporadora");
  const [erros, setErros] = useState<Record<string, string>>({});
  const uid = useId();
  const f = formularios[perfil];

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const novos: Record<string, string> = {};
    for (const c of f.campos) {
      const v = String(dados.get(c.nome) ?? "").trim();
      if (c.obrigatorio && !v) novos[c.nome] = `Preencha ${c.rotulo.toLowerCase()} para a gente responder.`;
    }
    setErros(novos);
    if (Object.keys(novos).length) {
      const primeiro = e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(novos)[0]}"]`);
      primeiro?.focus();
      return;
    }
    const linhas = [
      `Olá! Vim pelo site da RB Sheeny (${f.aba.toLowerCase()}).`,
      ...f.campos
        .map((c) => [c.rotulo, String(dados.get(c.nome) ?? "").trim()] as const)
        .filter(([, v]) => v)
        .map(([r, v]) => `${r}: ${v}`),
    ];
    window.open(whatsappLink(linhas.join("\n")), "_blank", "noopener");
  }

  return (
    <div className="bg-white p-5 text-ink sm:p-9">
      <div role="tablist" aria-label="Quem está entrando em contato" className="grid grid-cols-2 border border-line p-1">
        {(Object.keys(formularios) as Perfil[]).map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            id={`${uid}-aba-${k}`}
            aria-selected={perfil === k}
            aria-controls={`${uid}-painel`}
            onClick={() => {
              setPerfil(k);
              setErros({});
            }}
            className={`min-h-12 px-2 text-[0.9375rem] font-semibold transition-colors duration-200 ${
              perfil === k ? "bg-ink text-white" : "text-ink hover:bg-stone"
            }`}
          >
            {formularios[k].aba}
          </button>
        ))}
      </div>

      <form
        key={perfil}
        id={`${uid}-painel`}
        role="tabpanel"
        aria-labelledby={`${uid}-aba-${perfil}`}
        noValidate
        onSubmit={enviar}
        className="mt-7 flex flex-col gap-5"
      >
        <p className="text-[0.9375rem] text-muted">{f.intro}</p>
        {f.campos.map((c) => {
          const id = `${uid}-${perfil}-${c.nome}`;
          const erro = erros[c.nome];
          const comum = {
            id,
            name: c.nome,
            className: "field",
            "aria-invalid": erro ? true : undefined,
            "aria-describedby": erro ? `${id}-erro` : undefined,
            autoComplete: c.autoComplete,
          };
          return (
            <div key={c.nome} className="flex flex-col gap-2">
              <label htmlFor={id} className="text-sm font-medium">
                {c.rotulo}
                {!c.obrigatorio && <span className="font-normal text-muted"> (opcional)</span>}
              </label>
              {c.tipo === "select" ? (
                <select {...comum} defaultValue={c.opcoes?.[0]}>
                  {c.opcoes?.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ) : c.tipo === "textarea" ? (
                <textarea {...comum} rows={4} />
              ) : (
                <input {...comum} type="text" enterKeyHint="next" />
              )}
              {erro && (
                <p id={`${id}-erro`} className="text-sm font-medium text-red">
                  {erro}
                </p>
              )}
            </div>
          );
        })}
        <button type="submit" className="btn mt-2 w-full bg-ink text-white hover:bg-red">
          <WhatsApp className="size-[18px] text-whats" />
          {f.botao}
        </button>
        <p className="text-center text-xs text-muted">O WhatsApp abre com a mensagem pronta. É só tocar em enviar.</p>
      </form>
    </div>
  );
}
