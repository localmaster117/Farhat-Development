import Image from "next/image";
import Link from "next/link";
import type { UpdateItem } from "@/data/updates";

type UpdatesStripProps = {
  items: UpdateItem[];
};

export function UpdatesStrip({ items }: UpdatesStripProps) {
  return (
    <section className="updates-strip">
      <div className="page-shell">
        <div className="updates-strip__heading">
          <p className="section-label">More</p>
        </div>
        <div className="updates-strip__grid">
          {items.map((item) => {
            const content = (
              <>
                {item.image ? (
                  <div className="updates-card__media">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 25vw"
                    />
                  </div>
                ) : null}
                <div className="updates-card__body">
                  <p className="updates-card__category">{item.category}</p>
                  <h3>{item.title}</h3>
                </div>
              </>
            );

            return item.external ? (
              <a
                key={item.slug}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="updates-card"
              >
                {content}
              </a>
            ) : (
              <Link key={item.slug} href={item.href} className="updates-card">
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
