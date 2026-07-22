export type EditorLang = 'typescript' | 'rust'

export type CodeTemplate = {
  id: string
  label: string
  lang: EditorLang
  recipeId: string
  filename: string
  description: string
  code: string
}

export const templates: CodeTemplate[] = [
  {
    id: 'ts-profile',
    label: 'TS · compressed profile sketch',
    lang: 'typescript',
    recipeId: 'rent-free-profiles',
    filename: 'create-profile.ts',
    description: 'Client outline for a compressed profile leaf.',
    code: `import { Connection, Keypair } from "@solana/web3.js";

/**
 * Compress Lab starter — wire to current Light Protocol SDK.
 * Requires a compression-aware RPC (Helius / Photon indexer path).
 */
const RPC_URL = process.env.RPC_URL;
if (!RPC_URL) throw new Error("Set RPC_URL to a compression-aware endpoint");

const connection = new Connection(RPC_URL, "confirmed");

export type ProfileLeaf = {
  authority: string;
  username: string;
  score: number;
};

export async function createProfile(payer: Keypair, username: string, score: number) {
  const leaf: ProfileLeaf = {
    authority: payer.publicKey.toBase58(),
    username: username.slice(0, 32),
    score,
  };

  // TODO: Light createCompressedAccount (or current equivalent)
  // const { hash, signature } = await light.create(...);
  console.log("prepared leaf", leaf, connection.rpcEndpoint);
  return { leaf, status: "wire-light-sdk" as const };
}
`,
  },
  {
    id: 'ts-airdrop',
    label: 'TS · batch airdrop chunks',
    lang: 'typescript',
    recipeId: 'mass-airdrop',
    filename: 'batch-airdrop.ts',
    description: 'Chunk recipients before compressed mint fan-out.',
    code: `export type Recipient = { pubkey: string; amount: number };

export function chunkRecipients(list: Recipient[], size = 50): Recipient[][] {
  const deduped = [...new Map(list.map((r) => [r.pubkey, r])).values()];
  const batches: Recipient[][] = [];
  for (let i = 0; i < deduped.length; i += size) {
    batches.push(deduped.slice(i, i + size));
  }
  return batches;
}

export async function runBatches(list: Recipient[]) {
  const batches = chunkRecipients(list);
  for (const [i, batch] of batches.entries()) {
    // TODO: compressed-token batch mint/transfer for batch
    console.log(\`batch \${i + 1}/\${batches.length}\`, batch.length);
  }
  return { batches: batches.length, recipients: list.length };
}
`,
  },
  {
    id: 'ts-ct',
    label: 'TS · confidential transfer path',
    lang: 'typescript',
    recipeId: 'confidential-transfer',
    filename: 'confidential-transfer.ts',
    description: 'Reminder path: configure → deposit → apply pending → transfer.',
    code: `/**
 * Token-2022 Confidential Transfer happy path (client outline).
 * Use current @solana/spl-token CT helpers — do not write Circom.
 */
export async function confidentialTransferHappyPath(input: {
  mint: string;
  from: string;
  to: string;
  amount: bigint;
}) {
  // 1) ensure mint has ConfidentialTransfer extension
  // 2) configure token accounts for CT
  // 3) deposit amount
  // 4) applyPendingBalance  ← most common miss
  // 5) transfer with proofs for input.amount
  if (input.amount <= 0n) throw new Error("amount must be > 0");
  return {
    mint: input.mint,
    from: input.from,
    to: input.to,
    amountHidden: true,
    checklist: ["configure", "deposit", "applyPendingBalance", "transfer"],
  };
}
`,
  },
  {
    id: 'rs-allowlist',
    label: 'Rust · allowlist PDA sketch',
    lang: 'rust',
    recipeId: 'permissioned-issuer',
    filename: 'allowlist.rs',
    description: 'Optional transfer-hook style allowlist account.',
    code: `use anchor_lang::prelude::*;

#[account]
pub struct AllowlistEntry {
    pub mint: Pubkey,
    pub wallet: Pubkey,
    pub allowed: bool,
}

pub fn assert_allowed(entry: &AllowlistEntry, wallet: &Pubkey) -> Result<()> {
    require_keys_eq!(entry.wallet, *wallet);
    require!(entry.allowed, LabError::NotAllowlisted);
    Ok(())
}

#[error_code]
pub enum LabError {
    #[msg("Wallet is not allowlisted for this mint")]
    NotAllowlisted,
}
`,
  },
]
