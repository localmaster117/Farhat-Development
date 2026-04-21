import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectListItemProps = {
  project: Project;
};

export function ProjectListItem({ project }: ProjectListItemProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-list-item">
      <div className="project-list-item__main">
        <h3>{project.name}</h3>
        <p>{project.location}</p>
      </div>
      <div className="project-list-item__meta">
        <span>{project.status}</span>
        <span>{project.year}</span>
      </div>
    </Link>
  );
}
