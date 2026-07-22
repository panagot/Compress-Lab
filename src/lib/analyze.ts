export type FindingSeverity = 'error' | 'warn' | 'info' | 'ok'

export type Finding = {
  severity: FindingSeverity
  title: string
  detail: string
  recipeId?: string
}

export type AnalysisResult = {
  score: number
  summary: string
  findings: Finding[]
  suggestedRecipes: string[]
}

const RECIPE_HINTS: { id: string; needles: RegExp[] }[] = [
  {
    id: 'rent-free-profiles',
    needles: [/compress/i, /lightprotocol/i, /compressedaccount/i, /profile/i],
  },
  {
    id: 'mass-airdrop',
    needles: [/airdrop/i, /batchmint/i, /chunkrecipients/i, /loyalty/i],
  },
  {
    id: 'confidential-transfer',
    needles: [/confidential/i, /applypending/i, /elgamal/i, /token-2022/i],
  },
  {
    id: 'permissioned-issuer',
    needles: [/freeze/i, /allowlist/i, /defaultaccountstate/i, /transfer.?hook/i],
  },
  {
    id: 'private-corridor',
    needles: [/remittance/i, /corridor/i, /solana.?pay/i],
  },
]

export function analyzeCode(code: string, filename = 'scratch.ts'): AnalysisResult {
  const findings: Finding[] = []
  const text = code ?? ''
  const lower = text.toLowerCase()
  const isRust = filename.endsWith('.rs') || /#\[account\]|#\[program\]/.test(text)
  const isTs = filename.endsWith('.ts') || filename.endsWith('.tsx') || /import\s+/.test(text)

  if (!text.trim()) {
    return {
      score: 0,
      summary: 'Empty buffer — paste code or load a template.',
      findings: [
        {
          severity: 'info',
          title: 'Nothing to analyze',
          detail: 'Load a Compress Lab template or paste your client/program code.',
        },
      ],
      suggestedRecipes: ['rent-free-profiles'],
    }
  }

  if (/circom|groth16|write\s+a\s+circuit/i.test(text)) {
    findings.push({
      severity: 'warn',
      title: 'Circom likely unnecessary',
      detail:
        'Common compression and confidential-transfer paths use existing SDKs. You usually do not author circuits for app features.',
      recipeId: 'confidential-transfer',
    })
  }

  if (/connection\([^)]*mainnet/i.test(text) && !/compress|light|photon|helius/i.test(text)) {
    findings.push({
      severity: 'warn',
      title: 'RPC may lack compression APIs',
      detail:
        'Classic endpoints often cannot read compressed accounts. Prefer a compression-aware RPC and fail loud if indexer methods are missing.',
      recipeId: 'rent-free-profiles',
    })
  }

  if (/confidential|token-2022|token2022/i.test(text)) {
    if (!/applypendingbalance|apply_pending_balance/i.test(text)) {
      findings.push({
        severity: 'error',
        title: 'Missing applyPendingBalance mention',
        detail:
          'Confidential transfer flows commonly fail when pending balance is never applied. Add the step explicitly in your client path.',
        recipeId: 'confidential-transfer',
      })
    } else {
      findings.push({
        severity: 'ok',
        title: 'Pending balance step present',
        detail: 'Good — CT account state is easy to get wrong.',
        recipeId: 'confidential-transfer',
      })
    }
  }

  if (/compress|lightprotocol|zk.?compression/i.test(text)) {
    findings.push({
      severity: 'info',
      title: 'Compression path detected',
      detail: 'Keep leaf schemas tiny; put blobs off-chain. Persist returned hashes for reads.',
      recipeId: 'rent-free-profiles',
    })
  }

  if (/createaccount|systemprogram/i.test(text) && /profile|user.?pda|ata/i.test(text) && !/compress/i.test(text)) {
    findings.push({
      severity: 'warn',
      title: 'Classic account create for scale-sensitive path',
      detail:
        'If this is per-user state at volume, compare rent vs compressed accounts before mainnet.',
      recipeId: 'rent-free-profiles',
    })
  }

  if (/freeze|thaw|defaultaccountstate/i.test(text)) {
    findings.push({
      severity: 'info',
      title: 'Permissioning controls detected',
      detail:
        'Document that freeze/default-state demos are technical controls — not licensed compliance.',
      recipeId: 'permissioned-issuer',
    })
  }

  if (/aml|kyc\s*as\s*a\s*service|certified\s*compliant/i.test(text)) {
    findings.push({
      severity: 'error',
      title: 'Overclaiming compliance',
      detail: 'Remove regulated-product claims from demos. Use “technical control” language.',
      recipeId: 'permissioned-issuer',
    })
  }

  if (isTs && !/process\.env|RPC_URL|rpc/i.test(text) && /connection|light|spl-token/i.test(text)) {
    findings.push({
      severity: 'warn',
      title: 'Hard-coded or missing RPC config',
      detail: 'Expose RPC_URL via env so workshop machines can swap endpoints.',
    })
  }

  if (isRust && /#\[account\]/.test(text) && !/pubkey/i.test(lower)) {
    findings.push({
      severity: 'info',
      title: 'Account struct sketch',
      detail: 'Ensure TS and Rust leaf layouts match byte-for-byte before compress create.',
      recipeId: 'rent-free-profiles',
    })
  }

  if (/todo|wire-light|wire to current/i.test(text)) {
    findings.push({
      severity: 'info',
      title: 'Starter TODOs still open',
      detail:
        'Expected in Lab templates. Milestone 1 replaces TODOs with version-pinned SDK calls and CI.',
    })
  }

  if (findings.length === 0) {
    findings.push({
      severity: 'ok',
      title: 'No critical pattern flags',
      detail:
        'Static checks are heuristics — still run on devnet. Open a matching recipe checklist next.',
    })
  }

  const suggested = new Set<string>()
  for (const hint of RECIPE_HINTS) {
    if (hint.needles.some((n) => n.test(text))) suggested.add(hint.id)
  }
  for (const f of findings) if (f.recipeId) suggested.add(f.recipeId)

  const errors = findings.filter((f) => f.severity === 'error').length
  const warns = findings.filter((f) => f.severity === 'warn').length
  const oks = findings.filter((f) => f.severity === 'ok').length
  let score = 72 - errors * 18 - warns * 8 + Math.min(oks * 4, 12)
  score = Math.max(8, Math.min(96, score))

  const summary =
    errors > 0
      ? `${errors} blocking issue(s) — fix before calling this grant-ready.`
      : warns > 0
        ? `${warns} warning(s) — address before workshop demo.`
        : 'Looks structurally sane for a starter — verify on devnet next.'

  return {
    score,
    summary,
    findings,
    suggestedRecipes: [...suggested].slice(0, 4),
  }
}

export type UploadedFile = {
  name: string
  size: number
  text: string
}

export function analyzeProject(files: UploadedFile[]): AnalysisResult {
  if (!files.length) {
    return {
      score: 0,
      summary: 'Upload Anchor/TS project files to inspect.',
      findings: [
        {
          severity: 'info',
          title: 'No files',
          detail: 'Drop Anchor.toml, package.json, or .rs/.ts sources (text, ≤200KB each).',
        },
      ],
      suggestedRecipes: [],
    }
  }

  const names = files.map((f) => f.name.toLowerCase())
  const blob = files.map((f) => `// FILE: ${f.name}\n${f.text}`).join('\n\n')
  const base = analyzeCode(blob, names.find((n) => n.endsWith('.ts') || n.endsWith('.rs')) ?? 'project')
  const findings = [...base.findings]

  if (names.some((n) => n.endsWith('anchor.toml'))) {
    findings.unshift({
      severity: 'ok',
      title: 'Anchor project detected',
      detail: 'Good base. Pair program leaf layouts with a TypeScript client recipe.',
      recipeId: 'rent-free-profiles',
    })
  }
  if (names.some((n) => n === 'package.json')) {
    const pkg = files.find((f) => f.name.toLowerCase() === 'package.json')?.text ?? ''
    if (!/lightprotocol|@lightprotocol|spl-token/i.test(pkg)) {
      findings.push({
        severity: 'warn',
        title: 'No Light / spl-token dependency spotted',
        detail: 'Add current SDK packages when you wire live recipes (pin versions in README).',
      })
    } else {
      findings.push({
        severity: 'ok',
        title: 'Relevant npm dependencies present',
        detail: 'Confirm versions against Compress Lab README pins after grant wiring.',
      })
    }
  }
  if (files.length >= 3) {
    findings.push({
      severity: 'info',
      title: `${files.length} files in workspace`,
      detail: 'Export a starter pack from the Lab to keep workshop machines consistent.',
    })
  }

  const errors = findings.filter((f) => f.severity === 'error').length
  const warns = findings.filter((f) => f.severity === 'warn').length
  let score = base.score - errors * 2 - warns
  score = Math.max(8, Math.min(96, score))

  return {
    score,
    summary: `Project scan · ${files.length} file(s) · ${base.summary}`,
    findings,
    suggestedRecipes: base.suggestedRecipes,
  }
}
