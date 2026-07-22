import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { recipes, skillLabel } from '../data/recipes'

const totalMinutes = recipes.reduce((sum, r) => sum + r.timeMinutes, 0)

export function Recipes() {
  return (
    <div className="shell">
      <header className="page-hero">
        <p className="eyebrow">Recipe book</p>
        <h1 className="display">Timed paths with gotchas included.</h1>
        <p className="lede">
          Each recipe is an operator path for Anchor and TypeScript builders:
          problem, why it matters on Solana, steps, sketch code, verification
          checklist, and links to upstream Light / Solana docs. Today sketches
          show structure; the Roadmap binds them to version-pinned, runnable
          happy paths.
        </p>
        <div className="page-toolbar">
          <strong>
            {recipes.length} paths · ~{Math.round(totalMinutes / 60)}h guided
          </strong>
          <span>Compression · Confidential · Extensions</span>
        </div>
      </header>

      <section style={{ paddingBottom: '1.5rem' }}>
        <Reveal>
          <div className="split-3">
            <article>
              <div className="num">How to use</div>
              <h3>Pick by pain</h3>
              <p>
                Start with rent-free profiles if state cost hurts; confidential
                transfer if amounts must hide; permissioned rails if you need
                freeze or default-state demos.
              </p>
            </article>
            <article>
              <div className="num">Learning order</div>
              <h3>01 → 03 → 02</h3>
              <p>
                RPC mental model first, then CT pending balance, then batch
                fan-out. Corridor (05) composes earlier paths for demos.
              </p>
            </article>
            <article>
              <div className="num">On the roadmap</div>
              <h3>Clone → explorer link</h3>
              <p>
                Same titles — live signatures, measured cost cards, CLI
                commands, and failure-cookbook entries for every core path.
              </p>
            </article>
          </div>
        </Reveal>
      </section>

      <div className="ledger ledger-flush" style={{ paddingBottom: '2rem' }}>
        {recipes.map((r, i) => (
          <Reveal key={r.id} delay={i * 40} eager={i < 4}>
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

      <section className="block" style={{ paddingTop: '1rem' }}>
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Coverage map</p>
              <h2>Primitives these recipes unlock.</h2>
            </div>
            <p>
              Together they form a minimal curriculum for cheap state, private
              amounts, and controllable token rails on Solana.
            </p>
          </div>
        </Reveal>
        <Reveal delay={50}>
          <div className="compare-table">
            <div className="compare-head">
              <span>Recipe</span>
              <span>Primitive</span>
              <span>Builder outcome</span>
            </div>
            {recipes.map((r) => (
              <div key={r.id}>
                <span>
                  <Link to={`/recipes/${r.id}`} style={{ textDecoration: 'none', fontWeight: 600 }}>
                    {r.number} · {r.title}
                  </Link>
                </span>
                <span>{skillLabel[r.skill]}</span>
                <span>
                  {r.timeMinutes} min path · {r.difficulty}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={70}>
          <p className="lede" style={{ marginTop: '1.75rem' }}>
            Pair any recipe with the <Link to="/lab">Lab workbench</Link> to
            load a template, analyze your draft, and export starters before you
            touch a wallet.
          </p>
        </Reveal>
      </section>
    </div>
  )
}
