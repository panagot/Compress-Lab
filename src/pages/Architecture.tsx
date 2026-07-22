import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { Reveal } from '../components/Reveal'
import { CodeBlock } from '../components/CodeBlock'

const stackDiagram = `[Anchor / TypeScript builder]
            │
            ▼
┌─────────────────────────────────┐
│  Compress Lab (teaching layer)  │
│  · Recipe book + gotchas        │
│  · Local workbench              │
│  · Failure cookbook (M1)        │
│  · Workshop / awareness (M2)    │
│  · Thin helpers (version-pinned)│
└───────────────┬─────────────────┘
                │ uses — never replaces
                ▼
┌─────────────────────────────────┐
│  Light Protocol (compression)   │
│  Token-2022 CT / freeze / hooks │
│  Compression-aware RPC/indexer  │
└───────────────┬─────────────────┘
                │
                ▼
           Solana L1`

const fundedDiagram = `Milestone 2 target flow

  Builder lands on Compress Lab
           │
           ├─► Recipe checklist (CI green)
           ├─► Workbench export / analyze
           ├─► Devnet script → explorer URL
           └─► Workshop clip / failure cookbook
                       │
                       ▼
           Ships feature using Light + Token-2022
           (official docs remain source of truth)`

export function Architecture() {
  return (
    <div className="shell">
      <header className="page-hero">
        <p className="eyebrow">Architecture</p>
        <h1 className="display">A teaching layer on top of live Solana primitives.</h1>
        <p className="lede">
          Compress Lab sits above Light Protocol and Token Extensions. Builders
          keep writing Anchor and TypeScript. We remove scavenger hunts across
          fragmented docs — not the need for a compression-aware RPC, and not
          the cryptography itself.
        </p>
        <div className="page-toolbar">
          <strong>Recipes · Workbench · Awareness</strong>
          <span>Complements official docs · does not fork them</span>
        </div>
      </header>

      <section className="block" style={{ borderTop: 'none', paddingTop: '1.5rem' }}>
        <Reveal>
          <CodeBlock label="Stack today → funded" code={stackDiagram} sketch={false} />
        </Reveal>

        <Reveal delay={60}>
          <div className="split-3" style={{ marginTop: '2rem' }}>
            <article>
              <div className="num">Layer A</div>
              <h3>Recipe book</h3>
              <p>
                Timed paths with prerequisites, cost cards, gotchas, and
                verification checklists. Content is the product — opinionated
                happy paths for Foundation-priority features.
              </p>
            </article>
            <article>
              <div className="num">Layer B</div>
              <h3>Dev workbench</h3>
              <p>
                Scratchpad, file upload, static analysis, export. Local DX now;
                Milestone 1 attaches real explorer-backed paths so “analyze”
                and “run” meet.
              </p>
            </article>
            <article>
              <div className="num">Layer C</div>
              <h3>Thin helpers + awareness</h3>
              <p>
                Optional version-pinned helpers around Light / spl-token — never
                marketed as a new ZK stack. Milestone 2 adds workshop and promo
                materials for discoverability.
              </p>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Funded architecture</p>
              <h2>What the system looks like after Milestone 2.</h2>
            </div>
            <p>
              Same layers — higher integrity. Every core recipe earns a green CI
              path; awareness materials point builders into those paths.
            </p>
          </div>
        </Reveal>
        <Reveal delay={40}>
          <CodeBlock label="Builder journey" code={fundedDiagram} sketch={false} />
        </Reveal>
        <Reveal delay={70}>
          <div className="compare-table" style={{ marginTop: '1.5rem' }}>
            <div className="compare-head">
              <span>Concern</span>
              <span>Handled by</span>
              <span>Compress Lab responsibility</span>
            </div>
            <div>
              <span>Proof systems / circuits</span>
              <span>Light · Token-2022</span>
              <span>Explain when you do not need Circom</span>
            </div>
            <div>
              <span>Indexing compressed state</span>
              <span>RPC / Photon-class indexers</span>
              <span>Fail loud; document endpoint requirements</span>
            </div>
            <div>
              <span>Integration order</span>
              <span>App developers</span>
              <span>Checklists, templates, workbench analysis</span>
            </div>
            <div>
              <span>Discoverability</span>
              <span>Ecosystem channels</span>
              <span>Workshops, demos, “start here” packaging</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Truth table</p>
              <h2>What developers actually need to know.</h2>
            </div>
            <p>
              Most CT and compression app paths do not require writing Circom.
              They do require the right RPC, the right SDK calls, and a mental
              model of pending balances and leaf schemas.
            </p>
          </div>
        </Reveal>
        <Reveal delay={70}>
          <div className="ledger">
            <div className="ledger-row" style={{ cursor: 'default' }}>
              <span className="num">01</span>
              <div>
                <h3>No Circom for common paths</h3>
                <p>Client helpers generate proofs for CT and compression flows.</p>
              </div>
              <span className="chip">Clarified</span>
              <span className="ledger-meta">vs hype SDKs</span>
            </div>
            <div className="ledger-row" style={{ cursor: 'default' }}>
              <span className="num">02</span>
              <div>
                <h3>Indexer RPC is mandatory</h3>
                <p>Classic endpoints look empty. Recipes teach fail-loud checks.</p>
              </div>
              <span className="chip">Operational</span>
              <span className="ledger-meta">Compression RPC</span>
            </div>
            <div className="ledger-row" style={{ cursor: 'default' }}>
              <span className="num">03</span>
              <div>
                <h3>Composability has edges</h3>
                <p>Compressed accounts are not drop-in AccountInfo everywhere.</p>
              </div>
              <span className="chip">Gotcha</span>
              <span className="ledger-meta">Design for hashes</span>
            </div>
            <div className="ledger-row" style={{ cursor: 'default' }}>
              <span className="num">04</span>
              <div>
                <h3>CT pending vs available</h3>
                <p>applyPendingBalance is the silent killer of first transfers.</p>
              </div>
              <span className="chip">Token-2022</span>
              <span className="ledger-meta">Recipe 03</span>
            </div>
            <div className="ledger-row" style={{ cursor: 'default' }}>
              <span className="num">05</span>
              <div>
                <h3>Official docs stay canonical</h3>
                <p>When APIs move, we pin versions and link upstream — not fork truth.</p>
              </div>
              <span className="chip">Governance</span>
              <span className="ledger-meta">Public good</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Non-architecture</p>
              <h2>What we deliberately do not build.</h2>
            </div>
            <p>
              Keeping the teaching layer thin protects the ecosystem from yet
              another abandoned “ZK framework.”
            </p>
          </div>
        </Reveal>
        <Reveal delay={50}>
          <div className="split-3">
            <article>
              <div className="num">No</div>
              <h3>New proving system</h3>
              <p>No custom circuits productized as Compress Lab crypto.</p>
            </article>
            <article>
              <div className="num">No</div>
              <h3>Trust-minimized bridge</h3>
              <p>Wrong scope and risk class for an education toolkit.</p>
            </article>
            <article>
              <div className="num">No</div>
              <h3>Licensed compliance SaaS</h3>
              <p>Token Extension demos only — technical controls, not KYC.</p>
            </article>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
            <Link to="/lab" className="btn btn-primary">
              Open lab
              <i>
                <ArrowRight size={14} weight="bold" />
              </i>
            </Link>
            <Link to="/about" className="btn btn-ghost">
              Roadmap & milestones
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
