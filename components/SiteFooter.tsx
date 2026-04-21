import { ScrollTopButton } from "@/components/ScrollTopButton";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <div className="site-footer__brand-copy">
          <p className="site-footer__wordmark">Farhat Development</p>
          <p className="site-footer__touch">Get in touch</p>
          <a href="mailto:info@farhatdevelopment.com">
            info@farhatdevelopment.com
          </a>
          <a href="tel:+9611700000">+961 1 700 000</a>
          <ScrollTopButton />
        </div>
      </div>
    </footer>
  );
}
