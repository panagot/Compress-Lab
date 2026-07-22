import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { recipes, skillLabel } from '../data/recipes'

const totalMinutes = recipes.reduce((sum, r) => sum + r.timeMinutes, 0)

export function Recipes() {
  return (
    <div className="shell">
      <header className="page-hero">
        <p className="eyebrow">Recipe book</p>
        <h1 className="display">Operator paths with gotchas included.</h1>
        <p className="lede">
          Each recipe is a timed path: problem, workshop angle, steps, code
          sketches, verification checklist, and links to upstream docs. Snippets
          show the shape of integration — grant delivery binds current Light and
          Token-2022 SDK versions.
        </p>
        <div className="page-toolbar">
          <strong>{recipes.length} paths · ~{Math.round(totalMinutes / 60)}h guided</strong>
          <span>Compression · Confidential · Extensions</span>
        </div>
      </header>

      <div className="ledger ledger-flush" style={{ paddingBottom: '3.5rem' }}>
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
    </div>
  )
}
