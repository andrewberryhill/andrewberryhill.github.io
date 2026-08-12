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
            <p>
              Andrew Berryhill is an Assistant Professor of Economics at Rocky Mountain College in Billings, Montana. He received his PhD in Economics from Indiana University in 2025. His research interests include political economy, public finance, macroeconomics, and international economics, with a particular focus on national fiscal rules.
            </p>
            <p>
              Andrew grew up primarily in Houston, Texas, and has also lived in Louisiana, Mississippi, California, Michigan, and Indiana. He now lives in Billings with his wife, Christine, and their two sons.
            </p>
            <p>
              A former collegiate golfer, Andrew continues to enjoy the game and coaches a local high school team. He also enjoys cooking, perusing used book stores, and spending time with his family.
            </p>
            <a className="bio-cv-link" href={sitePath("/andrew-berryhill-cv.pdf")} target="_blank" rel="noreferrer">
              View curriculum vitae <span aria-hidden="true">&rarr;</span>
            </a>
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
