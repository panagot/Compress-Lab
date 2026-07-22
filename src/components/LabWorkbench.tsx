import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle,
  DownloadSimple,
  FileArrowUp,
  MagnifyingGlass,
  Trash,
  WarningCircle,
  Info,
  SealCheck,
} from '@phosphor-icons/react'
import { templates, type CodeTemplate } from '../data/templates'
import { recipes } from '../data/recipes'
import {
  analyzeCode,
  analyzeProject,
  type AnalysisResult,
  type Finding,
  type UploadedFile,
} from '../lib/analyze'

type Tab = 'scratchpad' | 'files' | 'export'

const STORAGE_KEY = 'compress-lab.scratchpad.v1'

function severityIcon(sev: Finding['severity']) {
  if (sev === 'error') return <WarningCircle size={16} weight="fill" />
  if (sev === 'warn') return <WarningCircle size={16} />
  if (sev === 'ok') return <SealCheck size={16} weight="fill" />
  return <Info size={16} />
}

export function LabWorkbench() {
  const [tab, setTab] = useState<Tab>('scratchpad')
  const [templateId, setTemplateId] = useState(templates[0].id)
  const [filename, setFilename] = useState(templates[0].filename)
  const [code, setCode] = useState(templates[0].code)
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null)
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [fileAnalysis, setFileAnalysis] = useState<AnalysisResult | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const [status, setStatus] = useState('Ready — load a template or paste your code.')

  const activeTemplate = useMemo(
    () => templates.find((t) => t.id === templateId) ?? templates[0],
    [templateId],
  )

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as { code?: string; filename?: string; templateId?: string }
      if (parsed.code) setCode(parsed.code)
      if (parsed.filename) setFilename(parsed.filename)
      if (parsed.templateId) setTemplateId(parsed.templateId)
      setStatus('Restored scratchpad from this browser.')
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ code, filename, templateId }),
    )
  }, [code, filename, templateId])

  function loadTemplate(t: CodeTemplate) {
    setTemplateId(t.id)
    setFilename(t.filename)
    setCode(t.code)
    setAnalysis(null)
    setStatus(`Loaded template · ${t.label}`)
  }

  function runAnalyze() {
    const result = analyzeCode(code, filename)
    setAnalysis(result)
    setStatus(result.summary)
    setTab('scratchpad')
  }

  function runDemoAnalyze() {
    const demo = templates.find((t) => t.id === 'ts-ct') ?? templates[0]
    setTemplateId(demo.id)
    setFilename(demo.filename)
    setCode(demo.code)
    const result = analyzeCode(demo.code, demo.filename)
    setAnalysis(result)
    setTab('scratchpad')
    setStatus('Demo analyze · confidential-transfer template')
  }

  const ingestFiles = useCallback(async (list: FileList | File[]) => {
    const arr = [...list]
    const next: UploadedFile[] = []
    for (const file of arr) {
      if (file.size > 200_000) {
        setStatus(`Skipped ${file.name} (>200KB).`)
        continue
      }
      const text = await file.text()
      next.push({ name: file.name, size: file.size, text })
    }
    setFiles((prev) => {
      const map = new Map(prev.map((f) => [f.name, f]))
      for (const f of next) map.set(f.name, f)
      return [...map.values()]
    })
    setStatus(`Loaded ${next.length} file(s) into workspace.`)
  }, [])

  function scanProject() {
    const result = analyzeProject(files)
    setFileAnalysis(result)
    setStatus(result.summary)
  }

  function downloadText(name: string, body: string) {
    const blob = new Blob([body], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = name
    a.click()
    URL.revokeObjectURL(url)
  }

  function exportBuffer() {
    downloadText(filename || 'scratchpad.txt', code)
    setStatus(`Downloaded ${filename}`)
  }

  function exportPack() {
    const readme = `# Compress Lab starter pack
Generated locally in your browser.

Templates included:
${templates.map((t) => `- ${t.filename} → recipe ${t.recipeId}`).join('\n')}

Next:
1. Set RPC_URL to a compression-aware endpoint
2. Pin Light + @solana/spl-token versions
3. Follow recipe checklists on the site
`
    downloadText('COMPRESS-LAB-README.txt', readme)
    for (const t of templates) {
      window.setTimeout(() => downloadText(t.filename, t.code), 120)
    }
    setStatus('Starter pack download started (README + templates).')
  }

  function openFileInScratch(f: UploadedFile) {
    setFilename(f.name)
    setCode(f.text)
    setTab('scratchpad')
    setStatus(`Opened ${f.name} in scratchpad.`)
  }

  const result = tab === 'files' ? fileAnalysis : analysis

  return (
    <div className="workbench">
      <div className="workbench-tabs" role="tablist" aria-label="Lab tools">
        {(
          [
            ['scratchpad', 'Scratchpad'],
            ['files', 'Files'],
            ['export', 'Export'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            className={tab === id ? 'active' : ''}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
        <span className="workbench-status mono">{status}</span>
      </div>

      {tab === 'scratchpad' ? (
        <div className="workbench-grid">
          <aside className="workbench-side">
            <p className="eyebrow">Templates</p>
            <div className="template-list">
              {templates.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`template-item ${t.id === templateId ? 'active' : ''}`}
                  onClick={() => loadTemplate(t)}
                >
                  <strong>{t.label}</strong>
                  <span>{t.description}</span>
                </button>
              ))}
            </div>
            <p className="side-note">
              Edits persist in <span className="mono">localStorage</span> on this
              device. Nothing is uploaded to a server.
            </p>
          </aside>

          <div className="editor-panel">
            <div className="editor-toolbar">
              <label>
                File
                <input
                  value={filename}
                  onChange={(e) => setFilename(e.target.value)}
                  spellCheck={false}
                />
              </label>
              <span className="mono muted">
                recipe / {activeTemplate.recipeId}
              </span>
              <div className="editor-actions">
                <button type="button" className="btn btn-primary" onClick={runAnalyze}>
                  <MagnifyingGlass size={16} weight="bold" />
                  Analyze
                  <i>
                    <ArrowRight size={14} weight="bold" />
                  </i>
                </button>
                <button type="button" className="btn btn-ghost" onClick={runDemoAnalyze}>
                  Demo analyze
                </button>
                <button type="button" className="btn btn-ghost" onClick={exportBuffer}>
                  <DownloadSimple size={16} />
                  Download
                </button>
              </div>
            </div>
            <textarea
              className="code-editor"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              aria-label="Code scratchpad"
            />
          </div>

          <AnalysisPanel result={result} emptyHint="Run Analyze for static findings and recipe hints." />
        </div>
      ) : null}

      {tab === 'files' ? (
        <div className="workbench-grid files-grid">
          <div
            className={`dropzone ${dragOver ? 'over' : ''}`}
            onDragEnter={(e) => {
              e.preventDefault()
              setDragOver(true)
            }}
            onDragOver={(e) => e.preventDefault()}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault()
              setDragOver(false)
              if (e.dataTransfer.files?.length) void ingestFiles(e.dataTransfer.files)
            }}
          >
            <FileArrowUp size={28} weight="thin" />
            <h3>Drop project files</h3>
            <p>
              Anchor.toml, package.json, .ts, .tsx, .rs — text only, 200KB max each.
              Scanned locally in your browser.
            </p>
            <label className="btn btn-ink file-btn">
              Choose files
              <input
                type="file"
                multiple
                accept=".ts,.tsx,.js,.jsx,.rs,.toml,.json,.md,.txt"
                hidden
                onChange={(e) => {
                  if (e.target.files?.length) void ingestFiles(e.target.files)
                  e.target.value = ''
                }}
              />
            </label>
          </div>

          <div className="file-list-panel">
            <div className="editor-toolbar">
              <strong>{files.length} file(s)</strong>
              <div className="editor-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={scanProject}
                  disabled={!files.length}
                >
                  <MagnifyingGlass size={16} weight="bold" />
                  Scan project
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => {
                    setFiles([])
                    setFileAnalysis(null)
                    setStatus('Workspace cleared.')
                  }}
                  disabled={!files.length}
                >
                  <Trash size={16} />
                  Clear
                </button>
              </div>
            </div>
            {files.length === 0 ? (
              <p className="empty-hint">No files yet — upload to unlock project scan.</p>
            ) : (
              <ul className="file-rows">
                {files.map((f) => (
                  <li key={f.name}>
                    <div>
                      <strong>{f.name}</strong>
                      <span className="mono">{f.size} B</span>
                    </div>
                    <button type="button" className="linkish" onClick={() => openFileInScratch(f)}>
                      Open in scratchpad
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <AnalysisPanel
            result={result}
            emptyHint="Scan project after upload for Anchor/npm/compression hints."
          />
        </div>
      ) : null}

      {tab === 'export' ? (
        <div className="export-panel">
          <div>
            <p className="eyebrow">Take it with you</p>
            <h2 className="display" style={{ fontSize: '2rem', margin: '0.5rem 0 0.75rem' }}>
              Export starters for your machine.
            </h2>
            <p className="lede">
              Leave with files, not a fake “transaction confirmed” animation.
              On-chain wiring is on the Roadmap; local DX is available now.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary" onClick={exportBuffer}>
                <DownloadSimple size={16} />
                Download scratchpad
              </button>
              <button type="button" className="btn btn-ink" onClick={exportPack}>
                Download starter pack
              </button>
              <Link to={`/recipes/${activeTemplate.recipeId}`} className="btn btn-ghost">
                Open linked recipe
              </Link>
            </div>
          </div>
          <div className="export-list">
            {templates.map((t) => (
              <button
                key={t.id}
                type="button"
                className="export-row"
                onClick={() => downloadText(t.filename, t.code)}
              >
                <span className="mono">{t.filename}</span>
                <span>{recipes.find((r) => r.id === t.recipeId)?.title ?? t.recipeId}</span>
                <DownloadSimple size={16} />
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function AnalysisPanel({
  result,
  emptyHint,
}: {
  result: AnalysisResult | null
  emptyHint: string
}) {
  return (
    <aside className="analysis-panel">
      <p className="eyebrow">Static analysis</p>
      {!result ? (
        <p className="empty-hint">{emptyHint}</p>
      ) : (
        <>
          <div className="score-row">
            <div>
              <span className="mono">Readiness</span>
              <strong>{result.score}</strong>
            </div>
            <p>{result.summary}</p>
          </div>
          <ul className="findings">
            {result.findings.map((f) => (
              <li key={`${f.title}-${f.detail.slice(0, 24)}`} className={`sev-${f.severity}`}>
                <span className="finding-ico">{severityIcon(f.severity)}</span>
                <div>
                  <strong>{f.title}</strong>
                  <p>{f.detail}</p>
                  {f.recipeId ? (
                    <Link to={`/recipes/${f.recipeId}`}>Open recipe →</Link>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
          {result.suggestedRecipes.length ? (
            <div className="suggest">
              <span className="mono">Suggested recipes</span>
              <div>
                {result.suggestedRecipes.map((id) => (
                  <Link key={id} to={`/recipes/${id}`}>
                    {recipes.find((r) => r.id === id)?.number ?? ''}{' '}
                    {recipes.find((r) => r.id === id)?.title ?? id}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
          <p className="analysis-foot">
            <CheckCircle size={14} /> Heuristic only — does not replace devnet
            execution.
          </p>
        </>
      )}
    </aside>
  )
}
