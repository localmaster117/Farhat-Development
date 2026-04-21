export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export type Project = {
  slug: string;
  name: string;
  shortName: string;
  location: string;
  year?: string;
  status: ProjectStatus;
  unitCount: string;
  description: string;
  summary?: string;
  heroImage: string;
  heroVideo?: string;
  gallery: string[];
  featured: boolean;
  externalUrl?: string;
  externalLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "farhat-i",
    name: "Farhat I",
    shortName: "Farhat I",
    location: "Raouche, Beirut",
    year: "1961",
    status: "Completed",
    unitCount: "Residential Building",
    description:
      "A legacy Raouche building with a direct street relationship, measured frontage, and a lasting place in the portfolio.",
    summary: "Completed / Raouche, Beirut / 1961",
    heroImage:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: true
  },
  {
    slug: "farhat-ii",
    name: "Farhat II",
    shortName: "Farhat II",
    location: "Raouche, Beirut",
    status: "Completed",
    unitCount: "Residential Building",
    description:
      "A later Raouche address with deeper balconies, a quieter facade rhythm, and a more contemporary envelope.",
    summary: "Completed / Raouche, Beirut",
    heroImage:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: false
  },
  {
    slug: "palms-tower",
    name: "Palms Tower",
    shortName: "Palms Tower",
    location: "Beirut",
    status: "In Progress",
    unitCount: "Tower Development",
    description:
      "An active tower project in Koreytem with a stronger vertical street presence and a dedicated project site.",
    summary: "In Progress / Beirut",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80",
    heroVideo:
      "https://videos.pexels.com/video-files/7578552/7578552-hd_1920_1080_25fps.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: true,
    externalUrl: "https://palmstower.com/",
    externalLabel: "View dedicated project site"
  },
  {
    slug: "hamra",
    name: "Hamra",
    shortName: "Hamra",
    location: "Beirut",
    status: "In Progress",
    unitCount: "Residential Building",
    description:
      "A compact in-progress building in Hamra with durable materials and a calibrated relationship to a dense frontage.",
    summary: "In Progress / Beirut",
    heroImage:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: true
  },
  {
    slug: "corniche-el-nahr",
    name: "Corniche El Nahr",
    shortName: "Corniche El Nahr",
    location: "Beirut",
    status: "Planned",
    unitCount: "Planned Residential Building",
    description:
      "A planned residential address at a larger urban scale, with a stronger frontage and a more infrastructural context.",
    summary: "Planned / Beirut",
    heroImage:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: true
  },
  {
    slug: "medawar",
    name: "Medawar",
    shortName: "Medawar",
    location: "Beirut",
    status: "Planned",
    unitCount: "Planned Residential Building",
    description:
      "A planned Medawar project shaped by a corner condition, tighter planning, and a more working urban context.",
    summary: "Planned / Beirut",
    heroImage:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: false
  }
];

export const homepageVideo =
  "https://videos.pexels.com/video-files/4770380/4770380-hd_1920_1080_25fps.mp4";

export const aboutImage =
  "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2000&q=80";

export const editorialBandImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80";

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByStatus(status: ProjectStatus) {
  return projects.filter((project) => project.status === status);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getHomeSpotlightProjects() {
  const spotlightOrder = ["palms-tower", "hamra", "corniche-el-nahr"];

  return spotlightOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project));
}
