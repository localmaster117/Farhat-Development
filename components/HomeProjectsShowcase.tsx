"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/data/projects";

type HomeProjectsShowcaseProps = {
  projects: Project[];
  variant?: "home" | "developments";
};

export function HomeProjectsShowcase({
  projects,
  variant = "home"
}: HomeProjectsShowcaseProps) {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug);
  const activeProject =
    projects.find((project) => project.slug === activeSlug) ?? projects[0];

  return (
    <section
      className={`home-projects${
        variant === "developments" ? " home-projects--developments" : ""
      }`}
    >
      <div className="home-projects__background">
        {projects.map((project) => (
          <Image
            key={project.slug}
            src={project.heroImage}
            alt={project.name}
            fill
            priority={project.slug === activeProject.slug}
            sizes="100vw"
            className={`home-projects__bg-image${
              project.slug === activeProject.slug ? " is-active" : ""
            }`}
          />
        ))}
        <div className="home-projects__background-overlay" />
      </div>

      <div className="page-shell home-projects__inner">
        <div className="home-projects__list">
          {projects.map((project) => {
            const isActive = project.slug === activeProject.slug;

            return (
              <Link
                key={project.slug}
                href={project.externalUrl ?? `/projects/${project.slug}`}
                target={project.externalUrl ? "_blank" : undefined}
                rel={project.externalUrl ? "noreferrer" : undefined}
                className={`home-project-item${isActive ? " is-active" : ""}`}
                onMouseEnter={() => setActiveSlug(project.slug)}
                onFocus={() => setActiveSlug(project.slug)}
              >
                <h3>{project.shortName}</h3>
                <p>
                  {project.summary ??
                    `${project.location}${project.year ? ` / ${project.year}` : ""}`}
                </p>
              </Link>
            );
          })}
        </div>

        {variant === "home" ? (
          <div className="home-projects__copy">
            <div className="home-projects__positioning">
              <p>
                A Beirut residential developer working across a compact urban
                portfolio.
              </p>
            </div>
            {projects.map((project) => (
              <div
                key={project.slug}
                className={`home-projects__copy-item${
                  project.slug === activeProject.slug ? " is-active" : ""
                }`}
              >
                <p className="home-projects__copy-meta">{project.status}</p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="page-shell home-projects__mobile">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={project.externalUrl ?? `/projects/${project.slug}`}
            target={project.externalUrl ? "_blank" : undefined}
            rel={project.externalUrl ? "noreferrer" : undefined}
            className="home-projects__mobile-item"
          >
            <h3>{project.shortName}</h3>
            <p>
              {project.summary ??
                `${project.status} / ${project.location}${project.year ? ` / ${project.year}` : ""}`}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
