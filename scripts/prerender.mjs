// Pós-build: injeta o HTML renderizado no index.html e gera sitemap.xml, llms.txt e
// llms-full.txt a partir de src/data.ts, para que tudo fique sempre em sincronia.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const URL_SITE = 'https://atnzpe.github.io/my_portifolio/'
const ssr = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
const { render, dados } = ssr
const { perfil, sobre, produtos, instituicoes, codigoAberto, experiencias, formacao, certificacoes, stack } = dados

const indexPath = resolve('dist/index.html')
const html = readFileSync(indexPath, 'utf8')
if (!html.includes('<div id="root"></div>')) throw new Error('Marcador <div id="root"></div> não encontrado')
writeFileSync(indexPath, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`))

const hoje = new Date().toISOString().slice(0, 10)
writeFileSync(
  resolve('dist/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${URL_SITE}</loc><lastmod>${hoje}</lastmod><priority>1.0</priority></url>
  <url><loc>${URL_SITE}curriculo-gleyson-atanazio.pdf</loc><lastmod>${hoje}</lastmod><priority>0.8</priority></url>
</urlset>
`,
)

const llms = `# ${perfil.nome}

> ${perfil.titulo}. ${perfil.local}. ${perfil.resumo}

Contato: ${perfil.email} · LinkedIn: ${perfil.linkedin} · GitHub: ${perfil.github}
Currículo em PDF: ${URL_SITE}curriculo-gleyson-atanazio.pdf
Versão completa para IAs: ${URL_SITE}llms-full.txt

## Produtos próprios
${produtos.map((p) => `- ${p.nome} (${p.status}): ${p.resumo} Stack: ${p.stack.join(', ')}.`).join('\n')}

## Projetos com instituições
${instituicoes.map((i) => `- ${i.sigla} · ${i.nome}: ${i.trabalho}${i.site ? ` Site: ${i.site}` : ''}`).join('\n')}

## Código aberto
${codigoAberto.map((r) => `- [${r.nome}](${perfil.github}/${r.nome}): ${r.descricao}`).join('\n')}
`
writeFileSync(resolve('dist/llms.txt'), llms)

const llmsFull = `${llms}
## Sobre
${sobre.join('\n\n')}

## Destaques dos produtos
${produtos.map((p) => `### ${p.nome}\n${p.destaques.map((d) => `- ${d}`).join('\n')}`).join('\n\n')}

## Experiência
${experiencias.map((e) => `### ${e.cargo} · ${e.empresa} (${e.periodo})\n${e.itens.map((i) => `- ${i}`).join('\n')}`).join('\n\n')}

## Formação
${formacao.map((f) => `- ${f.curso} · ${f.instituicao} (${f.status})`).join('\n')}

## Certificações
${certificacoes.map((c) => `- ${c.nome} · ${c.emissor}`).join('\n')}

## Stack
${stack.map((g) => `- ${g.grupo}: ${g.itens.join(', ')}`).join('\n')}
`
writeFileSync(resolve('dist/llms-full.txt'), llmsFull)

rmSync(resolve('dist-ssr'), { recursive: true, force: true })
console.log('prerender: index.html, sitemap.xml, llms.txt e llms-full.txt gerados')
