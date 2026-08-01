import type { Metadata } from "next";
import "./globals.css";

const title = "Dr. Andrew Berryhill | Economist";
const description =
  "Andrew Berryhill is an Assistant Professor of Economics at Rocky Mountain College whose research focuses on political economy, public finance, and national fiscal rules.";
const publicSite = "https://andrewberryhill.github.io/academic-website";
const assetBase = process.env.NODE_ENV === "production" ? "/academic-website" : "";

export const metadata: Metadata = {
  metadataBase: new URL(publicSite),
  title,
  description,
  icons: {
    icon: `${assetBase}/favicon.png`,
    shortcut: `${assetBase}/favicon.png`,
    apple: `${assetBase}/favicon.png`,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: publicSite,
    images: [
      {
        url: `${publicSite}/og.png`,
        width: 1536,
        height: 1024,
        alt: "Dr. Andrew Berryhill, Economist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${publicSite}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
