import { Link } from 'react-router-dom'
import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react'
import { Reveal } from '../components/Reveal'

const GH = 'https://github.com/panagot/Compress-Lab'

export function About() {
  return (
    <div className="shell">
      <header className="page-hero">
        <p className="eyebrow">About · credibility · asks</p>
        <h1 className="display">Built by a solo operator who ships tooling.</h1>
        <p className="lede">
          Compress Lab is an MIT public good by <strong>Panagiotis Pollis</strong>{' '}
          (Greece / SE Europe). Same delivery shape as prior operator tooling:
          docs-heavy product, CLI/web console discipline, honest non-goals.
          Dual grant tracks below — product chrome stays global.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={GH} target="_blank" rel="noreferrer">
            <GithubLogo size={18} weight="bold" />
            Compress-Lab on GitHub
            <i>
              <ArrowUpRight size={14} weight="bold" />
            </i>
          </a>
          <a
            className="btn btn-ghost"
            href="https://github.com/panagot/z3-doctor"
            target="_blank"
            rel="noreferrer"
          >
            Prior work · z3-doctor
          </a>
          <Link to="/lab" className="btn btn-ghost">
            Open live Lab
          </Link>
        </div>
        <div className="page-toolbar">
          <strong>Solo · Greece · open source</strong>
          <span>Balkan $2k · Foundation $3k</span>
        </div>
      </header>

      <section className="block" style={{ borderTop: 'none', paddingTop: '1.5rem' }}>
        <Reveal>
          <div className="split-3">
            <article>
              <div className="num">Who</div>
              <h3>Panagiotis Pollis</h3>
              <p>
                Independent builder. Email for grant contact:
                panagiotispollis@gmail.com. Shipping focus: developer/operator
                education surfaces reviewers can click.
              </p>
            </article>
            <article>
              <div className="num">Why credible</div>
              <h3>Shipped tooling pattern</h3>
              <p>
                z3-doctor — Zcash Z3 migration readiness (CLI + web console +
                docs). Compress Lab reuses that craft for Solana DX, not a
                vapor protocol claim.
              </p>
            </article>
            <article>
              <div className="num">Why SE Europe</div>
              <h3>Distribution, not brand</h3>
              <p>
                Based in Greece with Superteam Balkan as a workshop channel.
                Product is ecosystem-wide; Balkan track funds regional
                activation and meetup packaging.
              </p>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Dual asks</p>
              <h2>Two applications. One public good. Clear scopes.</h2>
            </div>
            <p>
              Parallel applications disclosed here. Deliverables overlap on the
              open repo; Balkan funds workshop distribution, Foundation funds
              live recipes + ecosystem docs.
            </p>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <div className="ask-grid">
            <div className="ask-card">
              <p className="eyebrow">Superteam Balkan</p>
              <h3 className="display" style={{ fontSize: '2.4rem', margin: '0.4rem 0' }}>
                $2,000
              </h3>
              <p>
                Regional workshop pack, corridor teaching narrative, meetup or
                recorded session, optional local-language one-pager. Uses the
                same MIT recipes/workbench.
              </p>
              <ul>
                <li>$800 — polish recipes + Balkan workshop outline live</li>
                <li>$700 — run or record 1 Balkan community session</li>
                <li>$500 — corridor demo UX + EN/local one-pager</li>
              </ul>
            </div>
            <div className="ask-card">
              <p className="eyebrow">Solana Foundation</p>
              <h3 className="display" style={{ fontSize: '2.4rem', margin: '0.4rem 0' }}>
                $3,000
              </h3>
              <p>
                Developer Education & Ecosystem: live devnet recipes, workbench
                wiring, failure cookbook, adoption signal. Category fit: public
                docs + free tooling.
              </p>
              <ul>
                <li>$800 — public site/repo hardened + CI</li>
                <li>$1,400 — ≥2 recipes with real devnet signatures</li>
                <li>$800 — failure cookbook + early adoption metric</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Roadmap</p>
              <h2>What exists vs what funding unlocks.</h2>
            </div>
            <p>Reviewers should not guess. Status is explicit.</p>
          </div>
        </Reveal>
        <Reveal delay={50}>
          <div className="compare-table">
            <div className="compare-head">
              <span>Milestone</span>
              <span>Status</span>
              <span>Unlock</span>
            </div>
            <div>
              <span>Recipe book (5 paths) + architecture</span>
              <span>Live</span>
              <span>—</span>
            </div>
            <div>
              <span>Local workbench (analyze / files / export)</span>
              <span>Live</span>
              <span>—</span>
            </div>
            <div>
              <span>≥2 recipes on devnet + explorer links</span>
              <span>Planned</span>
              <span>Foundation M2</span>
            </div>
            <div>
              <span>Workshop run/recording + facilitator guide</span>
              <span>Planned</span>
              <span>Balkan M2</span>
            </div>
            <div>
              <span>Failure cookbook + adoption signal</span>
              <span>Planned</span>
              <span>Foundation M3</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Competition</p>
              <h2>We are the missing manual — not another docs site.</h2>
            </div>
            <p>
              zkcompression.com / Light examples and Solana CT guides are source
              of truth. Helius content is excellent and general. Compress Lab
              packages opinionated, timed recipes + a local workbench so shipping
              takes a weekend, not a week.
            </p>
          </div>
        </Reveal>
        <Reveal delay={50}>
          <div className="compare-table">
            <div className="compare-head">
              <span>Source</span>
              <span>Strength</span>
              <span>Compress Lab adds</span>
            </div>
            <div>
              <span>Official / Light docs</span>
              <span>Complete reference</span>
              <span>Curated happy paths + gotchas</span>
            </div>
            <div>
              <span>Helius / ecosystem blogs</span>
              <span>High-quality explainers</span>
              <span>Operator checklists + Lab tools</span>
            </div>
            <div>
              <span>Scattered GitHub samples</span>
              <span>Real code fragments</span>
              <span>One ledger, one workbench, workshops</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="hero-actions" style={{ marginTop: '2rem' }}>
            <Link to="/grant" className="btn btn-ink">
              Full grant brief
            </Link>
            <Link to="/architecture" className="btn btn-ghost">
              Architecture honesty
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
