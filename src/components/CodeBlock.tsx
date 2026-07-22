import { useState } from 'react'

export function CodeBlock({
  label,
  code,
  sketch = true,
}: {
  label: string
  code: string
  /** Recipe snippets are structural until Milestone 2 pins SDKs. */
  sketch?: boolean
}) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="code-shell">
      <div className="code-shell-inner">
        <div className="code-toolbar">
          <span>
            {label}
            {sketch ? <em className="sketch-badge"> sketch · not runnable CI yet</em> : null}
          </span>
          <button type="button" onClick={copy}>
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}
