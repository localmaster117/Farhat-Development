import Image from "next/image";
import Link from "next/link";
import type { MoreItem } from "@/types/more";

type MoreListProps = {
  items: MoreItem[];
};

export function MoreList({ items }: MoreListProps) {
  return (
    <section className="more-list">
      {items.map((item) => (
        <article key={item.id} id={item.id} className="more-item">
          <div className="more-item__image">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 1100px) 100vw, 44vw"
            />
          </div>
          <div className="more-item__content">
            <p className="section-label">{item.category}</p>
            <h2>{item.title}</h2>
            <p className="more-item__excerpt">{item.excerpt}</p>
            <Link
              href={item.href}
              target={item.sourceType === "external" ? "_blank" : undefined}
              rel={item.sourceType === "external" ? "noreferrer" : undefined}
            >
              {item.sourceType === "external" ? "open link" : "see more"}
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
