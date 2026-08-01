const basePath = process.env.NODE_ENV === "production" ? "/academic-website" : "";

export function sitePath(path: string) {
  if (path === "/") {
    return `${basePath}/`;
  }

  const hasFileExtension = /\.[a-z0-9]+$/i.test(path);
  const normalizedPath = hasFileExtension || path.endsWith("/") ? path : `${path}/`;
  return `${basePath}${normalizedPath}`;
}
