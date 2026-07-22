import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react'
import { HelpBot } from './HelpBot'

const links = [
  { to: '/recipes', label: 'Recipes' },
  { to: '/lab', label: 'Lab' },
  { to: '/about', label: 'Roadmap' },
  { to: '/architecture', label: 'Architecture' },
]

const GH = 'https://github.com/panagot/Compress-Lab'

export function Shell() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="shell nav-inner">
          <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
            <img className="brand-mark" src="/mark.svg" alt="" />
            <span className="brand-text">
              <strong>Compress Lab</strong>
              <span>ZK Compression & Privacy</span>
            </span>
          </NavLink>

          <nav className="nav-links" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <a className="nav-icon" href={GH} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubLogo size={20} weight="bold" />
          </a>

          <NavLink to="/lab" className="nav-cta">
            Try Lab
            <i>
              <ArrowUpRight size={14} weight="bold" />
            </i>
          </NavLink>

          <button
            type="button"
            className={`nav-toggle ${open ? 'open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
        {open ? (
          <div className="shell nav-drawer">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            ))}
            <NavLink to="/lab" onClick={() => setOpen(false)}>
              Try Lab
            </NavLink>
            <a href={GH} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              GitHub
            </a>
          </div>
        ) : null}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer shell">
        <div>
          <strong>Compress Lab</strong>
          <p>
            Developer tooling for Solana ZK Compression and privacy — recipes,
            local workbench, and a path to a full accessible toolkit. Teaching
            layer only; official docs stay canonical.
          </p>
          <p style={{ marginTop: '0.85rem' }}>
            <NavLink to="/recipes">Recipes</NavLink>
            {' · '}
            <NavLink to="/lab">Lab</NavLink>
            {' · '}
            <NavLink to="/about">Roadmap</NavLink>
            {' · '}
            <NavLink to="/architecture">Architecture</NavLink>
            {' · '}
            <a href={GH} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </div>
        <div className="footer-meta">
          <span>PRIORITY · COMPRESSION + TOKEN EXTENSIONS</span>
          <span>STACK · ANCHOR · TS · LIGHT · TOKEN-2022</span>
          <span>END-STATE · CLONE → WORKS · WORKSHOP-READY</span>
        </div>
      </footer>
      <HelpBot />
    </>
  )
}
