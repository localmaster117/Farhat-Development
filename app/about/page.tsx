import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { aboutImage } from "@/data/projects";

export default function AboutPage() {
  return (
    <main className="page-shell page-shell--content about-shell">
      <SiteHeader />
      <section className="about-page">
        <div className="about-page__layout">
          <div className="about-page__image">
            <Image
              src={aboutImage}
              alt="Architectural exterior related to Farhat Development"
              fill
              sizes="50vw"
            />
          </div>
          <div className="about-page__intro">
            <h1>Farhat Development works across a focused residential portfolio in Beirut.</h1>
            <div className="about-page__intro-copy">
              <p className="body-copy">
                The portfolio spans completed buildings in Raouche, active
                sites, and planned developments elsewhere in the city.
              </p>
              <p className="body-copy">
                The work is presented with an emphasis on street presence,
                exterior character, and a more disciplined architectural point
                of view.
              </p>
            </div>
          </div>
        </div>

        <div className="about-page__lower">
          <div className="about-page__block">
            <p className="section-label">WORKING METHOD</p>
            <p className="body-copy">
              Work is kept compact and direct. Attention is placed on location,
              frontage, exterior character, and the clarity of each building&apos;s
              public presentation.
            </p>
          </div>
          <div className="about-page__block">
            <h2>Get in touch.</h2>
            <p className="body-copy">
              For project information and general inquiries:
            </p>
            <a href="mailto:info@farhatdevelopment.com">
              info@farhatdevelopment.com
            </a>
            <a href="tel:+9611700000">+961 1 700 000</a>
          </div>
        </div>

        <div className="about-page__map">
          <div className="about-page__map-copy">
            <p className="section-label">OFFICE</p>
            <p className="body-copy">Beirut, Lebanon</p>
          </div>
          <div className="about-page__map-frame">
            <Image
              src="/location-diagram.svg"
              alt="Office location diagram for Beirut, Lebanon"
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
