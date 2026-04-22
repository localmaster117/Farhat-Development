import { MoreCard } from "@/components/editorial/MoreCard";
import { ProjectSpotlight } from "@/components/projects/ProjectSpotlight";
import { SiteHeader } from "@/components/SiteHeader";
import { getHomepageMoreItems } from "@/data/more";
import { getHomepageProjects, homepageVideo } from "@/data/projects";

export default function HomePage() {
  const spotlightProjects = getHomepageProjects(3);
  const featuredMoreItems = getHomepageMoreItems(4);

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
          <h1>A Beirut residential developer working across a focused urban portfolio.</h1>
        </div>
      </section>

      <section className="home-section-heading">
        <div className="page-shell">
          <p className="section-label">Selected Developments</p>
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
