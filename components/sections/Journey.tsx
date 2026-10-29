import type { CSSProperties } from "react";
import { education, experience } from "@/data/portfolio";

export default function Journey() {
  return (
    <section className="sec" id="journey">
      <div className="wrap vh">
        <div className="vh-side">
          <h2 className="h2" style={{ marginBottom: 22 }}>
            Version history
          </h2>
          <p>
            Every role shipped a new version of me. Open any entry to see what
            changed.
          </p>
        </div>

        <div className="panel">
          <div className="panel-top">
            <span>Nikhil&apos;s journey</span>
            <small>5 versions</small>
          </div>

          <div
            className="ver ver-static"
            style={{ "--c": "var(--mint)" } as CSSProperties}
          >
            <div className="head">
              <span className="role">Building &amp; exploring</span>
              <span className="when">Now</span>
              <span className="org">
                Latest: Enterprise RAG systems and AI agents
              </span>
            </div>
          </div>

          {experience.map((job) => (
            <details
              className="ver"
              style={{ "--c": `var(--${job.color})` } as CSSProperties}
              key={`${job.org}-${job.role}`}
              open={job.open}
            >
              <summary>
                <span className="role">
                  {job.role}
                  {job.current ? <span className="badge">Current</span> : null}
                </span>
                <span className="when">{job.when}</span>
                <span className="org">
                  {job.org} · {job.location}
                </span>
                <span className="tog">
                  <span className="o">Show changes</span>
                  <span className="c">Hide changes</span>
                </span>
              </summary>
              <ul className="changes">
                {job.changes.map((change) => (
                  <li key={change}>{change}</li>
                ))}
              </ul>
              <ul className="tools" aria-label="Stack">
                {job.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </details>
          ))}

          <div
            className="ver ver-static"
            style={{ "--c": `var(--${education.color})` } as CSSProperties}
          >
            <div className="head">
              <span className="role">{education.role}</span>
              <span className="when">{education.when}</span>
              <span className="org">
                {education.org} · {education.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
