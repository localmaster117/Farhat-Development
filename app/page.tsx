import { MoreCard } from "@/components/editorial/MoreCard";
import { ProjectSpotlight } from "@/components/projects/ProjectSpotlight";
import { SiteHeader } from "@/components/SiteHeader";
import { getFeaturedMoreItems } from "@/data/more";
import { getFeaturedProjects, homepageVideo } from "@/data/projects";

export default function HomePage() {
  const spotlightProjects = getFeaturedProjects();
  const featuredMoreItems = getFeaturedMoreItems(4);

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
          poster="/images/projects/shared/homepage-video-poster.svg"
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

      <ProjectSpotlight projects={spotlightProjects} />

      <section className="updates-strip">
        <div className="page-shell">
          <div className="updates-strip__heading">
            <p className="section-label">More</p>
          </div>
          <div className="updates-strip__grid">
            {featuredMoreItems.map((item) => (
              <MoreCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
