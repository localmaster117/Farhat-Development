import { ProjectSpotlight } from "@/components/projects/ProjectSpotlight";
import { SiteHeader } from "@/components/SiteHeader";
import { getAllProjects } from "@/data/projects";

export default function DevelopmentsPage() {
  const projects = getAllProjects();

  return (
    <main className="developments-shell">
      <SiteHeader theme="light" overlay />
      <ProjectSpotlight projects={projects} variant="developments" />
    </main>
  );
}
