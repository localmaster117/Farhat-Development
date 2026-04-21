import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={project.externalUrl ?? `/projects/${project.slug}`}
      target={project.externalUrl ? "_blank" : undefined}
      rel={project.externalUrl ? "noreferrer" : undefined}
      className="project-card"
    >
      <div className="project-card__media">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>
      <div className="project-card__body">
        <h3>{project.name}</h3>
        <p className="project-card__meta">
          {project.location} / {project.status} / {project.year}
        </p>
      </div>
    </Link>
  );
}
