import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { getInternalMoreItems, getMoreItemById } from "@/data/more";

type MoreDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getInternalMoreItems().map((item) => ({ slug: item.id }));
}

export async function generateMetadata({
  params
}: MoreDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getMoreItemById(slug);

  if (!item || item.sourceType !== "internal") {
    return {};
  }

  return {
    title: `${item.title} | Farhat Development`,
    description: item.excerpt
  };
}

export default async function MoreDetailPage({ params }: MoreDetailPageProps) {
  const { slug } = await params;
  const item = getMoreItemById(slug);

  if (!item || item.sourceType !== "internal") {
    notFound();
  }

  return (
    <main className="page-shell page-shell--content page-shell--project">
      <SiteHeader />

      <section className="project-hero">
        <Link href="/more" className="back-link">
          More
        </Link>
        <div className="project-hero__top">
          <div>
            <p className="section-label">{item.category}</p>
            <h1>{item.title}</h1>
          </div>
        </div>
        <p className="project-description">{item.excerpt}</p>
      </section>

      <div className="project-image">
        <Image src={item.image} alt={item.title} fill priority sizes="100vw" />
      </div>

      {item.body?.length ? (
        <section className="project-content project-content--single editorial-detail">
          {item.body.map((paragraph) => (
            <p key={paragraph} className="project-description">
              {paragraph}
            </p>
          ))}
        </section>
      ) : null}
    </main>
  );
}
