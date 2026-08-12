import { sitePath } from "./site-paths";

type PageName = "home" | "research" | "teaching" | "short-bio";

export function SiteHeader({ current }: { current: PageName }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="site-title" href={sitePath("/")}>Andrew Berryhill</a>
        <nav aria-label="Main navigation">
          <a className={current === "home" ? "active" : ""} href={sitePath("/")}>Home</a>
          <a className={current === "research" ? "active" : ""} href={sitePath("/research")}>Research</a>
          <a className={current === "teaching" ? "active" : ""} href={sitePath("/teaching")}>Teaching</a>
          <a className={current === "short-bio" ? "active" : ""} href={sitePath("/short-bio")}>About</a>
          <a href={sitePath("/andrew-berryhill-cv.pdf")} target="_blank" rel="noreferrer">CV</a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <strong>Andrew Berryhill</strong>
          <span>Assistant Professor of Economics</span>
          <span>Rocky Mountain College</span>
        </div>
        <div className="footer-links">
          <a href="mailto:andrew.berryhill@rocky.edu">Email</a>
          <a href={sitePath("/research")}>Research</a>
          <a href={sitePath("/teaching")}>Teaching</a>
          <a href={sitePath("/short-bio")}>About</a>
          <a href={sitePath("/andrew-berryhill-cv.pdf")} target="_blank" rel="noreferrer">Curriculum Vitae</a>
        </div>
      </div>
    </footer>
  );
}
