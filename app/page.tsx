import { SiteFooter, SiteHeader } from "./site-chrome";
import { sitePath } from "./site-paths";

export default function Home() {
  return (
    <main>
      <SiteHeader current="home" />

      <div className="page-shell">
        <section className="welcome" aria-labelledby="welcome-heading">
          <div className="portrait-frame">
            <img
              src={sitePath("/andrew-berryhill.jpg")}
              alt="Dr. Andrew Berryhill"
              width="1280"
              height="2048"
            />
          </div>

          <div className="welcome-copy">
            <h1 id="welcome-heading">Welcome</h1>
            <div className="title-rule" />
            <p>
              I am an Assistant Professor of Economics at Rocky Mountain College. I received my PhD in Economics from Indiana University in 2025.
            </p>
            <p>
              My fields are political economy, public finance, macroeconomics, and international economics.
            </p>
            <p>
              My current research focuses on national fiscal rules and how political incentives affect their design, implementation, and effectiveness.
            </p>
            <div className="welcome-actions">
              <a href={sitePath("/research")}>View Research</a>
              <a href={sitePath("/andrew-berryhill-cv.pdf")} target="_blank" rel="noreferrer">View CV</a>
              <a href={sitePath("/teaching")}>View Teaching</a>
              <a href={sitePath("/short-bio")}>View Short Bio</a>
            </div>
            <p className="contact-line">
              Email: <a href="mailto:andrew.berryhill@rocky.edu">andrew.berryhill@rocky.edu</a>
            </p>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
