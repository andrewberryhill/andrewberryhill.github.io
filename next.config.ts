import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const repositoryPath = "/academic-website";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProduction ? repositoryPath : undefined,
  assetPrefix: isProduction ? `${repositoryPath}/` : undefined,
};

export default nextConfig;
