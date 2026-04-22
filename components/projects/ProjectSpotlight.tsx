"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  getProjectCardMeta,
  getProjectHref
} from "@/data/projects";
import type { Project } from "@/types/project";

type ProjectSpotlightProps = {
  projects: Project[];
  variant?: "home" | "developments";
};

export function ProjectSpotlight({
  projects,
  variant = "home"
}: ProjectSpotlightProps) {
  const [activeId, setActiveId] = useState(projects[0]?.id);
  const activeProject =
    projects.find((project) => project.id === activeId) ?? projects[0];

  return (
    <section
      className={`home-projects${
        variant === "developments" ? " home-projects--developments" : ""
      }`}
    >
      <div className="home-projects__background">
        {projects.map((project) => (
          <Image
            key={project.id}
            src={project.heroImage}
            alt={project.name}
            fill
            priority={project.id === activeProject.id}
            sizes="100vw"
            className={`home-projects__bg-image${
              project.id === activeProject.id ? " is-active" : ""
            }`}
          />
        ))}
        <div className="home-projects__background-overlay" />
      </div>

      <div className="page-shell home-projects__inner">
        <div className="home-projects__list">
          {projects.map((project) => {
            const isActive = project.id === activeProject.id;

            return (
              <Link
                key={project.id}
                href={getProjectHref(project)}
                className={`home-project-item${isActive ? " is-active" : ""}`}
                onMouseEnter={() => setActiveId(project.id)}
                onFocus={() => setActiveId(project.id)}
              >
                <h3>{project.name}</h3>
                <p>{getProjectCardMeta(project)}</p>
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
                key={project.id}
                className={`home-projects__copy-item${
                  project.id === activeProject.id ? " is-active" : ""
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
          <Link key={project.id} href={getProjectHref(project)} className="home-projects__mobile-item">
            <h3>{project.name}</h3>
            <p>{getProjectCardMeta(project)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
