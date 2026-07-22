# Compress Lab

**Developer tooling for Solana ZK Compression & privacy**

[![Live](https://img.shields.io/badge/live-compress--lab.vercel.app-0B6E6E?style=flat-square)](https://compress-lab.vercel.app/)
[![License: MIT](https://img.shields.io/badge/license-MIT-1B2A33?style=flat-square)](./LICENSE)
[![Stack](https://img.shields.io/badge/stack-React%20·%20Vite%20·%20TypeScript-2F4A55?style=flat-square)](#quick-start)

Compress Lab helps Anchor and TypeScript builders ship **Light Protocol ZK Compression** and **Token-2022 Confidential Transfers** in hours, not days.

It provides opinionated recipes, a local developer workbench, and a public roadmap to a CI-honest, CLI-backed toolkit — without inventing a new proving stack or replacing official Light / Solana documentation.

| | |
|---|---|
| **Live site** | [compress-lab.vercel.app](https://compress-lab.vercel.app/) |
| **Audience** | Anchor · TypeScript · Solana app developers |
| **Primitives** | ZK Compression · Confidential Transfers · Token Extensions |
| **Status** | Local DX shipped · on-chain recipes & CLI on the roadmap |
| **License** | [MIT](./LICENSE) |

---

## Why this exists

Compression and Confidential Transfers are production-capable on Solana. Adoption still stalls on day-one DX:

| Gap | What goes wrong |
|-----|-----------------|
| **Indexer RPC** | Classic endpoints return empty compressed reads |
| **CT mental model** | Transfers fail until deposit → apply pending → transfer is explicit |
| **Scattered examples** | Happy paths are spread across docs and sample repos |

Compress Lab is the thin tooling layer between reference docs and a working weekend path: timed checklists, failure modes, cost teaching cards, and an in-browser workbench for draft → analyze → export.

Official Light and Solana docs remain **canonical**. This project packages the happy path and keeps version pins honest as upstream APIs move.

---

## What’s included

### Available today

| Surface | Description |
|---------|-------------|
| **Recipe book** | Five timed operator paths with prerequisites, steps, gotchas, verification checklists, and structural code sketches |
| **Lab workbench** | Templates, scratchpad, project file upload, static analysis heuristics, and starter export — browser-local, no server upload of source |
| **Operator desk** | In-product Q&A for common failure modes (RPC, pending balance, Circom myths, scope) |
| **Architecture & roadmap** | Stack diagram, responsibility table, and Milestone 1 / Milestone 2 exit criteria |

### Recipe index

| # | Recipe | Focus | Guide time |
|---|--------|-------|------------|
| 01 | [Rent-free user profiles](https://compress-lab.vercel.app/recipes/rent-free-profiles) | ZK Compression | ~45 min |
| 02 | [Mass-distribute without rent per wallet](https://compress-lab.vercel.app/recipes/mass-airdrop) | Compressed tokens / batching | ~60 min |
| 03 | [Confidential transfer happy path](https://compress-lab.vercel.app/recipes/confidential-transfer) | Token-2022 CT | ~55 min |
| 04 | [Permissioned issuer rail](https://compress-lab.vercel.app/recipes/permissioned-issuer) | Freeze / default account state | ~50 min |
| 05 | [Private remittance corridor (demo)](https://compress-lab.vercel.app/recipes/private-corridor) | Combined teaching path | ~75 min |

> **Honesty label.** Recipe code blocks are structural sketches until live paths ship with pinned SDKs, real devnet signatures, and measured cost cards. Use the Lab workbench to draft and analyze locally today.

---

## Roadmap

### Milestone 1 — Prove the path

- Continuous integration and pinned Light / `@solana/spl-token` / Anchor versions in the README  
- At least two recipes with real **devnet** signatures and explorer links  
- Workbench paired with runnable scripts for those paths  
- Failure cookbook v1 (RPC, pending balance, freeze, indexer lag)  
- Measured cost cards from Compress Lab’s own runs  

### Milestone 2 — Complete accessible toolkit

- All five core recipes live on devnet (or explicitly gated)  
- Downloadable **CLI** aligned with Lab happy paths  
- Written facilitator pack, one-pagers, and a documented start-here path  
- Adoption signal: external builders succeeding via recipes  
- Ongoing maintenance as Light and Token-2022 clients evolve  

### Out of scope

Restaking markets, fixed-rate credit products, ZK bridges, new proving systems, and licensed compliance / KYC SaaS. Compress Lab stays focused on developer tooling for compression and privacy.

---

## Quick start

**Requirements:** Node.js 20+ and npm.

```bash
git clone https://github.com/panagot/Compress-Lab.git
cd Compress-Lab
npm install
npm run dev
```

Open the URL printed by Vite (default `http://localhost:5173`).

| Script | Purpose |
|--------|---------|
| `npm run dev` | Local development server |
| `npm run build` | Typecheck + production build (`dist/`) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint with Oxlint |

### Deploy

Vite single-page app. On [Vercel](https://vercel.com/), use the default Vite preset. [`vercel.json`](./vercel.json) rewrites all routes to `index.html` for client-side routing.

---

## Repository layout

```
src/
  pages/          Home, Recipes, Lab, Roadmap, Architecture
  components/     Shell, Lab workbench, operator desk, UI primitives
  data/           Recipes, code templates, help articles
  lib/            Static analysis heuristics
  styles/         Design system (custom CSS)
```

Internal product and design notes: [`PRODUCT.md`](./PRODUCT.md), [`DESIGN.md`](./DESIGN.md).

---

## Principles

1. **Recipes over rocket science** — teach Light and Token-2022; do not market a new ZK stack  
2. **Honest labeling** — sketches vs live chain; teaching cost cards vs measured runs  
3. **Local-first Lab** — source stays in the browser until the builder exports  
4. **Thin layer** — complements official docs; pins versions when APIs move  
5. **Builder-accessible** — aimed at everyday Anchor / TypeScript developers, not circuit specialists  

---

## Contributing

Issues and pull requests that improve recipe clarity, workbench heuristics, documentation, or accessibility are welcome.

Please keep contributions aligned with developer education for compression and Confidential Transfers. Features outside the scope section above are out of band for this repository.

---

## References

| Resource | Link |
|----------|------|
| Live product | [compress-lab.vercel.app](https://compress-lab.vercel.app/) |
| ZK Compression | [zkcompression.com](https://www.zkcompression.com/) |
| Confidential Transfers | [Solana docs — integration guide](https://solana.com/docs/tokens/extensions/confidential-transfer/integration-guide) |
| Token Extensions | [Solana docs — extensions](https://solana.com/docs/tokens/extensions) |
| Light Protocol | [github.com/Lightprotocol/light-protocol](https://github.com/Lightprotocol/light-protocol) |

---

## License

[MIT](./LICENSE) © 2026
