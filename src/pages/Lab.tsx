import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { LabWorkbench } from '../components/LabWorkbench'

export function Lab() {
  return (
    <div className="shell">
      <header className="page-hero">
        <p className="eyebrow">Developer workbench</p>
        <h1 className="display">Paste code. Upload files. Leave with starters.</h1>
        <p className="lede">
          A local workbench for Solana compression and privacy tooling —
          templates, scratchpad, project file scan, static analysis, and export.
          No fake “transaction confirmed” theater. Useful today; the Roadmap
          connects the same UI to real devnet paths and a downloadable CLI.
        </p>
        <div className="page-toolbar">
          <strong>LOCAL · NO SERVER UPLOAD</strong>
          <span>On-chain runs + CLI on the Roadmap</span>
        </div>
      </header>

      <section style={{ paddingBottom: '1.25rem' }}>
        <Reveal>
          <div className="split-3">
            <article>
              <div className="num">Today</div>
              <h3>Catch mistakes early</h3>
              <p>
                Heuristics flag missing applyPendingBalance, risky RPC
                assumptions, and compliance overclaims before you burn hours
                debugging.
              </p>
            </article>
            <article>
              <div className="num">Next</div>
              <h3>Same Lab, live paths</h3>
              <p>
                Export still works offline; core templates gain runnable scripts
                and explorer links so you can verify outputs end to end.
              </p>
            </article>
            <article>
              <div className="num">Complete</div>
              <h3>Lab + CLI together</h3>
              <p>
                Workbench, recipes, CLI, and failure cookbook become one kit
                for teaching and shipping compression and confidential transfers.
              </p>
            </article>
          </div>
        </Reveal>
      </section>

      <div style={{ paddingBottom: '2rem' }}>
        <LabWorkbench />
      </div>

      <section className="block" style={{ paddingTop: '0.5rem', paddingBottom: '3.5rem' }}>
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Try it in two minutes</p>
              <h2>Click Demo Analyze. Export a starter. Open a recipe.</h2>
            </div>
            <p>
              The product is that loop — draft, check, take code with you. When
              live recipes land, the same loop ends in an explorer URL. See{' '}
              <Link to="/about">Roadmap</Link> and{' '}
              <Link to="/recipes">Recipes</Link>.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
