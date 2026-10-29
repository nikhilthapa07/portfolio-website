import type { PreviewVariant } from "@/data/portfolio";

function Car({
  body = "#1B1424",
  accent = "#3FA2FF",
}: {
  body?: string;
  accent?: string;
}) {
  return (
    <svg
      className="pv-car"
      viewBox="0 0 460 160"
      fill="none"
      aria-hidden="true"
    >
      <ellipse cx="230" cy="145" rx="192" ry="9" fill="rgba(0,0,0,.18)" />
      <path
        d="M36 108c0-10 8-17 18-19l54-8 38-24c9-6 19-9 30-9h64c13 0 25 4 35 12l40 34 58 9c14 2 24 14 24 28v6H36z"
        fill={body}
      />
      <path
        d="M152 84l34-22c7-4 14-6 22-6h56c8 0 15 2 21 7l36 29H152z"
        fill="#D9E6F5"
        opacity=".92"
      />
      <path
        d="M166 82l30-19c5-3 11-5 17-5h45v24H166z"
        fill="#8FA6C4"
      />
      <circle cx="126" cy="112" r="24" fill="#14101A" />
      <circle cx="126" cy="112" r="11" fill="#6B6575" />
      <circle cx="344" cy="112" r="24" fill="#14101A" />
      <circle cx="344" cy="112" r="11" fill="#6B6575" />
      <path
        d="M300 86h40"
        stroke={accent}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect x="52" y="92" width="18" height="7" rx="3.5" fill={accent} />
      <rect x="372" y="92" width="18" height="7" rx="3.5" fill={accent} />
    </svg>
  );
}

export default function ProjectPreview({
  variant,
  label,
}: {
  variant: PreviewVariant;
  label: string;
}) {
  return (
    <div
      className={`preview preview-${variant}`}
      role="img"
      aria-label={label}
    >
      <div className="preview-chrome" aria-hidden="true">
        <span />
        <span />
        <span />
        <em>
          {variant === "magnite" && "en.allnewmagnite.nissan-saudiarabia.com"}
          {variant === "nismo" && "en.patrolnismo.nissan-dubai.com"}
          {variant === "patrol" && "en.allnewpatrol.nissan-dubai.com"}
          {variant === "rag" && "internal · rag-assistant"}
        </em>
      </div>

      <div className="preview-stage">
        {variant === "magnite" && (
          <>
            <div className="pv-nav">
              <span className="pv-brand">Nissan</span>
              <span>Magnite</span>
              <span className="pv-pill">Build yours</span>
            </div>
            <div className="pv-title">
              Magnite
              <span>Make your mark.</span>
            </div>
            <p className="pv-sub">Saudi Arabia · 2024</p>
            <Car body="#201528" accent="#3FA2FF" />
            <span className="pv-badge">Vehicle launch</span>
          </>
        )}

        {variant === "nismo" && (
          <>
            <div className="pv-nav">
              <span className="pv-brand">Nissan</span>
              <span>Nismo</span>
              <span className="pv-pill">Explore</span>
            </div>
            <div className="pv-title">
              Patrol
              <span>Nismo</span>
            </div>
            <p className="pv-sub">Track-bred. Road-ready.</p>
            <Car body="#0B0A0D" accent="#FF4D5F" />
            <span className="pv-badge">Nismo</span>
          </>
        )}

        {variant === "patrol" && (
          <>
            <span className="pv-sun" aria-hidden="true" />
            <span className="pv-mountains" aria-hidden="true" />
            <div className="pv-nav">
              <span className="pv-brand">Nissan</span>
              <span>Patrol</span>
              <span className="pv-pill">Discover</span>
            </div>
            <div className="pv-title">
              Patrol
              <span>Move mountains.</span>
            </div>
            <p className="pv-sub">Dubai · 2024</p>
            <Car body="#1A1420" accent="#FFD447" />
            <span className="pv-badge">Flagship launch</span>
          </>
        )}

        {variant === "rag" && (
          <>
            <div className="rag-head">
              <span className="rag-dot" />
              Enterprise RAG
            </div>
            <div className="rag-flow">
              <span className="rag-node">
                <strong>Query</strong>
                user intent
              </span>
              <span className="rag-arrow">→</span>
              <span className="rag-node">
                <strong>Router</strong>
                context
              </span>
              <span className="rag-arrow">→</span>
              <span className="rag-node">
                <strong>Qdrant</strong>
                hybrid search
              </span>
              <span className="rag-arrow">→</span>
              <span className="rag-node">
                <strong>LLM</strong>
                grounded answer
              </span>
            </div>
            <div className="rag-chips">
              <span>LangChain</span>
              <span>LangGraph</span>
              <span>HyDE</span>
              <span>Re-ranking</span>
              <span>LangSmith</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
