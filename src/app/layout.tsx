import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif } from "next/font/google";
import { empresa, servicos } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
  display: "swap",
});

const titulo = "RB Sheeny | Stands de venda e apartamentos decorados no Rio de Janeiro";
const descricao =
  "Construtora de nicho desde 1988: stands de venda e apartamentos decorados para lançamentos imobiliários no Rio de Janeiro, com prazo de lançamento e acabamento de vitrine.";

export const metadata: Metadata = {
  metadataBase: new URL(empresa.site),
  title: titulo,
  description: descricao,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "RB Sheeny Construções e Engenharia",
    title: titulo,
    description: descricao,
    images: [{ url: "/brand/og.jpg", width: 1200, height: 630, alt: "RB Sheeny Construções e Engenharia" }],
  },
  icons: { icon: "/brand/icon.png", apple: "/brand/apple-icon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
  themeColor: "#16120f",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "RB Sheeny Construções e Engenharia",
  legalName: empresa.razaoSocial,
  taxID: empresa.cnpj,
  foundingDate: String(empresa.desde),
  telephone: empresa.telefoneLink,
  url: empresa.site,
  logo: `${empresa.site}/brand/rb-sheeny-logo.png`,
  areaServed: { "@type": "City", name: "Rio de Janeiro" },
  address: { "@type": "PostalAddress", addressLocality: "Rio de Janeiro", addressRegion: "RJ", addressCountry: "BR" },
  sameAs: [empresa.linkedin],
  makesOffer: servicos.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.titulo } })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${instrument.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
