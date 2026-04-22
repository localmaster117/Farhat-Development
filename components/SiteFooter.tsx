import { ScrollTopButton } from "@/components/ScrollTopButton";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <div className="site-footer__brand-copy">
          <div className="site-footer__mark" aria-hidden="true">
            FD
          </div>
          <p className="site-footer__wordmark">Farhat Development</p>
          <p className="site-footer__address">Beirut, Lebanon</p>
          <a href="mailto:info@farhatdevelopment.com">
            info@farhatdevelopment.com
          </a>
          <a href="tel:+9611700000">+961 1 700 000</a>
          <a href="https://instagram.com/farhatdevelopment" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/farhat-development" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <ScrollTopButton />
        </div>
      </div>
    </footer>
  );
}
