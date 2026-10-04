import type { ReactNode } from 'react'
import {
  certificacoes,
  codigoAberto,
  experiencias,
  formacao,
  instituicoes,
  perfil,
  produtos,
  sobre,
  stack,
} from './data'

const navegacao = [
  { id: 'sobre', rotulo: 'Sobre' },
  { id: 'produtos', rotulo: 'Produtos' },
  { id: 'instituicoes', rotulo: 'Instituições' },
  { id: 'experiencia', rotulo: 'Experiência' },
  { id: 'contato', rotulo: 'Contato' },
]

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-xs text-[var(--muted)]">
      {children}
    </span>
  )
}

function Secao({ id, titulo, children }: { id: string; titulo: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="scroll-mt-20 py-14">
      <h2 id={`${id}-titulo`} className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
        {titulo}
      </h2>
      {children}
    </section>
  )
}

function Cartao({ children }: { children: ReactNode }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
      {children}
    </article>
  )
}

function LinkExterno({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-[var(--accent)] underline-offset-4 hover:underline"
    >
      {children}
    </a>
  )
}

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--surface)] focus:px-4 focus:py-2"
      >
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur">
        <nav aria-label="Principal" className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <a href="#topo" className="font-bold">
            Gleyson<span className="text-[var(--accent)]">.</span>
          </a>
          <ul className="hidden gap-6 text-sm text-[var(--muted)] sm:flex">
            {navegacao.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-[var(--text)]">
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="conteudo" className="mx-auto max-w-5xl px-4">
        <section id="topo" className="py-16 sm:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">{perfil.local}</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">{perfil.nome}</h1>
          <p className="mt-3 text-xl text-[var(--muted)] sm:text-2xl">{perfil.titulo}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">{perfil.resumo}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={perfil.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[var(--accent)] px-5 py-2.5 font-semibold text-white hover:opacity-90 dark:text-slate-950"
            >
              LinkedIn
            </a>
            <a
              href={perfil.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 font-semibold hover:border-[var(--accent)]"
            >
              GitHub
            </a>
            <a
              href={`mailto:${perfil.email}`}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 font-semibold hover:border-[var(--accent)]"
            >
              E-mail
            </a>
          </div>
        </section>

        <Secao id="sobre" titulo="Sobre">
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-[var(--muted)]">
            {sobre.map((paragrafo) => (
              <p key={paragrafo}>{paragrafo}</p>
            ))}
          </div>
        </Secao>

        <Secao id="produtos" titulo="Produtos próprios">
          <div className="grid gap-6 md:grid-cols-2">
            {produtos.map((produto) => (
              <Cartao key={produto.nome}>
                <h3 className="text-xl font-bold">
                  <span aria-hidden="true">{produto.emoji} </span>
                  {produto.nome}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--accent)]">{produto.status}</p>
                <p className="mt-4 leading-relaxed text-[var(--muted)]">{produto.resumo}</p>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                  {produto.destaques.map((destaque) => (
                    <li key={destaque}>{destaque}</li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {produto.stack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </Cartao>
            ))}
          </div>
        </Secao>

        <Secao id="instituicoes" titulo="Projetos com instituições">
          <div className="grid gap-6 sm:grid-cols-2">
            {instituicoes.map((inst) => (
              <Cartao key={inst.sigla}>
                <h3 className="text-lg font-bold">{inst.sigla}</h3>
                {inst.nome !== inst.sigla && <p className="text-sm text-[var(--muted)]">{inst.nome}</p>}
                <p className="mt-3 leading-relaxed">{inst.trabalho}</p>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
                  <div className="flex flex-wrap gap-2">
                    {inst.stack.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                  {inst.site && <LinkExterno href={inst.site}>Ver site ↗</LinkExterno>}
                </div>
              </Cartao>
            ))}
          </div>
        </Secao>

        <Secao id="codigo-aberto" titulo="Código aberto">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {codigoAberto.map((repo) => (
              <li key={repo.nome}>
                <a
                  href={`${perfil.github}/${repo.nome}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]"
                >
                  <span className="font-mono text-sm font-semibold text-[var(--accent)]">{repo.nome}</span>
                  <span className="mt-2 text-sm leading-relaxed">{repo.descricao}</span>
                  <span className="mt-auto flex flex-wrap gap-2 pt-4">
                    {repo.stack.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Secao>

        <Secao id="experiencia" titulo="Experiência">
          <ol className="relative space-y-8 border-l border-[var(--border)] pl-6">
            {experiencias.map((exp) => (
              <li key={exp.cargo + exp.periodo} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]"
                />
                <p className="text-sm text-[var(--muted)]">{exp.periodo}</p>
                <h3 className="text-lg font-bold">{exp.cargo}</h3>
                <p className="text-[var(--muted)]">{exp.empresa}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                  {exp.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Secao>

        <Secao id="formacao" titulo="Formação e certificações">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <ul className="space-y-4">
              {formacao.map((f) => (
                <li key={f.curso}>
                  <p className="font-semibold">{f.curso}</p>
                  <p className="text-sm text-[var(--muted)]">
                    {f.instituicao} · {f.status}
                  </p>
                </li>
              ))}
            </ul>
            <ul className="grid gap-3 sm:grid-cols-2">
              {certificacoes.map((c) => (
                <li key={c.nome} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                  <p className="text-sm font-semibold">{c.nome}</p>
                  <p className="text-xs text-[var(--muted)]">{c.emissor}</p>
                </li>
              ))}
            </ul>
          </div>
        </Secao>

        <Secao id="stack" titulo="Stack">
          <dl className="grid gap-6 sm:grid-cols-2">
            {stack.map((g) => (
              <div key={g.grupo}>
                <dt className="mb-2 font-semibold">{g.grupo}</dt>
                <dd className="flex flex-wrap gap-2">
                  {g.itens.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Secao>

        <Secao id="contato" titulo="Vamos conversar?">
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Aberto a vagas de desenvolvimento e implantação de software, e a projetos para academias, federações,
            instituições de ensino e pequenos negócios.
          </p>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-lg">
            <a href={`mailto:${perfil.email}`} className="font-medium text-[var(--accent)] hover:underline">
              {perfil.email}
            </a>
            <LinkExterno href={perfil.linkedin}>LinkedIn</LinkExterno>
            <LinkExterno href={perfil.github}>GitHub</LinkExterno>
            <LinkExterno href={perfil.instagram}>Instagram 3DroneAssú</LinkExterno>
          </p>
        </Secao>
      </main>

      <footer className="border-t border-[var(--border)] py-8 text-center text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} {perfil.nome} · Feito com React, TypeScript e Tailwind
      </footer>
    </>
  )
}
