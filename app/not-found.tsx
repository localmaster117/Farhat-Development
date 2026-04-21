import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="project-hero">
        <p className="section-label">Page Not Found</p>
        <h1>The requested page could not be located.</h1>
        <p className="project-headline">
          Return to the homepage to explore the current project portfolio.
        </p>
        <Link href="/" className="back-link">
          Back to home
        </Link>
      </section>
    </main>
  );
}
