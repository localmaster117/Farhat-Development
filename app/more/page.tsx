import { MoreList } from "@/components/editorial/MoreList";
import { SiteHeader } from "@/components/SiteHeader";
import { getAllMoreItems } from "@/data/more";

export default function MorePage() {
  const items = getAllMoreItems();

  return (
    <main className="page-shell page-shell--content more-page">
      <SiteHeader />
      <section className="more-page__intro">
        <h1>More</h1>
      </section>

      <MoreList items={items} />
    </main>
  );
}
