import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

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
  const project = getProjectBySlug(slug);

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
        <div className="project-hero__top">
          <div>
            <h1>{project.name}</h1>
            <p className="project-headline">{project.location}</p>
          </div>
          <div className="project-facts">
            <p>{project.status}</p>
            <p>{project.year}</p>
            <p>{project.unitCount}</p>
          </div>
        </div>
        <p className="project-description">{project.description}</p>
        {project.externalUrl ? (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noreferrer"
            className="project-external-link"
          >
            {project.externalLabel ?? "View dedicated project site"}
          </a>
        ) : null}
      </div>

      {project.heroVideo ? (
        <div className="project-image">
          <video
            className="project-video"
            autoPlay
            muted
            loop
            playsInline
            poster={project.heroImage}
          >
            <source src={project.heroVideo} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className="project-image">
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            priority
            sizes="100vw"
          />
        </div>
      )}

      <section className="project-content project-content--single">
        <div className="project-metrics">
          <div>
            <span>Status</span>
            <strong>{project.status}</strong>
          </div>
          <div>
            <span>Year</span>
            <strong>{project.year}</strong>
          </div>
          <div>
            <span>Units</span>
            <strong>{project.unitCount}</strong>
          </div>
        </div>
      </section>

      <section className="gallery-grid">
        {project.gallery.map((image, index) => (
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
    </main>
  );
}
