import Image from "next/image";
import { HomeProjectsShowcase } from "@/components/HomeProjectsShowcase";
import { SiteHeader } from "@/components/SiteHeader";
import { UpdatesStrip } from "@/components/UpdatesStrip";
import { getHomeSpotlightProjects, homepageVideo } from "@/data/projects";
import { updates } from "@/data/updates";

export default function HomePage() {
  const spotlightProjects = getHomeSpotlightProjects();

  return (
    <main className="home-shell">
      <SiteHeader theme="light" overlay />

      <section className="hero hero--video">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80"
        >
          <source src={homepageVideo} type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__content page-shell">
          <h1>
            <span className="hero__title-strong">Farhat</span>{" "}
            <span className="hero__title-light">Development</span>
          </h1>
        </div>
      </section>

      <HomeProjectsShowcase projects={spotlightProjects} />

      <UpdatesStrip items={updates.slice(0, 4)} />
    </main>
  );
}
