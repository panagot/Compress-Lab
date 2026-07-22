import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react'
import { Reveal } from '../components/Reveal'

export function Grant() {
  return (
    <div className="shell">
      <header className="page-hero">
        <p className="eyebrow">Public goods · dual application track</p>
        <h1 className="display">Grant brief for Compress Lab.</h1>
        <p className="lede">
          Ask <strong>$5,000</strong> · timeline <strong>45–60 days</strong> ·
          category Developer Education & Ecosystem. Same open-source lab; two
          distribution paths — Solana Foundation ecosystem-wide, and Superteam
          Balkan regional activation.
        </p>
        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href="https://solana.org/grants"
            target="_blank"
            rel="noreferrer"
          >
            Foundation grants
            <i>
              <ArrowUpRight size={14} weight="bold" />
            </i>
          </a>
          <a
            className="btn btn-ghost"
            href="https://superteam.fun/earn/grants/solana-foundation-balkan-grants"
            target="_blank"
            rel="noreferrer"
          >
            Balkan listing
            <ArrowUpRight size={16} />
          </a>
          <Link to="/lab" className="btn btn-ghost">
            Review workbench
          </Link>
        </div>
        <div className="page-toolbar">
          <strong>$5,000 · 45–60 days · Dev Education</strong>
          <span>Foundation + Balkan · one public good</span>
        </div>
      </header>

      <div className="grant-grid" style={{ paddingTop: '1.75rem' }}>
        <Reveal>
          <div className="prose">
            <h2>One-liner</h2>
            <p>
              An open builder lab: working recipes, a local developer workbench
              (paste, upload, analyze, export), and workshop materials so
              Anchor/TypeScript developers can ship ZK Compression and
              Confidential Transfer prototypes without a multi-repo scavenger
              hunt.
            </p>

            <h2>Problem</h2>
            <p>
              The primitives exist; DX does not. Hackathon and product teams
              under-adopt compression and confidential balances because docs are
              reference-shaped, RPCs differ, and gotchas are tribal knowledge.
            </p>

            <h2>Two application tracks</h2>
            <p>
              <strong>Solana Foundation</strong> — ecosystem public good:
              MIT recipes, workbench, measurable adoption milestones.
              <br />
              <strong>Superteam Balkan</strong> — same product with regional
              workshop delivery, corridor teaching demo, and SE Europe
              activation. Product chrome stays global; Balkan is distribution,
              not the brand.
            </p>

            <h2>Deliverables (exit criteria)</h2>
            <ul className="checklist">
              <li>
                <i />
                <span>
                  Public MIT repo with ≥3 live devnet recipes (compressed
                  profile or token path, confidential transfer happy path,
                  permissioned freeze/default-state demo).
                </span>
              </li>
              <li>
                <i />
                <span>
                  Developer workbench (scratchpad, file upload, analyze, export)
                  with at least two paths emitting real devnet signatures +
                  explorer links.
                </span>
              </li>
              <li>
                <i />
                <span>
                  Content pack: guides + 1 workshop outline (EN; optional local
                  language one-pager for Balkan track).
                </span>
              </li>
              <li>
                <i />
                <span>Live demo URL + ≤5 min loom.</span>
              </li>
            </ul>

            <h2>Explicit non-goals</h2>
            <p>
              Audited mainnet protocol, licensed KYC/AML product, restaking,
              fixed-rate credit, or trust-minimized ZK bridges. Thin helpers may
              wrap Light/Token-2022 — they will not be marketed as a new proving
              stack.
            </p>

            <div className="callout warning">
              <strong>Honesty bar</strong>
              <p style={{ margin: 0 }}>
                Workbench DX (analyze/export) is real today. On-chain execution
                is the funded milestone. Cost figures in docs are teaching aids
                until pinned against live signatures.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div>
            <p className="eyebrow">Budget sketch</p>
            <h2 className="display" style={{ fontSize: '2rem', margin: '0.5rem 0 1rem' }}>
              $5,000
            </h2>
            <div className="budget">
              <div>
                <span>Engineering — recipes, workbench, CI</span>
                <span>$3,200</span>
              </div>
              <div>
                <span>Content — guides + workshop</span>
                <span>$800</span>
              </div>
              <div>
                <span>Infra — RPC, hosting, tooling</span>
                <span>$200</span>
              </div>
              <div>
                <span>Contingency / polish</span>
                <span>$800</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>$5,000</span>
              </div>
            </div>

            <div className="callout" style={{ marginTop: '1.5rem' }}>
              <strong>Success metrics</strong>
              <p style={{ margin: 0 }}>
                ≥3 recipes green on devnet in CI · workshop-ready outline · new
                builder reaches first compressed or confidential tx in under one
                hour following a guide · public MIT repo.
              </p>
            </div>

            <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
              <Link to="/recipes" className="btn btn-ink">
                Read recipes
                <i>
                  <ArrowRight size={14} weight="bold" />
                </i>
              </Link>
              <Link to="/lab" className="btn btn-ghost">
                Open workbench
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
