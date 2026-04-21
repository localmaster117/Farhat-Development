import Link from "next/link";

type SiteHeaderProps = {
  theme?: "dark" | "light";
  overlay?: boolean;
};

export function SiteHeader({
  theme = "dark",
  overlay = false
}: SiteHeaderProps) {
  return (
    <header
      className={[
        "site-header",
        theme === "light" ? "site-header--light" : "",
        overlay ? "site-header--overlay" : ""
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Link href="/" className="brand">
        Farhat Development
      </Link>
      <nav className="site-nav" aria-label="Primary">
        <Link href="/developments">Developments</Link>
        <Link href="/about">About</Link>
        <Link href="/more">More</Link>
      </nav>
    </header>
  );
}
