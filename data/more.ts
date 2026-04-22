import type { MoreItem } from "@/types/more";

export const moreItems: MoreItem[] = [
  {
    // Unique entry id used for internal detail routes
    id: "palms-tower-online",
    // Entry title
    title: "Palms Tower online",
    // Category label shown in listings
    category: "Project",
    // Short excerpt for the More page
    excerpt:
      "A dedicated project site for the active tower with a tighter presentation of the building.",
    // Entry thumbnail image
    image: "/images/more/palms-tower-online.svg",
    // Internal or external destination
    href: "https://palmstower.com/",
    // Link behavior
    sourceType: "external" as const,
    // Show in homepage More preview
    featured: true,
    // Controls listing order
    order: 1
  },
  {
    id: "image-direction",
    title: "Image direction",
    category: "Editorial",
    excerpt:
      "The public image is shifting toward exterior views, stronger street presence, and a more disciplined image language.",
    image: "/images/more/image-direction.svg",
    href: "/more/image-direction",
    sourceType: "internal" as const,
    featured: true,
    order: 2,
    body: [
      "The public presentation is moving away from generic lifestyle imagery and toward a more disciplined exterior image set.",
      "The emphasis stays on facades, frontage, balconies, and the relationship between each building and its surrounding street."
    ]
  },
  {
    id: "hamra-site-note",
    title: "Hamra site note",
    category: "In Progress",
    excerpt:
      "Work continues on a compact residential building calibrated to a dense Beirut frontage.",
    image: "/images/more/hamra-site-note.svg",
    href: "/more/hamra-site-note",
    sourceType: "internal" as const,
    featured: true,
    order: 3,
    body: [
      "Hamra is being developed as a compact residential project shaped by its denser frontage condition and tighter urban grain.",
      "Current work is focused on massing clarity, street presence, and a calmer public face."
    ]
  },
  {
    id: "corniche-el-nahr-note",
    title: "Corniche El Nahr note",
    category: "Planned",
    excerpt:
      "A planned project at a larger urban scale, extending the portfolio into a more infrastructural city condition.",
    image: "/images/more/corniche-el-nahr-note.svg",
    href: "/more/corniche-el-nahr-note",
    sourceType: "internal" as const,
    featured: true,
    order: 4,
    body: [
      "Corniche El Nahr extends the portfolio into a larger-scale urban condition with heavier movement and longer frontage lines.",
      "The project is being positioned through its scale, edge condition, and stronger relationship to city infrastructure."
    ]
  }
].sort((a, b) => a.order - b.order);

export function getAllMoreItems() {
  return moreItems;
}

export function getFeaturedMoreItems(limit?: number) {
  const featuredItems = moreItems.filter((item) => item.featured);
  return typeof limit === "number" ? featuredItems.slice(0, limit) : featuredItems;
}

export function getHomepageMoreItems(limit = 4) {
  return getFeaturedMoreItems(limit);
}

export function getMoreItemById(id: string) {
  return moreItems.find((item) => item.id === id);
}

export function getInternalMoreItems() {
  return moreItems.filter((item) => item.sourceType === "internal");
}
