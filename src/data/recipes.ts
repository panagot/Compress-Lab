export type Skill = 'compression' | 'confidential' | 'permissioning' | 'combined'

export type Recipe = {
  id: string
  number: string
  title: string
  subtitle: string
  skill: Skill
  difficulty: 'intro' | 'intermediate' | 'advanced'
  timeMinutes: number
  stack: string[]
  problem: string
  outcome: string
  balkanAngle: string
  /** Why this path matters for Solana ecosystem / Foundation priorities */
  ecosystemWhy: string
  prerequisites: string[]
  costBefore: string
  costAfter: string
  steps: { title: string; body: string }[]
  gotchas: { title: string; body: string }[]
  anchorSnippet: string
  clientSnippet: string
  verifyChecklist: string[]
  furtherReading: { label: string; href: string }[]
}

export const skillLabel: Record<Skill, string> = {
  compression: 'ZK Compression',
  confidential: 'Confidential Transfers',
  permissioning: 'Token Extensions',
  combined: 'Combined path',
}

export const recipes: Recipe[] = [
  {
    id: 'rent-free-profiles',
    number: '01',
    title: 'Rent-free user profiles',
    subtitle: 'Store game or social profile PDAs with compressed accounts instead of classic rent-exempt state.',
    skill: 'compression',
    difficulty: 'intro',
    timeMinutes: 45,
    stack: ['Anchor', 'Light Protocol', 'TypeScript', 'Helius/Triton RPC'],
    problem:
      'Every classic Solana account pays rent-exempt lamports. A social or game app that creates a profile PDA per user hits a hard onboarding tax — often dollars per user at scale — before product value exists.',
    outcome:
      'A working pattern to create and read a compressed profile (username + score) on devnet, with explorer links and a cost comparison table you can paste into a grant or investor deck.',
    balkanAngle:
      'Hackathon teams shipping social/game MVPs need cheap per-user state. This recipe removes the rent wall so demos can onboard hundreds of wallets without a treasury burn.',
    ecosystemWhy:
      'Solana wins when apps can onboard millions of users without state bloat. ZK Compression is a Foundation-priority primitive; this recipe turns it into a copy-paste profile pattern so games and social apps stop defaulting to classic rent-exempt PDAs.',
    prerequisites: [
      'Solana CLI + Anchor installed',
      'Devnet SOL in a test wallet',
      'RPC that supports compression endpoints (Helius / Photon indexer path)',
      'Familiarity with PDAs (not with Circom)',
    ],
    costBefore: '~0.0014–0.002 SOL per classic profile PDA (size-dependent)',
    costAfter: 'Orders of magnitude lower via compressed account leaf (see Lab console estimate)',
    steps: [
      {
        title: 'Point at a compression-aware RPC',
        body: 'Classic public RPCs often lack compression APIs. Configure connection + compression indexer URL before any create call. Fail early with a clear error if getCompressedAccount is missing.',
      },
      {
        title: 'Define the profile layout',
        body: 'Keep the on-leaf payload small: fixed username bytes + u64 score. Compression rewards tight schemas. Document endianness and padding so TS and Rust agree.',
      },
      {
        title: 'Create via Light SDK path',
        body: 'Use Light’s TypeScript helpers to allocate a compressed account owned by your program. Do not hand-roll Merkle proofs in v1 — call the supported create/update APIs and persist the hash returned to the client.',
      },
      {
        title: 'Read back and render',
        body: 'Fetch by hash/address through compression RPC, deserialize with the same layout, and show username/score in UI. Log signature + Solana Explorer / compression explorer links.',
      },
      {
        title: 'Measure cost',
        body: 'Record pre/post balances for the payer. Put the delta next to a classic SystemProgram::create_account estimate for the same byte size.',
      },
    ],
    gotchas: [
      {
        title: 'Wrong RPC = silent emptiness',
        body: 'If reads return null, you likely queried a non-indexing endpoint. Switch RPC before debugging your program.',
      },
      {
        title: 'Composability boundaries',
        body: 'Not every CPI path treats compressed accounts like classic AccountInfo. Design program interfaces that accept hashes and prove validity through Light’s program, not ad-hoc assumptions.',
      },
      {
        title: 'Leaf size creep',
        body: 'Stuffing large JSON into a leaf defeats the point. Put blobs in Arweave/IPFS; keep the leaf as the index + authority.',
      },
    ],
    anchorSnippet: `// Conceptual program-side owner check — full Light CPI
// wiring lives in the Light Anchor examples. Your job:
// keep the leaf schema tiny and explicit.

#[account]
pub struct ProfileLeaf {
    pub authority: Pubkey, // 32
    pub username: [u8; 32],
    pub score: u64,
    pub bump: u8,
}

// Serialize to bytes with a stable layout before compress create.`,
    clientSnippet: `import { Connection, Keypair } from "@solana/web3.js";
// Use current Light Protocol SDK imports for your version:
// @lightprotocol/stateless.js / compressed-token packages.

const connection = new Connection(process.env.RPC_URL!, "confirmed");

/** Demo helper — replace with Light createCompressedAccount (or equiv). */
export async function createProfileDemo(params: {
  payer: Keypair;
  username: string;
  score: number;
}) {
  const leaf = {
    authority: params.payer.publicKey.toBase58(),
    username: params.username.slice(0, 32),
    score: params.score,
  };

  // 1) call Light create API with serialized leaf
  // 2) return { hash, signature, explorerUrl }
  console.log("profile leaf prepared", leaf);
  return { status: "wire-to-light-sdk", leaf };
}`,
    verifyChecklist: [
      'Compressed account hash appears in indexer',
      'Deserialize round-trip matches username/score',
      'Payer lamport delta recorded in lab log',
      'Recipe README lists exact SDK versions used',
    ],
    furtherReading: [
      { label: 'ZK Compression docs', href: 'https://www.zkcompression.com/' },
      { label: 'Light Protocol GitHub', href: 'https://github.com/Lightprotocol/light-protocol' },
      { label: 'Solana account model', href: 'https://solana.com/docs/core/accounts' },
    ],
  },
  {
    id: 'mass-airdrop',
    number: '02',
    title: 'Mass-distribute without rent per wallet',
    subtitle: 'Batch compressed token mints/transfers so loyalty points or event drops do not create classic ATAs for every recipient.',
    skill: 'compression',
    difficulty: 'intermediate',
    timeMinutes: 60,
    stack: ['Compressed Token', 'TypeScript', 'Batch proofs', 'Devnet'],
    problem:
      'Airdrops and loyalty programs die on ATA rent and signature spam. Distributing to 10k Balkan event attendees with classic SPL tokens means thousands of rent-exempt accounts and ugly UX for first-time wallets.',
    outcome:
      'A batch distribution recipe: prepare recipient list → submit compressed mint/transfer batch → verify a sample of recipients can claim/read balances → publish cost model.',
    balkanAngle:
      'Conference and festival ticketing needs cheap fan-out. Pair with recipe 04 for optional private purchase amounts.',
    ecosystemWhy:
      'Airdrops and loyalty programs are how new users meet Solana — but classic ATA rent kills campaigns at scale. Teaching compressed distribution increases real consumer activity beyond speculative trading.',
    prerequisites: [
      'Recipe 01 completed (RPC + mental model)',
      'Mint authority keypair for a test compressed mint',
      'CSV or JSON list of recipient pubkeys (devnet)',
    ],
    costBefore: 'Classic: ATA rent × N recipients + N transfer fees',
    costAfter: 'Compressed batch: shared proof amortization; cost grows sublinearly with careful batching',
    steps: [
      {
        title: 'Create or reuse a compressed mint',
        body: 'Establish mint metadata (decimals, authority). Keep a single mint for the campaign; do not spawn mints per city.',
      },
      {
        title: 'Chunk recipients',
        body: 'Split 10k addresses into proof-sized batches the SDK supports. Persist batch IDs so failed chunks can retry idempotently.',
      },
      {
        title: 'Submit batch mint/transfer',
        body: 'For each chunk, call the compressed token batch API. Capture signatures and indexer confirmation before the next chunk.',
      },
      {
        title: 'Spot-check recipients',
        body: 'Randomly sample 20 wallets, fetch compressed balances, and assert amounts. Automate this as a script in CI against a fixture list.',
      },
      {
        title: 'Publish the cost card',
        body: 'Export SOL spent / recipients reached. This number is the grant demo headline.',
      },
    ],
    gotchas: [
      {
        title: 'Indexer lag',
        body: 'Immediate reads after write can race. Poll with backoff; do not mark batch failed on first null.',
      },
      {
        title: 'Duplicate recipients',
        body: 'Dedupe pubkeys before proving. Double-minting the same leaf path creates support nightmares.',
      },
    ],
    anchorSnippet: `// Distribution authority is usually client-driven with
// compressed-token instructions. Program-side: gate who
// may call your "campaign claim" if you add a claim PDA.

pub fn assert_campaign_active(now: i64, ends_at: i64) -> Result<()> {
    require!(now <= ends_at, CampaignError::Ended);
    Ok(())
}`,
    clientSnippet: `type Recipient = { pubkey: string; amount: number };

export function chunkRecipients(list: Recipient[], size = 50) {
  const out: Recipient[][] = [];
  for (let i = 0; i < list.length; i += size) {
    out.push(list.slice(i, i + size));
  }
  return out;
}

export async function runAirdropBatches(list: Recipient[]) {
  const batches = chunkRecipients(list);
  const log: { batch: number; count: number; status: string }[] = [];
  for (let i = 0; i < batches.length; i++) {
    // await compressedToken.batchMint({ recipients: batches[i] })
    log.push({ batch: i + 1, count: batches[i].length, status: "queued-for-light" });
  }
  return log;
}`,
    verifyChecklist: [
      'All batches confirmed or explicitly failed with retry keys',
      'Sampled balances match CSV amounts',
      'Cost card: SOL / 1k recipients generated',
    ],
    furtherReading: [
      { label: 'Compressed tokens overview', href: 'https://www.zkcompression.com/' },
      { label: 'Solana Pay (claim UX companion)', href: 'https://docs.solanapay.com/' },
    ],
  },
  {
    id: 'confidential-transfer',
    number: '03',
    title: 'Confidential transfer happy path',
    subtitle: 'Hide transfer amounts with Token-2022 Confidential Transfers while keeping mint and parties visible.',
    skill: 'confidential',
    difficulty: 'intermediate',
    timeMinutes: 55,
    stack: ['Token-2022', 'Confidential Transfer extension', 'spl-token', 'TypeScript'],
    problem:
      'Public balances leak payroll, remittance, and OTC sizes. Teams want privacy without leaving Solana L1 or inventing a bridge.',
    outcome:
      'Configure a Token-2022 mint with confidential transfers, create token accounts, deposit/apply pending balances, and execute a confidential transfer on devnet with a clear explanation of what remains public.',
    balkanAngle:
      'Cross-border stablecoin flows need amount privacy with optional auditor disclosure later — not a licensed CaaS, but an honest demo path.',
    ecosystemWhy:
      'Confidential Transfers are Token Extensions the ecosystem is actively pushing. Adoption stalls on the deposit → apply pending → transfer mental model. This recipe makes that path teachable and checkable.',
    prerequisites: [
      'Understanding of Token-2022 extensions',
      'Latest Solana token CLI / @solana/spl-token with CT support',
      'Devnet wallet funded for fees',
    ],
    costBefore: 'N/A (privacy feature; cost is complexity, not rent)',
    costAfter: 'Extra proof-related compute/fees vs classic transfer — measure in Lab',
    steps: [
      {
        title: 'Create mint with Confidential Transfer extension',
        body: 'Initialize mint with the extension and authority keys. Document auto-approve vs manual approval policy for new accounts.',
      },
      {
        title: 'Configure token accounts',
        body: 'Create ATAs (or extension-enabled accounts) and configure confidential transfer account state. Fund with a public deposit then apply pending balance so encrypted available balance is ready.',
      },
      {
        title: 'Generate proofs for transfer',
        body: 'Use the supported client utilities to produce equality/range proofs for the amount. You do not write Circom — you call the Token-2022 CT client helpers.',
      },
      {
        title: 'Submit confidential transfer',
        body: 'Send instruction, confirm, and show explorers: amount should not appear as a clear u64 in the same way as SPL Transfer.',
      },
      {
        title: 'Explain disclosure story',
        body: 'Document how an auditor with elgamal decryption authority could selectively disclose — for grant honesty, mark this as design narrative if keys are demo-only.',
      },
    ],
    gotchas: [
      {
        title: 'Pending vs available',
        body: 'Transfers fail if you skip apply_pending_balance. Always show account CT state in the lab UI.',
      },
      {
        title: 'Wallet support gaps',
        body: 'Many wallets do not display confidential balances. Your lab must render encrypted state explicitly.',
      },
      {
        title: 'Mainnet readiness',
        body: 'Track current cluster support and program versions in README; never assume CT APIs are identical across versions.',
      },
    ],
    anchorSnippet: `// Prefer official Token-2022 instructions over custom ZK.
// Programs that CPI into confidential transfer must match
// the extension account layout expected by the Token program.

// Pseudo-check before CPI:
pub fn assert_ct_configured(mint_extensions_ok: bool) -> Result<()> {
    require!(mint_extensions_ok, ExtError::MissingConfidentialTransfer);
    Ok(())
}`,
    clientSnippet: `/** Happy-path outline — bind to current @solana/spl-token CT APIs. */
export async function confidentialTransferDemo(input: {
  mint: string;
  from: string;
  to: string;
  amount: bigint;
}) {
  // 1) configureAccount (if needed)
  // 2) deposit + applyPendingBalance
  // 3) transfer with proofs for input.amount
  // 4) return signature
  return {
    mint: input.mint,
    from: input.from,
    to: input.to,
    amountHidden: true,
    note: "Wire to Token-2022 confidential transfer client",
  };
}`,
    verifyChecklist: [
      'Mint shows Confidential Transfer extension',
      'Clear amount not visible as classic transfer UI amount',
      'Apply pending documented in operator notes',
      'Failure path tested (insufficient encrypted balance)',
    ],
    furtherReading: [
      {
        label: 'Confidential Transfer integration guide',
        href: 'https://solana.com/docs/tokens/extensions/confidential-transfer/integration-guide',
      },
      { label: 'Token-2022 extensions', href: 'https://solana.com/docs/tokens/extensions' },
    ],
  },
  {
    id: 'permissioned-issuer',
    number: '04',
    title: 'Permissioned issuer rail',
    subtitle: 'Freeze authority + default account state (and optional transfer hook) for a Balkan fintech demo — not licensed compliance.',
    skill: 'permissioning',
    difficulty: 'intermediate',
    timeMinutes: 50,
    stack: ['Token-2022', 'Default Account State', 'Freeze', 'Transfer Hook (optional)'],
    problem:
      'Institutions will not pilot rails where any wallet can receive and move assets without policy hooks. Full KYC SaaS is out of scope; demonstrating Token Extensions guardrails is not.',
    outcome:
      'A mint configured so new accounts start frozen or require allowlist-style unlock; operator can freeze/thaw; export a simple CSV “policy event log” from the lab.',
    balkanAngle:
      'Useful when talking to fintechs about tokenized deposits or loyalty credits under policy — as a technical pilot, with legal clearly out of band.',
    ecosystemWhy:
      'Institutions will not pilot Solana rails without on-chain control points. Token Extensions (freeze, default account state, hooks) are the right primitives; education must show them without overclaiming compliance products.',
    prerequisites: [
      'Token-2022 minting experience',
      'Clear disclaimer: demo ≠ regulated product',
    ],
    costBefore: 'Policy enforced off-chain only (weak)',
    costAfter: 'On-chain freeze/default state enforces baseline; hooks optional for richer rules',
    steps: [
      {
        title: 'Create mint with freeze authority',
        body: 'Retain freeze authority on a hardware or multisig narrative key (demo: single keypair).',
      },
      {
        title: 'Set default account state',
        body: 'Initialize DefaultAccountState to Frozen so fresh ATAs cannot transfer until thawed — poor-man allowlist onboarding.',
      },
      {
        title: 'Operator thaw path',
        body: 'Script: verify wallet against an off-chain allowlist CSV → thaw account → append policy log row.',
      },
      {
        title: 'Optional transfer hook',
        body: 'For advanced demos, attach a transfer hook program that checks a PDA allowlist. Keep v1 optional so the grant demo still works if hook tooling shifts.',
      },
      {
        title: 'Incident freeze',
        body: 'Show freeze on a compromised demo account and confirm transfers revert.',
      },
    ],
    gotchas: [
      {
        title: 'Lost freeze authority',
        body: 'If you renounce freeze, you cannot recover. Document key custody in OPERATOR.md.',
      },
      {
        title: 'Overclaiming compliance',
        body: 'Never market this as AML certification. Use “technical control demo” language in the grant.',
      },
    ],
    anchorSnippet: `// Optional transfer-hook style allowlist PDA
#[account]
pub struct AllowlistEntry {
    pub mint: Pubkey,
    pub wallet: Pubkey,
    pub allowed: bool,
}`,
    clientSnippet: `export type PolicyEvent = {
  at: string;
  action: "thaw" | "freeze";
  wallet: string;
  reason: string;
};

export function appendPolicyLog(
  log: PolicyEvent[],
  event: PolicyEvent,
) {
  return [...log, event];
}

// thaw: createATA (frozen default) → allowlist check → thawAccount`,
    verifyChecklist: [
      'New ATA cannot transfer while frozen',
      'Thaw allows transfer',
      'Freeze stops further transfers',
      'Disclaimer visible in UI footer',
    ],
    furtherReading: [
      { label: 'Default Account State', href: 'https://solana.com/docs/tokens/extensions/default-account-state' },
      { label: 'Transfer Hook', href: 'https://solana.com/docs/tokens/extensions/transfer-hook' },
    ],
  },
  {
    id: 'private-corridor',
    number: '05',
    title: 'Private remittance corridor (demo)',
    subtitle: 'Compose compression + confidential amount narrative for a SE Europe → corridor mock — UX only, no KYC vendor.',
    skill: 'combined',
    difficulty: 'advanced',
    timeMinutes: 75,
    stack: ['Token-2022 CT', 'Compressed accounts', 'Solana Pay QR', 'React'],
    problem:
      'Consumer demand on Solana is skewed to speculation. Regional remittance stories need a credible, privacy-aware demo that still settles on Solana.',
    outcome:
      'A corridor UI: sender, recipient, stablecoin mint selector, confidential amount toggle, receipt with tx signature, and a cost line if the receipt PDA is compressed.',
    balkanAngle:
      'Diaspora and cross-border SME payment narratives make a strong workshop demo — with a facilitator script in EN and optional local-language one-pager.',
    ecosystemWhy:
      'Solana needs diversified demand beyond memecoins. A remittance-shaped teaching app shows compression + confidential amounts composing into a consumer story reviewers and builders can demo in one sitting.',
    prerequisites: [
      'Recipes 01 and 03 complete',
      'Design disclaimer reviewed',
    ],
    costBefore: 'Public SPL transfer + classic receipt account',
    costAfter: 'Confidential amount + optional compressed receipt leaf',
    steps: [
      {
        title: 'Map the corridor UX',
        body: 'Three screens only: Compose → Confirm → Receipt. No portfolio chrome. Amount field warns when confidential mode is on (wallet display limits).',
      },
      {
        title: 'Send path',
        body: 'If confidential: CT transfer. Else: classic Token-2022 transfer. Always record a receipt object (signature, timestamp, corridor id).',
      },
      {
        title: 'Compress the receipt (optional)',
        body: 'Store receipt metadata in a compressed leaf keyed by signature to show combined stack value.',
      },
      {
        title: 'Workshop script',
        body: '15-minute facilitator guide: problem → live lab → corridor demo → Q&A on what is not production.',
      },
    ],
    gotchas: [
      {
        title: 'Scope creep to banking',
        body: 'No on-ramps, no KYC, no custody. QR encodes a Solana Pay-style request only.',
      },
    ],
    anchorSnippet: `#[account]
pub struct CorridorReceipt {
    pub signature_ref: [u8; 64],
    pub corridor_id: [u8; 16],
    pub ts: i64,
    pub confidential: bool,
}`,
    clientSnippet: `export async function composeCorridorTransfer(input: {
  amount: bigint;
  confidential: boolean;
  to: string;
}) {
  if (input.confidential) {
    return confidentialTransferDemo({
      mint: "DEMO_STABLE_MINT",
      from: "SENDER",
      to: input.to,
      amount: input.amount,
    });
  }
  return { mode: "clear-transfer", to: input.to, amount: input.amount.toString() };
}`,
    verifyChecklist: [
      'Both clear and confidential paths produce signatures in simulation',
      'Receipt renders corridor id',
      'Workshop outline published in repo docs after Milestone 2',
    ],
    furtherReading: [
      { label: 'Solana Pay', href: 'https://docs.solanapay.com/' },
      {
        label: 'Token-2022 extensions',
        href: 'https://solana.com/docs/tokens/extensions',
      },
    ],
  },
]

export function getRecipe(id: string) {
  return recipes.find((r) => r.id === id)
}
