# Compress Lab

**Solana developer education for ZK Compression and Token-2022 Confidential Transfers.**

Compress Lab is an open-source toolkit that turns fragmented reference docs into timed, opinionated operator paths for Anchor and TypeScript builders. It ships a recipe book, a local developer workbench, and a clear public roadmap toward a fully accessible, CI-honest on-ramp — without inventing a new proving system or replacing Light Protocol / Solana official documentation.

| | |
|---|---|
| **Live site** | Deploy from this repo (Vercel / static hosting) |
| **License** | [MIT](./LICENSE) |
| **Status** | Public prototype — local DX live; on-chain recipes on the roadmap |

---

## Why it exists

ZK Compression and Confidential Transfers are production-capable Solana primitives, but adoption still stalls on concrete DX gaps:

1. **Compression-aware RPC / indexer setup** — classic endpoints look empty  
2. **Confidential Transfer flow** — deposit → apply pending → transfer is easy to miss  
3. **Scattered examples** — happy paths are tribal knowledge across multiple repos  

Compress Lab is the **missing manual**: curated recipes, gotchas, cost teaching cards, and a browser workbench that helps builders draft and analyze before they touch a wallet.

---

## What’s included today

| Surface | Description |
|---------|-------------|
| **Recipe book** | Five timed paths (profiles, mass distribution, confidential transfers, permissioned issuer rails, remittance corridor demo) with steps, checklists, and sketch code |
| **Lab workbench** | Templates, scratchpad, file upload, static analysis, export — runs locally in the browser (no server upload of source) |
| **Operator desk** | In-app help for common failure modes and product scope |
| **Architecture & roadmap** | Honest stack diagram, truth table, Milestone 1 / Milestone 2 exit criteria |

### Recipe index

| # | Recipe | Focus |
|---|--------|--------|
| 01 | Rent-free user profiles | ZK Compression |
| 02 | Mass-distribute without rent per wallet | Compressed tokens / batching |
| 03 | Confidential transfer happy path | Token-2022 CT |
| 04 | Permissioned issuer rail | Freeze / default account state |
| 05 | Private remittance corridor (demo) | Combined teaching path |

---

## Roadmap (public)

### Milestone 1 — Prove the path
- CI + pinned Light / `@solana/spl-token` / Anchor versions  
- ≥2 recipes with **real devnet signatures** and explorer links  
- Workbench paired with runnable scripts for those paths  
- Failure cookbook v1 (RPC, pending balance, freeze, indexer lag)  
- Measured cost cards from our own runs  

### Milestone 2 — Full accessible toolkit
- Remaining core recipes live (or clearly gated)  
- Workshop facilitator pack + recorded walkthrough  
- Awareness / promo materials for ecosystem discoverability  
- Adoption signal: external builders succeeding via recipes  
- Documented “start here” path next to official docs  

Official Light and Solana docs remain **canonical**. Compress Lab packages the happy path and keeps version pins honest as upstream APIs move.

---

## Quick start

```bash
git clone https://github.com/panagot/Compress-Lab.git
cd Compress-Lab
npm install
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`).

| Script | Purpose |
|--------|---------|
| `npm run dev` | Local development server |
| `npm run build` | Production build (`dist/`) |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint |

### Deploy

This is a Vite SPA. On Vercel, use the default Vite preset. `vercel.json` rewrites all routes to `index.html` for client-side routing.

---

## Project structure

```
src/
  pages/          Home, Recipes, Lab, Roadmap, Architecture
  components/     Shell, Lab workbench, Help desk, UI primitives
  data/           Recipes, templates, help articles
  lib/            Static analysis heuristics
  styles/         Design system (custom CSS)
```

Product and design notes: [`PRODUCT.md`](./PRODUCT.md), [`DESIGN.md`](./DESIGN.md).

---

## Design principles

- **Recipes over rocket science** — no “we invented ZK” narrative  
- **Honest labeling** — sketches vs live chain; teaching costs vs measured costs  
- **Local-first Lab** — source stays in the browser until you export  
- **Thin teaching layer** — complements Light Protocol and Token-2022; does not fork them  
- **Accessibility of knowledge** — aimed at regular Anchor/TS developers, not circuit specialists  

---

## Contributing

Issues and pull requests that improve recipe clarity, workbench heuristics, docs, or accessibility are welcome. Please keep scope aligned with developer education (no new bridges, restaking markets, or licensed compliance products).

---

## Links

- Repository: [github.com/panagot/Compress-Lab](https://github.com/panagot/Compress-Lab)  
- ZK Compression: [zkcompression.com](https://www.zkcompression.com/)  
- Token-2022 / Confidential Transfers: [Solana docs](https://solana.com/docs/tokens/extensions/confidential-transfer/integration-guide)  
- Light Protocol: [github.com/Lightprotocol/light-protocol](https://github.com/Lightprotocol/light-protocol)  

---

## License

[MIT](./LICENSE) © 2026
