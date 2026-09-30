import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Header } from "@/components/header";
import { ArrowDown, LinkedIn, Plus, WhatsApp } from "@/components/icons";
import { HeroFilterCard, Portfolio } from "@/components/portfolio";
import { PortfolioProvider } from "@/components/portfolio-filter";
import {
  credito,
  empresa,
  escritoriosInteriores,
  fotosApoio,
  hero,
  incorporadoras,
  motivos,
  servicos,
  whatsappLink,
} from "@/content/site";

const anosDeMercado = new Date().getFullYear() - empresa.desde;

function Destaque({ texto, palavra }: { texto: string; palavra: string }) {
  const i = texto.lastIndexOf(palavra);
  if (i < 0) return <>{texto}</>;
  return (
    <>
      {texto.slice(0, i)}
      <span className="accent">{palavra}</span>
      {texto.slice(i + palavra.length)}
    </>
  );
}

export default function Home() {
  return (
    <PortfolioProvider>
      <a
        href="#conteudo"
        className="sr-only z-50 bg-ink px-4 py-3 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <Header />

      <main id="conteudo">
        {/* Topo */}
        <section id="topo" aria-labelledby="titulo" className="relative text-white">
          {/* No computador o topo desconta a altura do cartão de filtro, para ele caber inteiro na primeira tela. */}
          <div className="relative flex min-h-[max(680px,100svh)] flex-col justify-end overflow-hidden bg-ink px-4 pt-28 pb-[clamp(8rem,20vh,11rem)] sm:px-8 md:min-h-[max(620px,calc(100svh-64px))] md:pb-40">
            <Image
              src={hero.foto}
              alt={hero.alt}
              fill
              priority
              sizes="(max-aspect-ratio: 1/1) 230vh, 100vw"
              className="hero-photo object-cover object-[72%_60%] opacity-80 md:object-center"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,18,15,0.62)_0%,rgba(22,18,15,0.05)_32%,rgba(22,18,15,0.35)_58%,rgba(22,18,15,0.9)_100%)]"
            />
            <div className="relative mx-auto w-full max-w-[1320px]">
              <h1
                id="titulo"
                className="display rise max-w-[11ch] text-[clamp(3rem,9.4vw,6rem)]"
                style={{ ["--i" as string]: 0 }}
              >
                Construímos o que <span className="accent text-[#f0c9ce]">vende</span> o prédio.
              </h1>
              <div className="mt-8 flex flex-col gap-8 border-t border-white/25 pt-7 md:flex-row md:items-end md:justify-between">
                <p
                  className="rise max-w-[46ch] text-[clamp(1.0625rem,1.5vw,1.25rem)] leading-relaxed text-white/85"
                  style={{ ["--i" as string]: 2 }}
                >
                  Stands de venda e apartamentos decorados para lançamentos no Rio de Janeiro, desde {empresa.desde}. O
                  primeiro lugar onde o comprador vê o empreendimento de verdade.
                </p>
                <div className="rise flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ ["--i" as string]: 3 }}>
                  <a href={whatsappLink()} target="_blank" rel="noopener" className="btn bg-red text-white hover:bg-red-deep">
                    <WhatsApp className="size-[18px]" />
                    Falar no WhatsApp
                  </a>
                  <a href="#portfolio" className="btn border border-white/50 text-white hover:border-white hover:bg-white/10">
                    Ver portfólio
                    <ArrowDown className="size-[18px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 mx-auto -mt-24 max-w-[1240px] px-3 sm:px-8 md:-mt-28">
            <HeroFilterCard />
          </div>
        </section>
        <div id="fim-do-topo" aria-hidden className="h-px" />

        {/* Incorporadoras */}
        <section aria-label="Incorporadoras atendidas" className="pt-16 md:pt-24">
          <p className="px-4 text-center text-[0.9375rem] text-muted">
            Presente nos lançamentos de grandes incorporadoras
          </p>
          <div className="marquee mt-7 overflow-hidden border-y border-line py-7 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <ul className="marquee-track flex w-max items-center motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
              {[0, 1].map((copia) =>
                [...incorporadoras, ...incorporadoras].map((n, i) => (
                  <li
                    key={`${copia}-${i}`}
                    aria-hidden={copia === 1 || i >= incorporadoras.length ? true : undefined}
                    className={`flex items-center gap-12 pr-12 text-[clamp(1.75rem,3.6vw,2.625rem)] font-bold tracking-[-0.02em] whitespace-nowrap [font-variation-settings:'wdth'_112] ${
                      copia === 1 || i >= incorporadoras.length ? "motion-reduce:hidden" : ""
                    }`}
                  >
                    {n}
                    <span aria-hidden className="size-2 bg-red" />
                  </li>
                )),
              )}
            </ul>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" aria-labelledby="sobre-titulo" className="mx-auto max-w-[1320px] px-4 pt-24 sm:px-8 md:pt-32">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h2 id="sobre-titulo" className="sr-only">
                Sobre a RB Sheeny
              </h2>
              <div className="relative aspect-[4/5] overflow-hidden bg-stone md:aspect-auto md:h-full md:min-h-[420px]">
                <Image
                  src={fotosApoio.sobre.foto}
                  alt={fotosApoio.sobre.alt}
                  fill
                  sizes="(min-width: 768px) 32vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute right-3 bottom-3 bg-ink/70 px-2 py-1 text-[11px] font-medium text-white/90">
                  Imagem ilustrativa
                </span>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-[clamp(1.625rem,3.3vw,2.625rem)] leading-[1.2] font-normal tracking-[-0.02em]">
                Somos uma construtora de nicho. Não fazemos prédios: fazemos{" "}
                <span className="accent text-red">o que vende</span> o prédio.{" "}
                <span className="text-muted">
                  Stands e decorados com prazo curto, acabamento de vitrine e o cuidado de quem faz só isso há mais de
                  três décadas.
                </span>
              </p>
              <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-8 sm:grid-cols-3">
                <div className="flex flex-col gap-3">
                  <dt className="text-[0.9375rem] text-muted">Começamos em</dt>
                  <dd className="order-first text-[clamp(2.75rem,5vw,4rem)] leading-none font-light tracking-[-0.03em] tabular-nums">
                    {empresa.desde}
                  </dd>
                </div>
                <div className="flex flex-col gap-3">
                  <dt className="text-[0.9375rem] text-muted">anos no segmento</dt>
                  <dd className="order-first text-[clamp(2.75rem,5vw,4rem)] leading-none font-light tracking-[-0.03em] tabular-nums">
                    {anosDeMercado >= 30 ? "30" : anosDeMercado}
                    <span className="text-red">+</span>
                  </dd>
                </div>
                <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
                  <dt className="text-[0.9375rem] text-muted">especialidades, e só elas</dt>
                  <dd className="order-first text-[clamp(2.75rem,5vw,4rem)] leading-none font-light tracking-[-0.03em] tabular-nums">
                    2
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <Portfolio />

        {/* Serviços */}
        <section id="servicos" aria-labelledby="servicos-titulo" className="bg-ink text-white">
          <div className="mx-auto max-w-[1320px] px-4 pt-24 pb-20 sm:px-8 md:pt-32 md:pb-24">
            <h2 id="servicos-titulo" className="display max-w-[16ch] text-[clamp(2.5rem,6vw,4.75rem)]">
              Duas coisas, <span className="accent text-[#f0c9ce]">bem feitas</span>.
            </h2>
            <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-10">
              {servicos.map((s, i) => (
                <article key={s.id} className={`flex flex-col gap-7 ${i === 1 ? "md:mt-24" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
                    <Image src={s.foto} alt={s.alt} fill sizes="(min-width: 768px) 46vw, 100vw" className="object-cover" />
                    <span className="absolute right-3 bottom-3 bg-ink/70 px-2 py-1 text-[11px] font-medium text-white/90">
                      Imagem ilustrativa
                    </span>
                  </div>
                  <h3 className="text-[clamp(2rem,3.6vw,3rem)] leading-none font-semibold tracking-[-0.03em]">
                    <Destaque texto={s.titulo} palavra={s.destaque} />
                  </h3>
                  <p className="max-w-[48ch] text-[1.0625rem] leading-relaxed text-white/75">{s.texto}</p>
                  {s.id === "decorados" && (
                    <p className="max-w-[48ch] border-t border-white/15 pt-6 text-[1.0625rem] leading-relaxed text-white/75">
                      Já executamos projetos de escritórios como{" "}
                      <strong className="font-semibold text-white">{escritoriosInteriores.join(" e ")}</strong>, com o
                      desenho respeitado como ele foi pensado.
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Por que a RB Sheeny */}
        <section aria-labelledby="motivos-titulo" className="mx-auto max-w-[1320px] px-4 py-24 sm:px-8 md:py-32">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <div className="flex flex-col gap-10 md:col-span-5">
              <h2
                id="motivos-titulo"
                className="text-[clamp(2.125rem,4.4vw,3.5rem)] leading-[1.02] font-semibold tracking-[-0.03em]"
              >
                Lançamento não espera. <span className="accent text-red">Acabamento também não.</span>
              </h2>
              {/* A foto ocupa o que sobra ao lado da sanfona, então as duas colunas terminam juntas. */}
              <div className="relative hidden min-h-[200px] flex-1 overflow-hidden bg-stone md:block">
                <Image
                  src={fotosApoio.motivos.foto}
                  alt={fotosApoio.motivos.alt}
                  fill
                  sizes="36vw"
                  className="object-cover"
                />
                <span className="absolute right-3 bottom-3 bg-ink/70 px-2 py-1 text-[11px] font-medium text-white/90">
                  Imagem ilustrativa
                </span>
              </div>
            </div>
            <div className="md:col-span-7">
              {motivos.filter((m) => m.ativo).map((m, i) => (
                <details key={m.titulo} name="motivos" open={i === 0} className="faq group border-t border-line last:border-b">
                  <summary className="flex min-h-18 items-center justify-between gap-6 py-5">
                    <span className="text-[clamp(1.125rem,1.8vw,1.375rem)] font-medium">{m.titulo}</span>
                    <span className="faq-icon grid size-10 shrink-0 place-items-center rounded-full border border-line text-red">
                      <Plus className="size-[18px]" />
                    </span>
                  </summary>
                  <p className="max-w-[56ch] pb-7 text-[1.0625rem] leading-relaxed text-muted">{m.texto}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" aria-labelledby="contato-titulo" className="bg-red text-white">
          <div className="mx-auto grid max-w-[1320px] gap-14 px-4 py-24 sm:px-8 md:grid-cols-12 md:gap-8 md:py-32">
            <div className="md:col-span-6 md:pr-8">
              <h2 id="contato-titulo" className="display text-[clamp(2.75rem,6.4vw,5.25rem)]">
                Seu próximo lançamento <span className="accent">começa aqui.</span>
              </h2>
              <p className="mt-7 max-w-[40ch] text-[1.125rem] leading-relaxed text-white/85">
                Conte o que precisa. Respondemos pelo canal que você preferir.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener"
                className="btn mt-9 bg-white text-ink hover:bg-stone"
              >
                <WhatsApp className="size-5 text-whats" />
                {empresa.telefone} no WhatsApp
              </a>
            </div>
            <div className="md:col-span-6">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))] text-white">
        <div className="mx-auto max-w-[1320px] px-4 pt-16 sm:px-8 md:pt-20">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Image
                src="/brand/rb-logo-branca.png"
                alt="RB Sheeny Construções e Engenharia"
                width={1080}
                height={492}
                className="h-auto w-[170px]"
              />
            </div>
            <dl className="grid gap-8 sm:grid-cols-3 md:col-span-8">
              <div>
                <dt className="text-sm text-white/55">Telefone e WhatsApp</dt>
                <dd className="mt-2">
                  <a href={`tel:${empresa.telefoneLink}`} className="text-xl font-medium hover:underline">
                    {empresa.telefone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-white/55">Onde atendemos</dt>
                <dd className="mt-2 text-xl font-medium">{empresa.cidade}</dd>
              </div>
              <div>
                <dt className="text-sm text-white/55">Redes</dt>
                <dd className="mt-2">
                  <a
                    href={empresa.linkedin}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 text-xl font-medium hover:underline"
                  >
                    <LinkedIn className="size-[18px]" />
                    LinkedIn
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <p
            aria-hidden
            className="display mt-20 text-[clamp(3.5rem,15.5vw,13.5rem)] leading-[0.8] text-transparent select-none [-webkit-text-stroke:1px_rgba(255,255,255,0.25)]"
          >
            RB SHEENY
          </p>
          <div className="mt-10 flex flex-col gap-3 border-t border-white/12 pt-6 text-sm text-white/55 sm:flex-row sm:justify-between">
            <span>
              {empresa.razaoSocial} · <span className="whitespace-nowrap">CNPJ {empresa.cnpj}</span>
            </span>
            <a href={credito.link} target="_blank" rel="noopener" className="hover:text-white">
              {credito.texto}
            </a>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </PortfolioProvider>
  );
}
