import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react'
import { Reveal } from '../components/Reveal'
import { recipes, skillLabel } from '../data/recipes'

export function Home() {
  return (
    <>
      <section className="shell hero">
        <div>
          <p className="eyebrow">Solana · developer education · public good</p>
          <h1 className="display">Compression & privacy, taught as craft.</h1>
          <p className="lede">
            Compress Lab is an open builder lab for ZK Compression (Light) and
            Token-2022 Confidential Transfers — opinionated recipes, a local
            developer workbench, and workshop-ready content. We wrap what
            already exists. We do not invent Circom for you, and we do not
            pretend to replace Light.
          </p>
          <div className="hero-actions">
            <Link to="/lab" className="btn btn-primary">
              Open workbench
              <i>
                <ArrowRight size={14} weight="bold" />
              </i>
            </Link>
            <Link to="/recipes" className="btn btn-ghost">
              Browse recipes
            </Link>
            <Link to="/grant" className="btn btn-ghost">
              Grant brief
              <ArrowUpRight size={16} />
            </Link>
          </div>
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

          <div className="instrument" aria-label="Merkle compression metaphor">
            <div className="instrument-head">
              <span>Field instrument · leaf → root</span>
              <span className="pulse" aria-hidden />
            </div>
            <div className="tree">
              <div className="tree-row">
                <span className="tree-dot" />
                <span>profile leaf · username + score</span>
                <span>73 B</span>
              </div>
              <div className="tree-row">
                <span className="tree-dot dim" />
                <span>batch hashes · airdrop chunk</span>
                <span>×50</span>
              </div>
              <div className="tree-row">
                <span className="tree-dot dim" />
                <span>validity proof · 128 B class</span>
                <span>zk</span>
              </div>
              <div className="tree-row">
                <span className="tree-dot" />
                <span>on-chain root · L1 composable</span>
                <span>live</span>
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
              <h2>Primitives shipped. Adoption stalled on DX.</h2>
            </div>
            <p>
              Light Protocol and Token-2022 confidential transfers are real.
              Anchor developers still face fragmented docs, indexer RPC setup,
              and gotchas that turn a weekend feature into a multi-day sink.
              Compress Lab packages the happy paths Anchor/TypeScript teams
              actually need.
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="split-3">
            <article>
              <div className="num">01 / Honest scope</div>
              <h3>Recipes over rocket science</h3>
              <p>
                Copy-paste Anchor + TypeScript paths, cost cards, and failure
                modes. No fake “ZKKit invents ZK” narrative.
              </p>
            </article>
            <article>
              <div className="num">02 / Dev workbench</div>
              <h3>Paste, upload, analyze, export</h3>
              <p>
                A real local Lab for builders: templates, file scan, static
                checks, starter downloads. On-chain wiring is the funded
                milestone — not a fake confirmation animation.
              </p>
            </article>
            <article>
              <div className="num">03 / Workshop craft</div>
              <h3>Meetup-ready packs</h3>
              <p>
                Hackathon and regional workshop paths: remittance UX, event
                drops, permissioned issuer demos with clear disclaimers —
                including Superteam Balkan distribution when relevant.
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
              <h2>Five recipes. One operator path.</h2>
            </div>
            <p>
              Start with rent-free profiles, then fan-out, privacy, policy
              rails, and a composed remittance corridor demo.
            </p>
          </div>
        </Reveal>
        <div className="ledger">
          {recipes.map((r, i) => (
            <Reveal key={r.id} delay={i * 60}>
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
              <p className="eyebrow">Non-goals</p>
              <h2>What this grant will not fund.</h2>
            </div>
            <p>
              Restaking markets, fixed-rate credit, ZK bridges, or licensed
              compliance SaaS. Those are the wrong cheque size — and the wrong
              honesty bar.
            </p>
          </div>
        </Reveal>
        <Reveal delay={70}>
          <div className="hero-actions">
            <Link to="/architecture" className="btn btn-ink">
              See architecture
              <i>
                <ArrowRight size={14} weight="bold" />
              </i>
            </Link>
            <Link to="/grant" className="btn btn-ghost">
              Read grant brief
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
