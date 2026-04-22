import type { Project } from "@/types/project";
import { ProjectCard } from "@/components/projects/ProjectCard";

type ProjectGridProps = {
  title?: string;
  projects: Project[];
};

export function ProjectGrid({ title, projects }: ProjectGridProps) {
  if (!projects.length) {
    return null;
  }

  return (
    <section className="project-grid-section">
      {title ? (
        <div className="project-grid-section__header">
          <p className="section-label">{title}</p>
        </div>
      ) : null}
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
