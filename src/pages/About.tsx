import { Link } from 'react-router-dom'
import { ArrowRight, GithubLogo } from '@phosphor-icons/react'
import { Reveal } from '../components/Reveal'

const GH = 'https://github.com/panagot/Compress-Lab'

export function About() {
  return (
    <div className="shell">
      <header className="page-hero">
        <p className="eyebrow">Roadmap · product vision</p>
        <h1 className="display">From local lab to full Solana DX toolkit.</h1>
        <p className="lede">
          Compress Lab exists so every Anchor/TypeScript developer can adopt ZK
          Compression and Token-2022 Confidential Transfers without a multi-repo
          scavenger hunt. This page is the public product path — current state,
          funded trajectory, and the two milestones that get us there.
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
          <strong>Public good · MIT · Solana DX</strong>
          <span>Recipes · Workbench · Awareness</span>
        </div>
      </header>

      <section className="block" style={{ borderTop: 'none', paddingTop: '1.5rem' }}>
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Current state</p>
              <h2>What Compress Lab is today.</h2>
            </div>
            <p>
              A working education surface and local developer workbench — not a
              finished on-chain suite, and not vaporware.
            </p>
          </div>
        </Reveal>
        <Reveal delay={50}>
          <div className="split-3">
            <article>
              <div className="num">01</div>
              <h3>Recipe ledger</h3>
              <p>
                Five timed operator paths: rent-free profiles, mass distribution,
                confidential transfers, permissioned issuer rails, remittance
                corridor teaching demo — with steps, gotchas, and sketch code.
              </p>
            </article>
            <article>
              <div className="num">02</div>
              <h3>Local workbench</h3>
              <p>
                Paste or upload code, run static analysis for common
                compression/CT mistakes, export starters. Runs in the browser —
                no server upload.
              </p>
            </article>
            <article>
              <div className="num">03</div>
              <h3>Operator desk</h3>
              <p>
                In-product help for RPC null reads, pending balances, Circom
                myths, and how the Lab fits next to official Light / Solana docs.
              </p>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Destination</p>
              <h2>What it becomes when fully funded.</h2>
            </div>
            <p>
              A complete, accessible Solana developer toolkit for cheap state and
              confidential amounts — discoverable, workshop-ready, and safe to
              recommend in the wild.
            </p>
          </div>
        </Reveal>
        <Reveal delay={50}>
          <div className="split-3">
            <article>
              <div className="num">Tooling</div>
              <h3>Live on-chain paths</h3>
              <p>
                Version-pinned Light + Token-2022 integrations with real
                signatures, explorer links, and CI that keeps recipes honest.
              </p>
            </article>
            <article>
              <div className="num">Access</div>
              <h3>Anyone can finish in &lt;1h</h3>
              <p>
                Clear setup, failure cookbook, and workbench flows so new Solana
                builders are not gated on tribal knowledge.
              </p>
            </article>
            <article>
              <div className="num">Awareness</div>
              <h3>Ecosystem surface</h3>
              <p>
                Workshop packs, demo materials, and promotional content that
                point builders to Foundation-priority primitives — compression
                and confidential transfers — without replacing official docs.
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
              Milestone 1 hardens what exists and proves the first live chain
              paths. Milestone 2 finishes the accessible toolkit and awareness
              layer.
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
                Make the Lab undeniable for day-one builders: polished recipes,
                hardened workbench, and the first real on-chain happy paths.
              </p>
              <ul>
                <li>CI + pinned SDK versions in README</li>
                <li>≥2 recipes with real devnet signatures + explorer links</li>
                <li>Workbench wired or paired with runnable scripts for those paths</li>
                <li>Failure cookbook v1 (RPC, pending balance, freeze, indexer lag)</li>
              </ul>
            </div>
            <div className="ask-card">
              <p className="eyebrow">Milestone 2 · final</p>
              <h3 className="display" style={{ fontSize: '1.85rem', margin: '0.4rem 0 0.75rem' }}>
                Full accessible toolkit
              </h3>
              <p>
                Compress Lab as a recommendable Solana DX surface: complete
                recipe coverage for the core primitives, awareness materials, and
                workshop-ready distribution.
              </p>
              <ul>
                <li>Remaining core recipes live on devnet (or clearly gated)</li>
                <li>Workshop facilitator pack + recorded walkthrough</li>
                <li>Promotional one-pagers / social kit for ecosystem awareness</li>
                <li>Adoption signal: external builders succeeding via recipes</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="block">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Awareness</p>
              <h2>Education only works if developers find it.</h2>
            </div>
            <p>
              Alongside code, Compress Lab ships materials that raise the floor
              for Solana DX: short demos, workshop scripts, and clear “start
              here” paths next to Light and Token-2022 official docs.
            </p>
          </div>
        </Reveal>
        <Reveal delay={50}>
          <div className="compare-table">
            <div className="compare-head">
              <span>Layer</span>
              <span>Now</span>
              <span>After Milestone 2</span>
            </div>
            <div>
              <span>Recipes</span>
              <span>5 paths · sketch code</span>
              <span>Live, version-pinned, CI-checked</span>
            </div>
            <div>
              <span>Workbench</span>
              <span>Local analyze / export</span>
              <span>Tied to real happy paths</span>
            </div>
            <div>
              <span>Awareness</span>
              <span>Site + help desk</span>
              <span>Workshop pack + promo kit</span>
            </div>
            <div>
              <span>Role in ecosystem</span>
              <span>Missing-manual prototype</span>
              <span>Default on-ramp for compression + CT</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="hero-actions" style={{ marginTop: '2rem' }}>
            <Link to="/lab" className="btn btn-ink">
              Try workbench
              <i>
                <ArrowRight size={14} weight="bold" />
              </i>
            </Link>
            <Link to="/architecture" className="btn btn-ghost">
              Architecture
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
