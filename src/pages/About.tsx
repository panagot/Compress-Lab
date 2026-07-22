import { Link } from 'react-router-dom'
import { ArrowRight, GithubLogo } from '@phosphor-icons/react'
import { Reveal } from '../components/Reveal'

const GH = 'https://github.com/panagot/Compress-Lab'

export function About() {
  return (
    <div className="shell">
      <header className="page-hero">
        <p className="eyebrow">Roadmap · product vision</p>
        <h1 className="display">From local lab to Solana’s default compression & privacy on-ramp.</h1>
        <p className="lede">
          Compress Lab is a public-good developer toolkit for ZK Compression and
          Token-2022 Confidential Transfers. Today it teaches and scaffolds.
          After successful funding it becomes a fully accessible, CI-honest,
          awareness-backed surface that any Solana builder can finish in under
          an hour — without inventing a new proving stack.
        </p>
        <div className="hero-actions">
          <Link to="/lab" className="btn btn-primary">
            Open the Lab
            <i>
              <ArrowRight size={14} weight="bold" />
            </i>
          </Link>
          <Link to="/recipes" className="btn btn-ghost">
            Browse recipes
          </Link>
          <a className="btn btn-ghost" href={GH} target="_blank" rel="noreferrer">
            <GithubLogo size={18} weight="bold" />
            Source
          </a>
        </div>
        <div className="page-toolbar">
          <strong>Public good · MIT · ecosystem DX</strong>
          <span>Aligns with compression + Token Extensions priorities</span>
        </div>
      </header>

      <section className="block" style={{ borderTop: 'none', paddingTop: '1.5rem' }}>
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Ecosystem role</p>
              <h2>Why this belongs in Solana’s public-goods layer.</h2>
            </div>
            <p>
              The Foundation and ecosystem have shipped the hard primitives.
              Adoption still dies in the gap between reference docs and a
              working weekend project. Compress Lab fills that gap — the missing
              manual, not a competing protocol.
            </p>
          </div>
        </Reveal>
        <Reveal delay={50}>
          <div className="split-3">
            <article>
              <div className="num">Priority A</div>
              <h3>ZK Compression</h3>
              <p>
                Cheap state unlocks real apps at scale. We teach indexer RPC
                setup, leaf schemas, and batch fan-out so builders stop paying
                classic rent by default.
              </p>
            </article>
            <article>
              <div className="num">Priority B</div>
              <h3>Token Extensions</h3>
              <p>
                Confidential Transfers and permissioning controls are live
                capabilities. We make deposit → apply pending → transfer and
                freeze/default-state paths teachable.
              </p>
            </article>
            <article>
              <div className="num">Priority C</div>
              <h3>Diversified demand</h3>
              <p>
                Recipes and demos point at social, loyalty, payments, and
                fintech pilots — not another speculative venue — so fee demand
                can broaden beyond memecoins.
              </p>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Current state</p>
              <h2>What Compress Lab is today.</h2>
            </div>
            <p>
              A working education surface and local developer workbench — honest
              about sketches vs live chain, useful before the first funded
              signature.
            </p>
          </div>
        </Reveal>
        <Reveal delay={50}>
          <div className="split-3">
            <article>
              <div className="num">01</div>
              <h3>Recipe ledger</h3>
              <p>
                Five timed operator paths with problems, prerequisites, steps,
                gotchas, verification checklists, cost teaching cards, and
                sketch code linked to upstream docs.
              </p>
            </article>
            <article>
              <div className="num">02</div>
              <h3>Local workbench</h3>
              <p>
                Paste or upload code, run static analysis for common
                compression/CT mistakes, export starters. Browser-local — no
                server upload of source.
              </p>
            </article>
            <article>
              <div className="num">03</div>
              <h3>Operator desk</h3>
              <p>
                In-product Q&A for null compressed reads, pending balances,
                Circom myths, and how we sit next to official Light / Solana
                docs.
              </p>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Funded end-state</p>
              <h2>What successful funding makes this become.</h2>
            </div>
            <p>
              Not a larger landing page — a recommendable Solana DX toolkit that
              educators, hackathon mentors, and product teams can send to new
              builders with confidence.
            </p>
          </div>
        </Reveal>
        <Reveal delay={50}>
          <div className="compare-table">
            <div className="compare-head">
              <span>Capability</span>
              <span>Today</span>
              <span>After funding (M1→M2)</span>
            </div>
            <div>
              <span>On-chain recipes</span>
              <span>Structural sketches</span>
              <span>Real devnet signatures + explorer links + pinned SDKs</span>
            </div>
            <div>
              <span>Workbench</span>
              <span>Analyze / export locally</span>
              <span>Tied to runnable happy paths + clearer error surfaces</span>
            </div>
            <div>
              <span>Failure knowledge</span>
              <span>Inline gotchas</span>
              <span>Published failure cookbook used in workshops</span>
            </div>
            <div>
              <span>Awareness</span>
              <span>Site + help desk</span>
              <span>Workshop pack, recorded walkthrough, promo kit</span>
            </div>
            <div>
              <span>Trust model</span>
              <span>Honest labeling</span>
              <span>CI-checked recipes; “clone → works” as the bar</span>
            </div>
            <div>
              <span>Ecosystem niche</span>
              <span>Missing-manual prototype</span>
              <span>Default on-ramp beside official compression & CT docs</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Who it serves</p>
              <h2>Builders the Foundation wants unblocked.</h2>
            </div>
            <p>
              If someone can write Anchor and TypeScript but has never touched
              compression or confidential balances, this toolkit is for them.
            </p>
          </div>
        </Reveal>
        <Reveal delay={50}>
          <div className="split-3">
            <article>
              <div className="num">Hackathons</div>
              <h3>Ship the demo</h3>
              <p>
                Timed recipes and exportable starters so weekend teams pick
                compressed state or private amounts instead of skipping them.
              </p>
            </article>
            <article>
              <div className="num">Product teams</div>
              <h3>Integrate safely</h3>
              <p>
                Checklists and failure modes for RPC, pending balances, and
                permissioning — before mainnet assumptions harden.
              </p>
            </article>
            <article>
              <div className="num">Educators</div>
              <h3>Teach the primitives</h3>
              <p>
                Workshop scripts and awareness materials that point back to
                Light and Solana docs, not around them.
              </p>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Milestones</p>
              <h2>Two public milestones. Clear exit criteria.</h2>
            </div>
            <p>
              Milestone 1 proves live chain paths. Milestone 2 finishes the
              accessible toolkit and awareness layer so Compress Lab can be
              recommended ecosystem-wide.
            </p>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <div className="ask-grid">
            <div className="ask-card">
              <p className="eyebrow">Milestone 1 · initial</p>
              <h3 className="display" style={{ fontSize: '1.85rem', margin: '0.4rem 0 0.75rem' }}>
                Prove the path
              </h3>
              <p>
                Make day-one builders successful on real devnet: polished
                recipes, hardened workbench, first live signatures.
              </p>
              <ul>
                <li>CI + pinned Light / spl-token / Anchor versions in README</li>
                <li>≥2 recipes with real devnet signatures + explorer links</li>
                <li>Workbench wired or paired with runnable scripts for those paths</li>
                <li>Failure cookbook v1 (RPC, pending balance, freeze, indexer lag)</li>
                <li>Measured cost cards from our own runs (replace teaching estimates)</li>
              </ul>
            </div>
            <div className="ask-card">
              <p className="eyebrow">Milestone 2 · final</p>
              <h3 className="display" style={{ fontSize: '1.85rem', margin: '0.4rem 0 0.75rem' }}>
                Full accessible toolkit
              </h3>
              <p>
                Compress Lab as a complete on-ramp: core primitives covered,
                workshops ready, awareness materials in circulation.
              </p>
              <ul>
                <li>Remaining core recipes live on devnet (or explicitly gated)</li>
                <li>Workshop facilitator pack + recorded walkthrough</li>
                <li>Promotional one-pagers / social kit for ecosystem awareness</li>
                <li>Adoption signal: external builders succeeding via recipes</li>
                <li>“Start here” path documented next to official docs links</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Success looks like</p>
              <h2>Outcomes that matter after Milestone 2.</h2>
            </div>
            <p>
              Public goods are judged by use. These are the signals Compress Lab
              optimizes for — not TVL theater.
            </p>
          </div>
        </Reveal>
        <Reveal delay={50}>
          <div className="split-3">
            <article>
              <div className="num">DX</div>
              <h3>&lt;1 hour to first success</h3>
              <p>
                A new Anchor developer reaches a compressed or confidential
                transaction following a recipe without private Discord help.
              </p>
            </article>
            <article>
              <div className="num">Trust</div>
              <h3>Clone → works</h3>
              <p>
                CI and version pins keep examples honest as Light and Token-2022
                clients evolve.
              </p>
            </article>
            <article>
              <div className="num">Reach</div>
              <h3>Workshops & shares</h3>
              <p>
                Facilitators and mentors reuse the pack; builders find Compress
                Lab when searching for compression or CT “how do I…”.
              </p>
            </article>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="hero-actions" style={{ marginTop: '2rem' }}>
            <Link to="/architecture" className="btn btn-ink">
              How the stack fits
              <i>
                <ArrowRight size={14} weight="bold" />
              </i>
            </Link>
            <Link to="/lab" className="btn btn-ghost">
              Try workbench
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
