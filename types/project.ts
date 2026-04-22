export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export type Project = {
  id: string;
  name: string;
  location: string;
  status: ProjectStatus;
  year: string;
  description: string;
  heroImage: string;
  gallery: string[];
  websiteUrl?: string;
  featured: boolean;
  order: number;
};
