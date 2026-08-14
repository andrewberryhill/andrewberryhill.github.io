import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";
import { sitePath } from "../site-paths";

export const metadata: Metadata = {
  title: "About | Andrew Berryhill",
  description: "About economist Andrew Berryhill.",
};

export default function ShortBioPage() {
  return (
    <main>
      <SiteHeader current="short-bio" />
      <div className="inner-page bio-page">
        <header className="page-heading">
          <h1>About</h1>
        </header>

        <div className="bio-layout">
          <div className="bio-copy">
            <h2>Professional Bio</h2>
            <p><em>For talks, conferences, and other introductions.</em></p>
            <p>
              Andrew Berryhill is an Assistant Professor of Economics at Rocky Mountain College in Billings, Montana. He received his PhD in Economics from Indiana University in 2025. His research examines the political economy of fiscal policy, particularly how political incentives shape the design and effectiveness of national fiscal rules. His work lies at the intersection of political economy, public finance, and macroeconomics.
            </p>

            <h2>Personal</h2>
            <p>
              Andrew grew up primarily in Houston and has lived throughout the South, Midwest, and West. He now lives in Billings with his wife, Christine, and their two sons.
            </p>
            <p>
              Golf remains an important part of Andrew&apos;s life. After competing collegiately, he now coaches a local high school team and continues to enjoy playing. Away from the course, he likes to cook, browse used bookstores, and spend time with his family.
            </p>
          </div>
          <div className="bio-portrait">
            <img src={sitePath("/andrew-berryhill.jpg")} alt="Andrew Berryhill" width="1280" height="2048" />
          </div>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
