import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { Reveal } from '../components/Reveal'
import { CodeBlock } from '../components/CodeBlock'

const stackDiagram = `[Anchor / TypeScript builder]
            │
            ▼
┌───────────────────────────┐
│  Compress Lab             │
│  · Recipe book            │
│  · Lab console            │
│  · Thin helpers (optional)│
│  · Workshop pack          │
└─────────────┬─────────────┘
              │ uses, does not replace
              ▼
┌───────────────────────────┐
│  Light Protocol           │
│  Token-2022 CT / freeze   │
│  Compression-aware RPC    │
└─────────────┬─────────────┘
              │
              ▼
         Solana L1`

export function Architecture() {
  return (
    <div className="shell">
      <header className="page-hero">
        <p className="eyebrow">Architecture</p>
        <h1 className="display">A teaching layer on top of live primitives.</h1>
        <p className="lede">
          Compress Lab sits above Light Protocol and Token Extensions. Builders
          keep writing Anchor and TypeScript. We remove scavenger hunts across
          five doc trees — not the need for a compression-aware RPC.
        </p>
        <div className="page-toolbar">
          <strong>Recipes · Lab · Thin helpers</strong>
          <span>Does not replace Light or Token-2022</span>
        </div>
      </header>

      <section className="block" style={{ borderTop: 'none', paddingTop: '1.5rem' }}>
        <Reveal>
          <CodeBlock label="Stack diagram" code={stackDiagram} />
        </Reveal>

        <Reveal delay={60}>
          <div className="split-3" style={{ marginTop: '2rem' }}>
            <article>
              <div className="num">Layer A</div>
              <h3>Recipe book</h3>
              <p>
                Five timed paths with prerequisites, cost cards, gotchas, and
                verification checklists. Content is the product.
              </p>
            </article>
            <article>
              <div className="num">Layer B</div>
              <h3>Dev workbench</h3>
              <p>
                Scratchpad, file upload, static analysis, export. Local DX now;
                funded milestone attaches real explorer links.
              </p>
            </article>
            <article>
              <div className="num">Layer C</div>
              <h3>Thin helpers</h3>
              <p>
                Optional TypeScript helpers around current Light / spl-token
                APIs. Clearly version-pinned. Never marketed as a new ZK stack.
              </p>
            </article>
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
              You do not write Circom to use compression or confidential
              transfers in the common case. You do need the right RPC, the right
              SDK calls, and a mental model of pending balances and leaf schemas.
            </p>
          </div>
        </Reveal>
        <Reveal delay={70}>
          <div className="ledger">
            <div className="ledger-row" style={{ cursor: 'default' }}>
              <span className="num">01</span>
              <div>
                <h3>No Circom required</h3>
                <p>Client helpers generate proofs for CT and compression paths.</p>
              </div>
              <span className="chip">Clarified</span>
              <span className="ledger-meta">vs ZKKit hype</span>
            </div>
            <div className="ledger-row" style={{ cursor: 'default' }}>
              <span className="num">02</span>
              <div>
                <h3>Indexer RPC is mandatory</h3>
                <p>Classic endpoints will look “empty.” Recipes fail loud.</p>
              </div>
              <span className="chip">Operational</span>
              <span className="ledger-meta">Helius / Photon</span>
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
          </div>
        </Reveal>
      </section>

      <section className="block">
        <Reveal>
          <div className="hero-actions">
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
