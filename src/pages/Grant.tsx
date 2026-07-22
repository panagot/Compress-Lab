import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, GithubLogo } from '@phosphor-icons/react'
import { Reveal } from '../components/Reveal'

const GH = 'https://github.com/panagot/Compress-Lab'

export function Grant() {
  return (
    <div className="shell">
      <header className="page-hero">
        <p className="eyebrow">Public goods · dual application track</p>
        <h1 className="display">Grant brief — $2k Balkan · $3k Foundation.</h1>
        <p className="lede">
          One MIT public good, two asks. <strong>Superteam Balkan $2,000</strong>{' '}
          for regional workshops and packaging.{' '}
          <strong>Solana Foundation $3,000</strong> (Developer Education &
          Ecosystem) for live devnet recipes, workbench hardening, and adoption
          docs. Timeline 45–60 days. Built by Panagiotis Pollis (Greece).
        </p>
        <div className="hero-actions">
          <Link to="/about" className="btn btn-primary">
            Team & roadmap
            <i>
              <ArrowRight size={14} weight="bold" />
            </i>
          </Link>
          <a className="btn btn-ghost" href={GH} target="_blank" rel="noreferrer">
            <GithubLogo size={18} weight="bold" />
            GitHub
          </a>
          <Link to="/lab" className="btn btn-ghost">
            Live workbench
          </Link>
        </div>
        <div className="page-toolbar">
          <strong>Live today: recipes + Lab · Funded: on-chain + workshops</strong>
          <span>Disclose parallel apps if asked</span>
        </div>
      </header>

      <div className="grant-grid" style={{ paddingTop: '1.75rem' }}>
        <Reveal>
          <div className="prose">
            <h2>One-liner</h2>
            <p>
              Open recipes and a local developer workbench so Anchor/TypeScript
              developers can adopt ZK Compression and Confidential Transfers
              without a multi-repo scavenger hunt — with Superteam Balkan as a
              workshop distribution channel.
            </p>

            <h2>Problem</h2>
            <p>
              Primitives exist; DX stalls on compression-aware RPCs, CT pending
              balance flows, and scattered examples. We package the happy path
              and ship local tools reviewers can click today.
            </p>

            <h2>Already shipped (pre-funding)</h2>
            <ul className="checklist">
              <li>
                <i />
                <span>Public GitHub: panagot/Compress-Lab (MIT)</span>
              </li>
              <li>
                <i />
                <span>Five recipe paths with steps, gotchas, sketch code</span>
              </li>
              <li>
                <i />
                <span>
                  Live workbench: templates, file upload, static analysis, export
                </span>
              </li>
              <li>
                <i />
                <span>Operator help desk + architecture honesty page</span>
              </li>
            </ul>

            <h2>Balkan track — $2,000</h2>
            <ul className="checklist">
              <li>
                <i />
                <span>$800 — Workshop outline + recipe polish for meetups</span>
              </li>
              <li>
                <i />
                <span>$700 — 1 Balkan session run or published recording</span>
              </li>
              <li>
                <i />
                <span>$500 — Corridor demo narrative + EN/local one-pager</span>
              </li>
            </ul>

            <h2>Foundation track — $3,000</h2>
            <ul className="checklist">
              <li>
                <i />
                <span>$800 — CI + docs hardening (public good baseline)</span>
              </li>
              <li>
                <i />
                <span>
                  $1,400 — ≥2 recipes with real devnet signatures + explorer links
                </span>
              </li>
              <li>
                <i />
                <span>
                  $800 — Failure cookbook + early adoption signal (visitors /
                  stars / builder confirmations)
                </span>
              </li>
            </ul>

            <div className="callout warning">
              <strong>Honesty bar</strong>
              <p style={{ margin: 0 }}>
                Cost figures on the site are teaching aids until measured on our
                own devnet runs. Lab analyze/export is real; on-chain execution
                is what Foundation funding unlocks.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div>
            <p className="eyebrow">Combined ceiling</p>
            <h2 className="display" style={{ fontSize: '2rem', margin: '0.5rem 0 1rem' }}>
              $5,000 total if both
            </h2>
            <p className="lede" style={{ fontSize: '1rem' }}>
              If only one grant lands, scope shrinks to that track’s milestones.
              If both land, Balkan focuses on distribution; Foundation on live
              chain + ecosystem docs — no double-billing the same deliverable.
            </p>

            <div className="budget">
              <div>
                <span>Balkan — workshops & regional pack</span>
                <span>$2,000</span>
              </div>
              <div>
                <span>Foundation — live recipes & public docs</span>
                <span>$3,000</span>
              </div>
              <div className="total">
                <span>Max combined</span>
                <span>$5,000</span>
              </div>
            </div>

            <div className="callout" style={{ marginTop: '1.5rem' }}>
              <strong>Links for reviewers</strong>
              <p style={{ margin: 0 }}>
                Repo:{' '}
                <a href={GH} target="_blank" rel="noreferrer">
                  github.com/panagot/Compress-Lab
                </a>
                <br />
                Prior:{' '}
                <a
                  href="https://github.com/panagot/z3-doctor"
                  target="_blank"
                  rel="noreferrer"
                >
                  z3-doctor
                </a>
                <br />
                Site: this deployment (Vercel)
              </p>
            </div>

            <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
              <a
                className="btn btn-ink"
                href="https://superteam.fun/earn/grants/solana-foundation-balkan-grants"
                target="_blank"
                rel="noreferrer"
              >
                Balkan listing
                <i>
                  <ArrowUpRight size={14} weight="bold" />
                </i>
              </a>
              <Link to="/about" className="btn btn-ghost">
                About
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
