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
            <p className="research-lead">
              My research centers on Political Economy, Public Finance, and Macroeconomics, focusing on fiscal rules and how political incentives affect their design, adoption, and effectiveness.
            </p>
            <p>I ask why politicians would adopt constraints on their own future choices and what determines whether those constraints bind. I do theory as well as applied work.</p>
            <p>I have three main lines of research:</p>
            <ol className="research-lines" type="i">
              <li>the design and adoption of fiscal rules and their escape clauses,</li>
              <li>the political origins of budget and tax institutions, and</li>
              <li>institutions, policy, and fiscal outcomes under crisis.</li>
            </ol>
            <div className="welcome-actions">
              <a href={sitePath("/research")}>View Research</a>
              <a href={sitePath("/andrew-berryhill-cv.pdf")} target="_blank" rel="noreferrer">View CV</a>
              <a href={sitePath("/teaching")}>View Teaching</a>
              <a href={sitePath("/short-bio")}>View About</a>
            </div>
            <p className="contact-line">
              Email: <a href="mailto:andrew.berryhill@rocky.edu">andrew.berryhill@rocky.edu</a>
            </p>
            <p className="home-affiliation">
              I am an Assistant Professor of Economics at Rocky Mountain College. I received my PhD in Economics from Indiana University in 2025.
            </p>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
