import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { SiteHeader } from "@/components/SiteHeader";
import {
  getAllProjects,
  getProjectById,
  getProjectCardMeta,
  getRelatedProjects,
  getProjectWebsiteHref
} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.name} | Farhat Development`,
    description: project.description
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);
  const relatedProjects = getRelatedProjects(slug, 2);

  if (!project) {
    notFound();
  }

  return (
    <main className="page-shell page-shell--content page-shell--project">
      <SiteHeader />

      <div className="project-hero">
        <Link href="/developments" className="back-link">
          All developments
        </Link>
        <div className="project-meta-row">
          <div>
            <span>Name</span>
            <strong>{project.name}</strong>
          </div>
          <div>
            <span>Location</span>
            <strong>{project.location}</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>{project.status}</strong>
          </div>
          <div>
            <span>Year</span>
            <strong>{project.year ?? "—"}</strong>
          </div>
        </div>
        <div className="project-hero__top">
          <div>
            <h1>{project.name}</h1>
            <p className="project-headline">{getProjectCardMeta(project)}</p>
          </div>
        </div>
        <p className="project-description">{project.description}</p>
      </div>

      <div className="project-image">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          priority
          sizes="100vw"
        />
      </div>

      <section className="gallery-grid">
        {[project.heroImage, ...project.gallery]
          .filter((image, index, images) => images.indexOf(image) === index)
          .map((image, index) => (
          <div key={image} className="gallery-grid__item">
            <Image
              src={image}
              alt={`${project.name} gallery image ${index + 1}`}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        ))}
      </section>

      <section className="project-cta-section">
        <p className="section-label">Project</p>
        {getProjectWebsiteHref(project) ? (
          <Link
            href={getProjectWebsiteHref(project)!}
            target="_blank"
            rel="noreferrer"
            className="project-external-link"
          >
            Visit Project Website
          </Link>
        ) : (
          <p className="project-cta-section__note">
            Further project information is available on request.
          </p>
        )}
      </section>

      <ProjectGrid title="Selected Developments" projects={relatedProjects} />
    </main>
  );
}
