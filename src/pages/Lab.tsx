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
          The Lab is a local Solana DX workbench — templates, scratchpad, project
          file scan, static analysis, and export. No fake “transaction
          confirmed” theater. Useful today; Milestone 1 connects the same UI to
          real devnet happy paths so analyze and run share one operator story.
        </p>
        <div className="page-toolbar">
          <strong>LOCAL DX · NO SERVER UPLOAD</strong>
          <span>On-chain execution lands in Milestone 1</span>
        </div>
      </header>

      <section style={{ paddingBottom: '1.25rem' }}>
        <Reveal>
          <div className="split-3">
            <article>
              <div className="num">Today</div>
              <h3>Catch mistakes early</h3>
              <p>
                Heuristics flag missing applyPendingBalance, risky RPC assumptions,
                and compliance overclaims before you burn a workshop hour.
              </p>
            </article>
            <article>
              <div className="num">Milestone 1</div>
              <h3>Same Lab, live paths</h3>
              <p>
                Export still works offline; core templates gain runnable scripts
                and explorer links so mentors can verify student output.
              </p>
            </article>
            <article>
              <div className="num">Milestone 2</div>
              <h3>Default teaching surface</h3>
              <p>
                Workbench + recipes + failure cookbook become the kit facilitators
                open first when teaching compression and confidential transfers.
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
              <p className="eyebrow">How reviewers should evaluate</p>
              <h2>Click Demo Analyze. Export a starter. Read a recipe.</h2>
            </div>
            <p>
              The product is the loop — not a progress animation. For the funded
              end-state, that loop ends in an explorer URL. See{' '}
              <Link to="/about">Roadmap</Link> for milestone exit criteria and{' '}
              <Link to="/recipes">Recipes</Link> for the curriculum.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
