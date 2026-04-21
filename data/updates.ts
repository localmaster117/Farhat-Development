export type UpdateItem = {
  slug: string;
  title: string;
  category: string;
  description: string;
  href: string;
  external?: boolean;
  image?: string;
};

export const updates: UpdateItem[] = [
  {
    slug: "palms-tower-site",
    title: "Palms Tower online",
    category: "Project",
    description:
      "A dedicated project site for the active tower with a tighter presentation of the building.",
    href: "https://palmstower.com/",
    external: true,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
  },
  {
    slug: "identity-shift",
    title: "Image direction",
    category: "Editorial",
    description:
      "The public image is shifting toward exterior views, stronger street presence, and a more disciplined image language.",
    href: "/more#identity-shift",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1600&q=80"
  },
  {
    slug: "hamra-update",
    title: "Hamra site note",
    category: "In Progress",
    description:
      "Work continues on a compact residential building calibrated to a dense Beirut frontage.",
    href: "/more#hamra-update",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80"
  },
  {
    slug: "corniche-note",
    title: "Corniche El Nahr note",
    category: "Planned",
    description:
      "A planned project at a larger urban scale, extending the portfolio into a more infrastructural city condition.",
    href: "/more#corniche-note",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80"
  },
  {
    slug: "portfolio-identity",
    title: "Portfolio identity in progress",
    category: "Editorial",
    description:
      "The public presentation is being refined around clearer project hierarchy, stronger imagery, and more controlled copy.",
    href: "/more#portfolio-identity",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80"
  }
];
