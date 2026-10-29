import type { CSSProperties } from "react";
import type { Project } from "@/data/portfolio";
import ProjectPreview from "./ProjectPreview";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className={`proj t-${project.theme}`}
      style={{ "--i": index } as CSSProperties}
      id={`p-${project.slug}`}
    >
      <a className="tab" href={`#p-${project.slug}`}>
        {project.tab}
      </a>
      <div className="proj-body">
        <div>
          <h3>{project.title}</h3>
          <p className="desc">{project.desc}</p>
          <p className="learn-h">What I learned</p>
          <p className="learn">{project.learn}</p>
          <ul className="tools" aria-label="Built with">
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          <div className="links">
            {project.links.map((link) => (
              <a
                className={`btn ${link.variant}`}
                href={link.href}
                key={link.label}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <figure className="shot">
          <span className="tape" aria-hidden="true" />
          <ProjectPreview image={project.image} site={project.site} />
        </figure>
      </div>
    </article>
  );
}
