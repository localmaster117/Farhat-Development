import Image from "next/image";
import Link from "next/link";
import type { MoreItem } from "@/types/more";

type MoreCardProps = {
  item: MoreItem;
};

export function MoreCard({ item }: MoreCardProps) {
  const content = (
    <>
      <div className="updates-card__media">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 900px) 100vw, 25vw"
        />
      </div>
      <div className="updates-card__body">
        <p className="updates-card__category">{item.category}</p>
        <h3>{item.title}</h3>
      </div>
    </>
  );

  return item.sourceType === "external" ? (
    <a href={item.href} target="_blank" rel="noreferrer" className="updates-card">
      {content}
    </a>
  ) : (
    <Link href={item.href} className="updates-card">
      {content}
    </Link>
  );
}
