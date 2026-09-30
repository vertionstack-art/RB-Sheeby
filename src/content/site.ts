/**
 * Todo o conteúdo do site mora aqui.
 * Para adicionar um projeto, copie um bloco dentro de `projetos` e troque os campos.
 * Para trocar uma foto ilustrativa por uma foto real, coloque o arquivo em
 * `public/projetos/` e troque `foto` por "/projetos/nome-do-arquivo.jpg".
 */

export type TipoProjeto = "stand" | "decorado";

export type Projeto = {
  nome: string;
  tipo: TipoProjeto;
  incorporadora: string;
  /** Escritório de interiores, quando houver. */
  interiores?: string;
  foto: string;
  /** Descrição da foto para leitores de tela. */
  alt: string;
  /** true enquanto a foto for de banco de imagem. */
  ilustrativa: boolean;
};

const unsplash = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80`;

export const empresa = {
  nome: "RB Sheeny",
  razaoSocial: "RB Sheeny Construções Ltda",
  cnpj: "45.858.356/0001-07",
  desde: 1988,
  cidade: "Rio de Janeiro, RJ",
  telefone: "21 96019-4636",
  telefoneLink: "+5521960194636",
  whatsapp: "5521960194636",
  linkedin: "https://www.linkedin.com/company/rb-sheeny-constru%C3%A7%C3%B5es/about/",
  site: "https://rbsheeny.vercel.app",
} as const;

export const mensagemWhatsApp = "Olá! Vim pelo site da RB Sheeny e quero falar sobre um lançamento.";

export const whatsappLink = (texto: string = mensagemWhatsApp) =>
  `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(texto)}`;

export const incorporadoras = ["Cyrela", "MRV", "Gafisa", "Cury", "Patrimar", "Novolar"] as const;

export const escritoriosInteriores = ["Fernanda Marques", "Carol Miluzzi"] as const;

export const projetos: Projeto[] = [
  {
    nome: "Decorado Patrimar Oceana Golf",
    tipo: "decorado",
    incorporadora: "Patrimar",
    interiores: "Fernanda Marques",
    foto: unsplash("photo-1604014237800-1c9102c219da"),
    alt: "Sala integrada com lareira, painel de madeira e mesa de jantar voltada para o jardim",
    ilustrativa: true,
  },
  {
    nome: "Stand Cyrela Oka",
    tipo: "stand",
    incorporadora: "Cyrela",
    foto: unsplash("photo-1600585154340-be6161a56a0c"),
    alt: "Pavilhão de vidro e madeira iluminado ao anoitecer",
    ilustrativa: true,
  },
  {
    nome: "Decorado Cyrela Mudrá",
    tipo: "decorado",
    incorporadora: "Cyrela",
    interiores: "Carol Miluzzi",
    foto: unsplash("photo-1616486338812-3dadae4b4ace"),
    alt: "Sala clara com sofá em L, quadros na parede e pufes de tricô",
    ilustrativa: true,
  },
  {
    nome: "Stand Cyrela Concept",
    tipo: "stand",
    incorporadora: "Cyrela",
    foto: unsplash("photo-1497366216548-37526070297c"),
    alt: "Salão amplo com piso claro, cozinha de exposição e divisórias de vidro",
    ilustrativa: true,
  },
  {
    nome: "Decorado Cyrela Concept",
    tipo: "decorado",
    incorporadora: "Cyrela",
    foto: unsplash("photo-1586023492125-27b2c045efd7"),
    alt: "Canto de leitura com poltrona amarela, luminária de piso dourada e quadro",
    ilustrativa: true,
  },
  {
    nome: "Stand Novolar Recreio",
    tipo: "stand",
    incorporadora: "Novolar",
    foto: unsplash("photo-1600566753190-17f0baa2a6c3"),
    alt: "Fachada de pavilhão com madeira ripada, vidro e paisagismo",
    ilustrativa: true,
  },
  {
    nome: "Decorado Cyrela On Botafogo",
    tipo: "decorado",
    incorporadora: "Cyrela",
    foto: unsplash("photo-1618221195710-dd6b41faaea6"),
    alt: "Sala de estar com sofá cinza, mesa de centro de madeira e janela em fita",
    ilustrativa: true,
  },
];

export const hero = {
  foto: unsplash("photo-1600607687939-ce8a6c25118c"),
  alt: "Sala de apartamento decorado com sofá claro, painel de madeira e cozinha integrada ao fundo",
};

export const servicos = [
  {
    id: "stands",
    titulo: "Stands de venda",
    destaque: "venda",
    texto:
      "Projetamos e construímos os pavilhões temporários onde a incorporadora recebe os compradores durante o lançamento. Prontos no prazo do lançamento, com cara de endereço definitivo.",
    foto: unsplash("photo-1497366811353-6870744d04b2"),
    alt: "Salão com fachada de vidro, mesa de reunião e pé-direito aparente",
  },
  {
    id: "decorados",
    titulo: "Apartamentos decorados",
    destaque: "decorados",
    texto:
      "Executamos as unidades-modelo lado a lado com os arquitetos de interiores contratados pela incorporadora, do projeto no papel ao último detalhe de acabamento.",
    foto: unsplash("photo-1600210492486-724fe5c67fb0"),
    alt: "Sala decorada com sofá de couro, poltrona branca e parede de quadros",
  },
] as const;

export const motivos = [
  {
    titulo: "Só stands e decorados",
    texto: "É o único trabalho que fazemos. Conhecemos o ritmo de um lançamento e o que ele exige de uma obra.",
  },
  {
    titulo: "Prazo curto, acabamento de vitrine",
    texto:
      "O stand precisa estar pronto no dia do lançamento, e o decorado precisa convencer quem entra. Trabalhamos para os dois.",
  },
  {
    titulo: "Materiais e tecnologias modernas",
    texto: "Qualidade, agilidade e inovação guiam cada escolha de material e de método construtivo.",
  },
  {
    titulo: "Lado a lado com a arquitetura",
    texto:
      "Executamos projetos de escritórios de interiores como Fernanda Marques e Carol Miluzzi, respeitando cada detalhe do desenho.",
  },
  {
    titulo: "Atendimento próximo",
    texto: "Projetos complexos pedem atenção aos detalhes e um interlocutor que acompanha a obra de perto.",
  },
] as const;

export const avisoIlustrativas = "Imagens ilustrativas. As fotos oficiais de cada obra entram na versão final.";

export const credito = { texto: "Site desenvolvido por Vertion Stack", link: "https://vertionstack.com" };
