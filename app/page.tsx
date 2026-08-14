import { SiteFooter, SiteHeader } from "./site-chrome";
import { sitePath } from "./site-paths";

export default function Home() {
  return (
    <main>
      <SiteHeader current="home" />

      <div className="page-shell">
        <section className="welcome" aria-labelledby="research-overview-heading">
          <div className="portrait-frame">
            <img
              src={sitePath("/andrew-berryhill.jpg")}
              alt="Andrew Berryhill"
              width="1280"
              height="2048"
            />
          </div>

          <div className="welcome-copy">
            <h1 id="research-overview-heading" className="sr-only">Research overview</h1>
            <p>
              I am an Assistant Professor of Economics at Rocky Mountain College. I received my PhD in Economics from Indiana University in 2025.
            </p>
            <p>
              My research focuses on national fiscal rules and how political incentives affect their design, implementation, and effectiveness.
            </p>
            <p>
              My primary fields are Political Economy, Public Finance, and Macroeconomics.
            </p>
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
