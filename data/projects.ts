import type { Project } from "@/types/project";

export const homepageVideo =
  "https://videos.pexels.com/video-files/4770380/4770380-hd_1920_1080_25fps.mp4";
export const aboutImage = "/images/projects/shared/about-image.svg";

export const projects: Project[] = [
  {
    // Unique route id used for /projects/[slug]
    id: "farhat-i",
    // Public project name
    name: "Farhat I",
    // Project location shown in cards and pages
    location: "Raouche, Beirut",
    // Project phase
    status: "Completed" as const,
    // Completion year if available, otherwise use an em dash
    year: "—",
    // Short paragraph used across listings and project pages
    description:
      "A completed Raouche building with a measured frontage, durable exterior language, and a quieter residential presence.",
    // Primary project image
    heroImage: "/images/projects/farhat-i/hero.svg",
    // Supporting images shown in the gallery grid
    gallery: [
      "/images/projects/farhat-i/gallery-1.svg",
      "/images/projects/farhat-i/gallery-2.svg"
    ],
    // External project website if one exists
    websiteUrl: undefined,
    // Show in the homepage spotlight module
    featured: false,
    // Controls display order across the site
    order: 1
  },
  {
    id: "farhat-ii",
    name: "Farhat II",
    location: "Raouche, Beirut",
    status: "Completed" as const,
    year: "—",
    description:
      "A later Raouche address with deeper balconies, a calmer facade rhythm, and a more contemporary residential envelope.",
    heroImage: "/images/projects/farhat-ii/hero.svg",
    gallery: [
      "/images/projects/farhat-ii/gallery-1.svg",
      "/images/projects/farhat-ii/gallery-2.svg"
    ],
    websiteUrl: undefined,
    featured: false,
    order: 2
  },
  {
    id: "palms-tower",
    name: "Palms Tower",
    location: "Koreytem, Beirut",
    status: "In Progress" as const,
    year: "—",
    description:
      "An active tower project in Koreytem with a stronger vertical street presence and a more focused public identity.",
    heroImage: "/images/projects/palms-tower/hero.svg",
    gallery: [
      "/images/projects/palms-tower/gallery-1.svg",
      "/images/projects/palms-tower/gallery-2.svg"
    ],
    websiteUrl: "https://palmstower.com/",
    featured: true,
    order: 3
  },
  {
    id: "hamra",
    name: "Hamra",
    location: "Hamra, Beirut",
    status: "In Progress" as const,
    year: "—",
    description:
      "A compact residential building calibrated to a dense Beirut frontage and a more compressed urban grain.",
    heroImage: "/images/projects/hamra/hero.svg",
    gallery: [
      "/images/projects/hamra/gallery-1.svg",
      "/images/projects/hamra/gallery-2.svg"
    ],
    websiteUrl: undefined,
    featured: true,
    order: 4
  },
  {
    id: "corniche-el-nahr",
    name: "Corniche El Nahr",
    location: "Corniche El Nahr, Beirut",
    status: "Planned" as const,
    year: "—",
    description:
      "A planned project at a larger urban scale, extending the portfolio into a more infrastructural city condition.",
    heroImage: "/images/projects/corniche-el-nahr/hero.svg",
    gallery: [
      "/images/projects/corniche-el-nahr/gallery-1.svg",
      "/images/projects/corniche-el-nahr/gallery-2.svg"
    ],
    websiteUrl: undefined,
    featured: true,
    order: 5
  },
  {
    id: "medawar",
    name: "Medawar",
    location: "Medawar, Beirut",
    status: "Planned" as const,
    year: "—",
    description:
      "A planned project shaped by a corner condition, a tighter facade rhythm, and a more working urban context.",
    heroImage: "/images/projects/medawar/hero.svg",
    gallery: [
      "/images/projects/medawar/gallery-1.svg",
      "/images/projects/medawar/gallery-2.svg"
    ],
    websiteUrl: undefined,
    featured: false,
    order: 6
  }
].sort((a, b) => a.order - b.order);

export function getAllProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getHomepageProjects(limit = 3) {
  return getFeaturedProjects().slice(0, limit);
}

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

export function getProjectHref(project: Project) {
  return `/projects/${project.id}`;
}

export function getProjectWebsiteHref(project: Project) {
  return project.websiteUrl;
}

export function getProjectCardMeta(project: Project) {
  return `${project.location} / ${project.status}`;
}

export function getProjectCtaLabel(project: Project) {
  return "View Project";
}

export function getRelatedProjects(id: string, limit = 2) {
  return projects.filter((project) => project.id !== id).slice(0, limit);
}
