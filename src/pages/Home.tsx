import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, GithubLogo } from '@phosphor-icons/react'
import { Reveal } from '../components/Reveal'
import { recipes, skillLabel } from '../data/recipes'

const GH = 'https://github.com/panagot/Compress-Lab'

export function Home() {
  return (
    <>
      <section className="shell hero">
        <div>
          <p className="eyebrow">Compress Lab · Solana · open source</p>
          <h1 className="display">Developer tooling for ZK Compression &amp; Privacy.</h1>
          <p className="lede">
            Help Anchor and TypeScript builders ship Light Protocol compression
            and Token-2022 Confidential Transfers in hours, not days. Open
            recipes, a <strong>live local workbench</strong> (paste, upload,
            analyze, export), and a path to a downloadable CLI — the happy path
            next to official docs, not a new proving stack.
          </p>
          <div className="hero-actions">
            <Link to="/lab" className="btn btn-primary">
              Try the Lab now
              <i>
                <ArrowRight size={14} weight="bold" />
              </i>
            </Link>
            <Link to="/recipes" className="btn btn-ghost">
              Explore recipes
            </Link>
            <a className="btn btn-ghost" href={GH} target="_blank" rel="noreferrer">
              <GithubLogo size={18} weight="bold" />
              GitHub
            </a>
          </div>
          <p className="trust-row mono">
            Built on Light Protocol · Token-2022 · MIT open source ·{' '}
            <Link to="/about">Current state & milestones</Link>
          </p>
        </div>

        <aside className="hero-aside">
          <dl className="metric-row">
            <div className="metric">
              <dt>Recipes</dt>
              <dd>05</dd>
            </div>
            <div className="metric">
              <dt>Target path</dt>
              <dd>&lt;1h</dd>
            </div>
            <div className="metric">
              <dt>Workbench</dt>
              <dd>Live</dd>
            </div>
          </dl>

          <div className="status-banner">
            <strong>What works today</strong>
            <span>
              Recipe book · local Lab · static analysis · export. On-chain
              happy paths and full awareness pack are Milestone 1–2 — see
              Roadmap.
            </span>
          </div>

          <div className="instrument" aria-label="Merkle compression metaphor">
            <div className="instrument-head">
              <span>Cost teaching card · illustrative</span>
              <span className="pulse" aria-hidden />
            </div>
            <div className="tree">
              <div className="tree-row">
                <span className="tree-dot dim" />
                <span>Classic token account rent</span>
                <span>~2M lamports</span>
              </div>
              <div className="tree-row">
                <span className="tree-dot" />
                <span>Compressed path (order of mag.)</span>
                <span>~5K class</span>
              </div>
              <div className="tree-row">
                <span className="tree-dot dim" />
                <span>Typical teaching reduction</span>
                <span>~99%</span>
              </div>
              <div className="tree-row">
                <span className="tree-dot" />
                <span>Pin real deltas on live recipes</span>
                <span>devnet</span>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="shell block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">The gap</p>
              <h2>Primitives shipped. Adoption stalls on three concrete pain points.</h2>
            </div>
            <p>
              Official docs and Light examples exist — they are reference-shaped.
              Compress Lab is the missing manual: timed operator paths for
              regular Anchor developers.
            </p>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <div className="split-3">
            <article>
              <div className="num">Pain 01</div>
              <h3>Wrong RPC, empty reads</h3>
              <p>
                Compression needs an indexer-aware endpoint. Classic RPCs return
                null; builders debug their program for hours.
              </p>
            </article>
            <article>
              <div className="num">Pain 02</div>
              <h3>CT pending balance</h3>
              <p>
                Confidential Transfers fail until deposit → apply pending →
                transfer is explicit. Wallets often hide encrypted state.
              </p>
            </article>
            <article>
              <div className="num">Pain 03</div>
              <h3>Scattered repos</h3>
              <p>
                Setup spans Light, Token-2022, and Anchor examples. Happy paths
                are tribal knowledge, not a weekend checklist.
              </p>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="shell block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Cost card</p>
              <h2>Why compression shows up in every builder narrative.</h2>
            </div>
            <p>
              Figures below are <strong>teaching aids</strong> from public
              compression docs/community examples — live recipes will pin
              measured lamports from our own devnet runs.
            </p>
          </div>
        </Reveal>
        <Reveal delay={50}>
          <div className="compare-table" role="table" aria-label="Cost comparison">
            <div className="compare-head" role="row">
              <span>Path</span>
              <span>Classic (order of mag.)</span>
              <span>Compressed (order of mag.)</span>
            </div>
            <div role="row">
              <span>Token account / small PDA</span>
              <span>~1.4M–2M lamports rent</span>
              <span>~thousands of lamports class</span>
            </div>
            <div role="row">
              <span>Mass fan-out (N wallets)</span>
              <span>ATA rent × N</span>
              <span>Batched proofs, sublinear feel</span>
            </div>
            <div role="row">
              <span>Confidential amount</span>
              <span>Public u64 (no privacy)</span>
              <span>Hidden amount · Token-2022 CT</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="shell block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Live today</p>
              <h2>Not vaporware — open the Lab.</h2>
            </div>
            <p>
              Templates, file upload, static analysis, and export ship
              in-browser now. Wallet/devnet execution and the full awareness
              pack are the public milestones on Roadmap.
            </p>
          </div>
        </Reveal>
        <Reveal delay={70}>
          <div className="split-3">
            <article>
              <div className="num">01 / Recipes</div>
              <h3>Five named paths</h3>
              <p>
                Profiles · airdrop · confidential transfer · permissioned issuer
                · remittance corridor. Each with steps, gotchas, sketches.
              </p>
            </article>
            <article>
              <div className="num">02 / Workbench</div>
              <h3>
                <Link to="/lab">Try it →</Link>
              </h3>
              <p>
                Paste code, drop Anchor files, run Demo Analyze, download
                starters. Nothing uploaded to a server.
              </p>
            </article>
            <article>
              <div className="num">03 / Next</div>
              <h3>
                <Link to="/about">Milestones →</Link>
              </h3>
              <p>
                Live on-chain paths, failure cookbook, workshop and awareness
                materials — a full accessible Solana DX toolkit.
              </p>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="shell block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Ledger</p>
              <h2>Five recipes. Named. Linked.</h2>
            </div>
            <p>
              Each card: problem-shaped title, primitive, timebox. Open any path
              for full steps and sketch code.
            </p>
          </div>
        </Reveal>
        <div className="ledger">
          {recipes.map((r, i) => (
            <Reveal key={r.id} delay={i * 50} eager={i < 3}>
              <Link to={`/recipes/${r.id}`} className="ledger-row">
                <span className="num">{r.number}</span>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.subtitle}</p>
                </div>
                <span className="chip">{skillLabel[r.skill]}</span>
                <span className="ledger-meta">
                  {r.timeMinutes} min · {r.difficulty}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">After funding</p>
              <h2>What Compress Lab becomes for the ecosystem.</h2>
            </div>
            <p>
              A recommendable on-ramp beside official compression and
              Confidential Transfer docs: CI-honest recipes, workbench tied to
              explorer links, workshops, and awareness materials that raise
              adoption of Foundation-priority primitives.
            </p>
          </div>
        </Reveal>
        <Reveal delay={50}>
          <div className="compare-table">
            <div className="compare-head">
              <span>Surface</span>
              <span>Now</span>
              <span>Funded end-state</span>
            </div>
            <div>
              <span>Recipes</span>
              <span>5 paths · sketches</span>
              <span>Live devnet · pinned SDKs · measured costs</span>
            </div>
            <div>
              <span>Lab</span>
              <span>Analyze / export</span>
              <span>Same UX + runnable happy paths</span>
            </div>
            <div>
              <span>Education</span>
              <span>Inline gotchas</span>
              <span>Failure cookbook + workshop pack</span>
            </div>
            <div>
              <span>Awareness</span>
              <span>Site + operator desk</span>
              <span>Promo kit · recorded walkthrough · start-here path</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="shell block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Non-goals</p>
              <h2>Wrong shape for this toolkit.</h2>
            </div>
            <p>
              Restaking, fixed-rate credit, ZK bridges, and licensed compliance
              SaaS need protocol research or legal partners. Compress Lab stays
              focused on developer education and accessible tooling.
            </p>
          </div>
        </Reveal>
        <Reveal delay={70}>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-ink">
              Roadmap & milestones
              <i>
                <ArrowRight size={14} weight="bold" />
              </i>
            </Link>
            <Link to="/architecture" className="btn btn-ghost">
              Architecture
            </Link>
            <a className="btn btn-ghost" href={GH} target="_blank" rel="noreferrer">
              GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
