import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { updates } from "@/data/updates";

export default function MorePage() {
  return (
    <main className="page-shell page-shell--content more-page">
      <SiteHeader />
      <section className="more-page__intro">
        <h1>More</h1>
      </section>

      <section className="more-list">
        {updates.map((item) => (
          <article key={item.slug} id={item.slug} className="more-item">
            {item.image ? (
              <div className="more-item__image">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1100px) 100vw, 44vw"
                />
              </div>
            ) : null}
            <div className="more-item__content">
              <p className="section-label">{item.category}</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
              >
                {item.external ? "open link" : "see more"}
                <span aria-hidden="true"> →</span>
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
