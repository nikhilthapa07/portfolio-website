import ProjectCard from "@/components/ProjectCard";
import ProjectStack from "@/components/ProjectStack";
import { projects } from "@/data/portfolio";

export default function Work() {
  return (
    <section className="sec" id="work" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="sec-head">
          <h2 className="h2">Things I&apos;ve built</h2>
          <p className="note">
            <svg
              viewBox="0 0 50 34"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M46 28C34 30 18 26 8 10" />
              <path d="M4 18l3-10 10 2" />
            </svg>
            three launches, one with AI inside
          </p>
        </div>

        <ProjectStack>
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              index={index}
              key={project.slug}
            />
          ))}
        </ProjectStack>
      </div>
    </section>
  );
}
