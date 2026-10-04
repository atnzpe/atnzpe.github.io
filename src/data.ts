// Todo o conteúdo do portfólio fica aqui. Para atualizar textos, projetos ou
// experiências, edite só este arquivo.

export const perfil = {
  nome: 'Gleyson Atanazio',
  titulo: 'Desenvolvedor Full Stack Júnior · Implantação de Software',
  local: 'Igarassu, PE · presencial, híbrido ou remoto',
  resumo:
    'Mais de 14 anos levando tecnologia para o dia a dia de negócios reais. Hoje aprendo construindo: SaaS para artes marciais, educação e pequenos negócios, do banco de dados à tela.',
  email: 'gleysonasilva@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gleysonatanazio/',
  github: 'https://github.com/atnzpe',
  instagram: 'https://www.instagram.com/3droneassu/',
  curriculo: 'curriculo-gleyson-atanazio.pdf',
  // Coloque a foto em public/ (ex.: 'foto-gleyson.jpg'). Vazio = sem foto.
  foto: 'foto-gleyson.jpg',
}

export const sobre = [
  'Tenho mais de 14 anos em suporte B2B, infraestrutura e implantação de sistemas: suporte ao NCR Colibri, onboarding em food service e, no Grupo Boticário, implantação e sustentação de mais de 4.500 PDVs em franquias, incluindo migrações de dados de sistemas legados.',
  'Sou técnico em Análise e Desenvolvimento de Sistemas e estou no 5º período de Engenharia da Computação. Aprendo construindo: cada projeto deste portfólio começou do zero e me obrigou a estudar o que eu ainda não sabia.',
  'Uso Claude Code e Gemini como parceiros diários de programação, na arquitetura, no código e na documentação. A IA acelera; entender, revisar e testar o resultado continua sendo responsabilidade minha.',
  'Fora do software, sou iniciante no universo maker: estudo impressão 3D pela Bambu Academy e modelagem no Fusion 360, e estou criando o 3DroneAssú, um hub de estudos que une impressão 3D, sistemas e drones.',
]

export type Produto = {
  nome: string
  emoji: string
  resumo: string
  destaques: string[]
  stack: string[]
  status: string
}

export const produtos: Produto[] = [
  {
    nome: 'Dojo Manager',
    emoji: '🥋',
    resumo:
      'SaaS para academias, federações e confederações de artes marciais. Cada instituição só enxerga os próprios dados, com o isolamento feito no próprio banco.',
    destaques: [
      'Hierarquia Confederação → Federação → Academia → Aluno com Row Level Security',
      'Chamada por PIN em tempo real e turmas do dia',
      'Painel de inadimplência com cobrança por WhatsApp',
      'Cursos com controle de vagas e lista de inscritos',
      'Campeonatos com trava de adimplência e motor de regras de placar',
      'Exames de faixa, ranking, certificados e videoteca',
    ],
    stack: ['React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind', 'Vitest', 'Vercel'],
    status: 'Em desenvolvimento · pilotos em preparação',
  },
  {
    nome: 'SoFi OS',
    emoji: '💇🏿',
    resumo:
      'Agendamento de serviços e vendas online para pequenos negócios, com painel de pedidos, estoque e ficha técnica.',
    destaques: [
      'Vários estabelecimentos, cada um com marca, horários e PIX próprios',
      'Serviços com ficha técnica e custo de insumos',
      'Equipe com habilidades e dias de trabalho',
      'Estoque com código de barras',
      'Painel KDS em quadro kanban',
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'Bun'],
    status: 'Em desenvolvimento',
  },
]

export type Instituicao = {
  sigla: string
  nome: string
  trabalho: string
  stack: string[]
  site?: string
}

export const instituicoes: Instituicao[] = [
  {
    sigla: 'CBSA',
    nome: 'Confederação Brasileira de Sambo',
    trabalho:
      'Refatoração do portal com foco em SEO, acessibilidade e mobile first, e painel administrativo de notícias e cursos.',
    stack: ['PHP 8', 'MySQL', 'GitHub Actions'],
    site: 'https://www.sambocbsa.com.br/',
  },
  {
    sigla: 'IBTO',
    nome: 'Instituto Brasileiro de Treinamento Operacional',
    trabalho:
      'Site institucional e plataforma de cursos online (cursos, matrículas, certificados com validação pública e área do filiado), em desenvolvimento.',
    stack: ['React', 'TypeScript', 'Laravel 13', 'MySQL'],
    site: 'https://ib-to.org',
  },
  {
    sigla: 'Takimura Fight',
    nome: 'Equipe de lutas',
    trabalho: 'Landing page integrada ao Dojo Manager.',
    stack: ['React', 'TypeScript', 'Vite'],
    site: 'https://takimurafight.vercel.app/',
  },
  {
    sigla: 'COBRAM',
    nome: 'Confederação Brasileira de Artes Marciais',
    trabalho: 'Desenvolvedor Web da diretoria administrativa: apoio técnico, presença digital e análise de qualidade (QA) do site.',
    stack: ['Desenvolvimento web', 'QA'],
    site: 'https://cobram.org/',
  },
]

export type Repo = { nome: string; descricao: string; stack: string[] }

export const codigoAberto: Repo[] = [
  { nome: 'placar-eletronico', descricao: 'Placar eletrônico adaptativo para Sambo e outras artes marciais.', stack: ['Python'] },
  { nome: 'krav_maga_analyzer', descricao: 'Compara o vídeo do aluno com o do mestre e dá uma pontuação ao movimento.', stack: ['Python'] },
  { nome: 'quiz_sfpc', descricao: 'Simulado para a certificação Scrum Foundation (SFPC).', stack: ['Python', 'Flet'] },
  { nome: 'app-receitas', descricao: 'App de receitas offline-first em arquitetura MVVM.', stack: ['Python', 'Flet', 'SQLite'] },
  { nome: 'app_oficina_mecanica', descricao: 'Ordens de serviço, clientes, veículos e peças para oficinas.', stack: ['Python', 'Flet'] },
  { nome: 'DojoManager-Comercial', descricao: 'Primeira versão do Dojo Manager, sem custo de servidor.', stack: ['Google Apps Script'] },
]

export type Experiencia = {
  cargo: string
  empresa: string
  periodo: string
  itens: string[]
}

export const experiencias: Experiencia[] = [
  {
    cargo: 'Desenvolvedor Full Stack Júnior',
    empresa: 'Projetos próprios e trabalho voluntário',
    periodo: '2024 – atual',
    itens: [
      'Criação do Dojo Manager e do SoFi OS, do modelo de dados à interface',
      'Desenvolvimento para CBSA, IBTO, Takimura Fight e COBRAM',
    ],
  },
  {
    cargo: 'Assistente de Implantação de Software',
    empresa: 'Grupo Boticário · remoto',
    periodo: 'mai/2022 – mai/2026',
    itens: [
      'Sustentação e implantação em escala: mais de 4.500 PDVs e soluções de back-office em franquias',
      'Condução de migrações de dados de sistemas legados, da validação ao desligamento do sistema antigo',
      'Acompanhamento do rollout das esteiras de implantação junto às equipes técnicas e de atendimento',
    ],
  },
  {
    cargo: 'Consultor de Onboarding · Suporte N2',
    empresa: 'ABS Automação · híbrido',
    periodo: 'jan/2021 – mai/2022',
    itens: [
      'Análise de requisitos para implantação de automação comercial em food service',
      'Capacitação de gestores e equipes, formando multiplicadores nos clientes',
    ],
  },
  {
    cargo: 'Suporte N1 · NCR Colibri',
    empresa: 'ABS Automação',
    periodo: 'fev/2012 – mai/2022',
    itens: ['Suporte técnico ao NCR Colibri, plataforma de automação para bares e restaurantes'],
  },
  {
    cargo: 'Montagem e manutenção de computadores',
    empresa: 'Autônomo',
    periodo: '2007 – 2022',
    itens: ['Manutenção de computadores e impressoras, redes domésticas e instalação de Windows e Linux'],
  },
  {
    cargo: 'Logística e almoxarifado',
    empresa: 'Casa Pronta Móveis, Prazeres Celulares, Fujioka, Di Santinni e outras',
    periodo: '2006 – 2012',
    itens: ['Controle de estoque, recebimento e conferência, e capacitação de equipes de venda'],
  },
]

export const formacao = [
  { curso: 'Engenharia da Computação', instituicao: 'Descomplica Faculdade Digital', status: '2024 – 2027 · em andamento' },
  { curso: 'Técnico em Análise e Desenvolvimento de Sistemas', instituicao: 'ETE Jurandir Bezerra Lins', status: '2021 – 2022' },
  { curso: 'Aceleração de Carreira em Design Orientado a Dados', instituicao: 'CESAR School', status: '2025' },
  { curso: 'Qualificação Profissional em Eletricidade Industrial', instituicao: 'IFPE Campus Igarassu', status: '2026 – 2027 · em andamento' },
  { curso: 'Metrologia Dimensional', instituicao: 'IFOPI Igarassu', status: '2026' },
]

export const certificacoes = [
  { nome: 'Scrum Foundation Professional Certificate (SFPC)', emissor: 'CertiProf · 2022' },
  { nome: 'Developing Generative AI Solutions', emissor: 'AWS · 2026' },
  { nome: 'Essentials of Prompt Engineering', emissor: 'AWS · 2026' },
  { nome: 'Developing Machine Learning Solutions', emissor: 'AWS · 2026' },
  { nome: 'Responsible AI Practices', emissor: 'AWS · 2025' },
  { nome: 'Fundamentals of Machine Learning and AI', emissor: 'AWS · 2025' },
  { nome: 'Introduction to Generative AI', emissor: 'AWS · 2025' },
  { nome: 'Exploring AI Use Cases and Applications', emissor: 'AWS · 2025' },
  { nome: 'Introduction to AI', emissor: 'Coursera · 2025' },
  { nome: 'Python para IA: do zero ao primeiro chatbot', emissor: 'Asimov Academy · 2025' },
  { nome: 'Python Developer', emissor: 'Sololearn · 2025' },
  { nome: 'Agilidade: Soluções de Techdesign', emissor: 'CESAR School · 2025' },
]

export const stack: { grupo: string; itens: string[] }[] = [
  { grupo: 'Front-end', itens: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Bun'] },
  { grupo: 'Back-end e dados', itens: ['Supabase', 'PostgreSQL', 'PHP', 'Laravel', 'MySQL', 'Python', 'FastAPI', 'Firebase'] },
  { grupo: 'Apps e automação', itens: ['Flet', 'Google Apps Script'] },
  { grupo: 'IA no desenvolvimento', itens: ['Claude Code', 'Gemini'] },
  { grupo: 'Entrega e qualidade', itens: ['Git', 'GitHub Actions', 'Vercel', 'Vitest', 'Pest', 'pytest', 'WCAG'] },
]
