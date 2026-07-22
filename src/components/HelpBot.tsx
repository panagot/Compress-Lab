import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChatCircleDots, PaperPlaneTilt, X } from '@phosphor-icons/react'
import { helpArticles, matchHelp, type HelpArticle } from '../data/helpBot'

type Msg = {
  id: string
  role: 'bot' | 'user'
  text: string
  articles?: HelpArticle[]
}

const welcome: Msg = {
  id: 'welcome',
  role: 'bot',
  text: 'Field desk for Solana builders. Ask about compression RPC, confidential transfers, the Lab workbench, or the roadmap — or pick a prompt below.',
  articles: helpArticles.slice(0, 4),
}

export function HelpBot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState<Msg[]>([welcome])
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const prompts = useMemo(
    () => [
      'Do I need Circom?',
      'Why is compressed account null?',
      'What can the Lab do?',
      'What is the product roadmap?',
    ],
    [],
  )

  function ask(question: string) {
    const q = question.trim()
    if (!q) return
    const hits = matchHelp(q)
    const reply: Msg = {
      id: `b-${Date.now()}`,
      role: 'bot',
      text:
        hits.length > 0
          ? 'Matched operator notes:'
          : 'No direct match. Try “RPC”, “pending balance”, “Circom”, “export”, or “roadmap”.',
      articles: hits.length ? hits : helpArticles.filter((a) => a.id === 'lab-tools' || a.id === 'stack'),
    }
    setMsgs((m) => [
      ...m,
      { id: `u-${Date.now()}`, role: 'user', text: q },
      reply,
    ])
    setInput('')
  }

  return (
    <div className={`helpbot ${open ? 'open' : ''}`}>
      {open ? (
        <section className="helpbot-panel" aria-label="Developer help desk">
          <header className="helpbot-head">
            <div>
              <strong>Operator desk</strong>
              <span className="mono">Local Q&A · not a model API</span>
            </div>
            <button type="button" className="helpbot-iconbtn" onClick={() => setOpen(false)} aria-label="Close help">
              <X size={18} weight="bold" />
            </button>
          </header>

          <div className="helpbot-body">
            {msgs.map((m) => (
              <div key={m.id} className={`help-msg ${m.role}`}>
                <p>{m.text}</p>
                {m.articles?.length ? (
                  <ul>
                    {m.articles.map((a) => (
                      <li key={a.id}>
                        <strong>{a.question}</strong>
                        <span>{a.answer}</span>
                        {a.href ? (
                          <Link to={a.href} onClick={() => setOpen(false)}>
                            {a.hrefLabel ?? 'Open'} →
                          </Link>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="helpbot-prompts">
            {prompts.map((p) => (
              <button key={p} type="button" onClick={() => ask(p)}>
                {p}
              </button>
            ))}
          </div>

          <form
            className="helpbot-form"
            onSubmit={(e) => {
              e.preventDefault()
              ask(input)
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about RPC, CT, recipes…"
              aria-label="Help question"
            />
            <button type="submit" aria-label="Send">
              <PaperPlaneTilt size={18} weight="fill" />
            </button>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        className="helpbot-fab"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close operator desk' : 'Open operator desk'}
      >
        {open ? <X size={22} weight="bold" /> : <ChatCircleDots size={24} weight="duotone" />}
        {!open ? <span>Help</span> : null}
      </button>
    </div>
  )
}
