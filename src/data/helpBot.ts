export type HelpArticle = {
  id: string
  question: string
  answer: string
  tags: string[]
  href?: string
  hrefLabel?: string
}

export const helpArticles: HelpArticle[] = [
  {
    id: 'what-is',
    question: 'What is Compress Lab?',
    answer:
      'An open Solana builder lab for ZK Compression (Light) and Token-2022 Confidential Transfers. Recipes + a developer workbench (paste code, upload files, analyze, export). We package existing primitives — we do not invent a new ZK stack. Regional workshops (e.g. Superteam Balkan) are a distribution path, not the product brand.',
    tags: ['intro', 'overview', 'grant'],
    href: '/architecture',
    hrefLabel: 'Architecture',
  },
  {
    id: 'circom',
    question: 'Do I need to write Circom?',
    answer:
      'Usually no. Common compression and confidential-transfer app paths use Light and Token-2022 client helpers. If a tutorial tells you to design circuits for a basic transfer, you are on the wrong path for this lab.',
    tags: ['circom', 'zk', 'beginner'],
    href: '/architecture',
    hrefLabel: 'Truth table',
  },
  {
    id: 'rpc',
    question: 'Why is my compressed account null?',
    answer:
      'Most often the RPC does not index compression. Switch to a compression-aware endpoint (e.g. Helius / Photon path), then re-read. Fail early in code if compression methods are missing.',
    tags: ['rpc', 'compression', 'debug'],
    href: '/recipes/rent-free-profiles',
    hrefLabel: 'Recipe 01',
  },
  {
    id: 'pending',
    question: 'Confidential transfer keeps failing',
    answer:
      'Check account CT state: deposit, then applyPendingBalance before transfer. Many wallets do not display encrypted balances — log state in your own UI.',
    tags: ['confidential', 'pending', 'token-2022'],
    href: '/recipes/confidential-transfer',
    hrefLabel: 'Recipe 03',
  },
  {
    id: 'lab-tools',
    question: 'What can the Lab workbench do?',
    answer:
      'Scratchpad: load templates, edit TS/Rust, run static analysis. Files: upload Anchor/TS sources for project hints. Export: download starters. On-chain execution is the funded milestone — analysis works offline today so reviewers and builders get value immediately.',
    tags: ['lab', 'workbench', 'tools'],
    href: '/lab',
    hrefLabel: 'Open Lab',
  },
  {
    id: 'grant',
    question: 'Is this ready for a grant review?',
    answer:
      'The site is a public-good prototype: real DX tools (analyze/export) plus honest labeling that live devnet signatures are the delivery milestone. Reviewers should judge recipes, workbench, and clear non-goals — not a fake “tx confirmed” animation.',
    tags: ['grant', 'foundation', 'balkan'],
    href: '/grant',
    hrefLabel: 'Grant brief',
  },
  {
    id: 'balkan',
    question: 'What’s the Balkan angle?',
    answer:
      'Workshop packaging for Superteam Balkan, hackathon-friendly timed recipes, and a remittance-corridor teaching demo. Regional activation is the distribution layer; the code is ecosystem-wide open source.',
    tags: ['balkan', 'workshop'],
    href: '/recipes/private-corridor',
    hrefLabel: 'Recipe 05',
  },
  {
    id: 'compliance',
    question: 'Is the freeze recipe compliance software?',
    answer:
      'No. It demonstrates Token Extension technical controls (default frozen, thaw, freeze). Not KYC/AML certification. Keep that disclaimer in any fintech conversation.',
    tags: ['compliance', 'freeze', 'legal'],
    href: '/recipes/permissioned-issuer',
    hrefLabel: 'Recipe 04',
  },
  {
    id: 'stack',
    question: 'What should I install locally?',
    answer:
      'Solana CLI, Anchor, Node/npm, a funded devnet wallet, and a compression-aware RPC URL. Pin Light and @solana/spl-token versions in your README when you leave the sketch stage.',
    tags: ['install', 'anchor', 'setup'],
    href: '/recipes',
    hrefLabel: 'All recipes',
  },
  {
    id: 'export',
    question: 'How do I take code out of the Lab?',
    answer:
      'In Lab → Export, download the active buffer or a starter pack. Files stay in your browser (localStorage for scratchpad) — nothing is uploaded to our servers.',
    tags: ['export', 'privacy', 'local'],
    href: '/lab',
    hrefLabel: 'Lab export',
  },
]

export function matchHelp(query: string): HelpArticle[] {
  const q = query.trim().toLowerCase()
  if (!q) return helpArticles.slice(0, 4)
  const scored = helpArticles.map((a) => {
    const hay = `${a.question} ${a.answer} ${a.tags.join(' ')}`.toLowerCase()
    let score = 0
    for (const part of q.split(/\s+/)) {
      if (part.length < 2) continue
      if (hay.includes(part)) score += 1
      if (a.question.toLowerCase().includes(part)) score += 2
    }
    return { a, score }
  })
  return scored
    .filter((s) => s.score > 0)
    .sort((x, y) => y.score - x.score)
    .map((s) => s.a)
    .slice(0, 5)
}
