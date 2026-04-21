import { HomeProjectsShowcase } from "@/components/HomeProjectsShowcase";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/data/projects";

export default function DevelopmentsPage() {
  return (
    <main className="developments-shell">
      <SiteHeader theme="light" overlay />
      <HomeProjectsShowcase projects={projects} variant="developments" />
    </main>
  );
}
