import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { CodeBlock } from '../components/CodeBlock'
import { getRecipe, recipes, skillLabel } from '../data/recipes'

export function RecipeDetail() {
  const { id } = useParams()
  const recipe = id ? getRecipe(id) : undefined
  if (!recipe) return <Navigate to="/recipes" replace />

  const idx = recipes.findIndex((r) => r.id === recipe.id)
  const prev = idx > 0 ? recipes[idx - 1] : null
  const next = idx < recipes.length - 1 ? recipes[idx + 1] : null

  return (
    <div className="shell">
      <header className="page-hero">
        <Link to="/recipes" className="eyebrow" style={{ textDecoration: 'none' }}>
          <ArrowLeft size={12} weight="bold" /> Recipe {recipe.number}
        </Link>
        <h1 className="display">{recipe.title}</h1>
        <p className="lede">{recipe.subtitle}</p>
        <div className="hero-actions">
          <span className="chip">{skillLabel[recipe.skill]}</span>
          <span className="mono muted">
            {recipe.timeMinutes} min · {recipe.difficulty} ·{' '}
            {recipe.stack.join(' · ')}
          </span>
        </div>
      </header>

      <div className="layout-rail">
        <nav className="rail" aria-label="On this page">
          <a href="#problem">Problem</a>
          <a href="#outcome">Outcome</a>
          <a href="#workshop">Workshop angle</a>
          <a href="#cost">Cost card</a>
          <a href="#steps">Steps</a>
          <a href="#code">Code</a>
          <a href="#gotchas">Gotchas</a>
          <a href="#verify">Verify</a>
        </nav>

        <article className="prose">
          <div id="problem">
            <h2>Problem</h2>
            <p>{recipe.problem}</p>
          </div>

          <div id="outcome">
            <h2>Outcome</h2>
            <p>{recipe.outcome}</p>
          </div>

          <div id="workshop" className="callout">
            <strong>Workshop angle</strong>
            <p style={{ margin: 0 }}>{recipe.balkanAngle}</p>
          </div>

          <h2>Prerequisites</h2>
          <ul>
            {recipe.prerequisites.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <div id="cost" className="cost-grid">
            <div className="cost-cell">
              <span>Before</span>
              <strong>{recipe.costBefore}</strong>
            </div>
            <div className="cost-cell">
              <span>After</span>
              <strong>{recipe.costAfter}</strong>
            </div>
          </div>

          <div id="steps">
            <h2>Steps</h2>
            {recipe.steps.map((s, i) => (
              <div key={s.title}>
                <h3>
                  {String(i + 1).padStart(2, '0')} — {s.title}
                </h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>

          <div id="code">
            <h2>Code sketches</h2>
            <p>
              Sketches show structure and responsibilities. Pin exact package
              versions in the grant repo README when wiring live SDKs.
            </p>
            <CodeBlock label="Rust / Anchor sketch" code={recipe.anchorSnippet} />
            <CodeBlock label="TypeScript client sketch" code={recipe.clientSnippet} />
          </div>

          <div id="gotchas">
            <h2>Gotchas</h2>
            {recipe.gotchas.map((g) => (
              <div key={g.title} className="callout warning">
                <strong>{g.title}</strong>
                <p style={{ margin: 0 }}>{g.body}</p>
              </div>
            ))}
          </div>

          <div id="verify">
            <h2>Verification checklist</h2>
            <ul>
              {recipe.verifyChecklist.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>

          <h2>Further reading</h2>
          <ul>
            {recipe.furtherReading.map((f) => (
              <li key={f.href}>
                <a href={f.href} target="_blank" rel="noreferrer">
                  {f.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hero-actions" style={{ marginTop: '2.5rem' }}>
            <Link to="/lab" className="btn btn-primary">
              Try in lab
              <i>
                <ArrowRight size={14} weight="bold" />
              </i>
            </Link>
            {prev ? (
              <Link to={`/recipes/${prev.id}`} className="btn btn-ghost">
                Prev · {prev.number}
              </Link>
            ) : null}
            {next ? (
              <Link to={`/recipes/${next.id}`} className="btn btn-ghost">
                Next · {next.number}
              </Link>
            ) : null}
          </div>
        </article>
      </div>
    </div>
  )
}
