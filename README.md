# Portfólio · Gleyson Atanazio

Site pessoal publicado em **https://atnzpe.github.io/**.

Feito com React, TypeScript, Vite e Tailwind CSS. O deploy é automático: cada push na `main` gera o build e publica no GitHub Pages (`.github/workflows/deploy.yml`).

## O que o site entrega

- **SEO e IA:** HTML pré-renderizado no build (conteúdo legível sem JavaScript), JSON-LD `Person`, Open Graph com imagem, `sitemap.xml`, `robots.txt`, `llms.txt` e `llms-full.txt` gerados a partir de `src/data.ts`.
- **Offline first:** service worker (`public/sw.js`) e manifesto de app instalável.
- **Acessibilidade:** VLibras, link para pular ao conteúdo, foco visível, menu acessível no celular, `prefers-reduced-motion` e tema claro/escuro automático.
- **Currículo:** `public/curriculo-gleyson-atanazio.pdf`, gerado a partir de `curriculo/curriculo.html` (abra no Chrome e salve como PDF para atualizar).

## Atualizar o conteúdo

Todo o texto (projetos, experiências, certificados e stack) fica em [`src/data.ts`](src/data.ts). Para atualizar o portfólio, edite só esse arquivo.

## Rodar na máquina

```bash
bun install
bun run dev
```

A versão anterior (template iPortfolio, 2024) continua no histórico do git.
