import { LabWorkbench } from '../components/LabWorkbench'

export function Lab() {
  return (
    <div className="shell">
      <header className="page-hero">
        <p className="eyebrow">Developer workbench</p>
        <h1 className="display">Paste code. Upload files. Leave with starters.</h1>
        <p className="lede">
          Built for reviewers and builders who bounce off fake “tx confirmed”
          demos. The Lab is a local workbench: templates, scratchpad, project
          file scan, static analysis, and export. On-chain execution is the
          funded milestone — useful DX is available today.
        </p>
        <div className="page-toolbar">
          <strong>LOCAL DX · NO SERVER UPLOAD</strong>
          <span>On-chain signatures = funded milestone</span>
        </div>
      </header>
      <div style={{ paddingTop: '1.25rem', paddingBottom: '4rem' }}>
        <LabWorkbench />
      </div>
    </div>
  )
}
