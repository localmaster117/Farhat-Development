export type MoreSourceType = "internal" | "external";

export type MoreItem = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  href: string;
  sourceType: MoreSourceType;
  featured: boolean;
  order: number;
  body?: string[];
};
