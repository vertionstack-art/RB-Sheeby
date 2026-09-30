# RB Sheeny — site

Site da RB Sheeny Construções e Engenharia: stands de venda e apartamentos decorados no Rio de Janeiro.

Feito com Next.js, TypeScript e Tailwind CSS. Publicado na Vercel a partir deste repositório: cada envio para a branch `main` atualiza o site sozinho.

## Onde mexer

Quase tudo o que muda no dia a dia fica em **um arquivo só**: `src/content/site.ts`.

| Quero mudar… | Onde |
| --- | --- |
| Telefone, WhatsApp, LinkedIn, CNPJ | `empresa` |
| Incluir ou tirar um projeto do portfólio | `projetos` (copie um bloco e troque os campos) |
| Incorporadoras da faixa que rola | `incorporadoras` |
| Textos dos serviços e das perguntas | `servicos` e `motivos` |
| Foto do topo | `hero` |

### Trocar uma foto ilustrativa por uma foto real

1. Coloque a foto em `public/projetos/` (por exemplo `public/projetos/stand-oka.jpg`).
2. No projeto, troque `foto` por `"/projetos/stand-oka.jpg"` e `ilustrativa` por `false`.

O selo "Imagem ilustrativa" some sozinho quando `ilustrativa` é `false`.

## Rodar no computador

```bash
npm install
npm run dev
```

Abre em http://localhost:3900.

## Pendências

- Fotos reais das obras (hoje todas são ilustrativas, com aviso no site).
- O formulário abre o WhatsApp com a mensagem pronta; ainda não envia e-mail.
- Endereço de domínio próprio (hoje usa o endereço da Vercel).
