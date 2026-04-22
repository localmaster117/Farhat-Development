import Image from "next/image";
import Link from "next/link";
import {
  getProjectCardMeta,
  getProjectCtaLabel,
  getProjectHref
} from "@/data/projects";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <Link href={getProjectHref(project)} className="project-card__media">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </Link>

      <div className="project-card__body">
        <p className="section-label">{project.status}</p>
        <h3>{project.name}</h3>
        <p className="project-card__meta">{getProjectCardMeta(project)}</p>
        <p className="project-card__description">{project.description}</p>
        <Link href={getProjectHref(project)} className="project-card__cta">
          {getProjectCtaLabel(project)}
        </Link>
      </div>
    </article>
  );
}
