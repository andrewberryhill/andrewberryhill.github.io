export function sitePath(path: string) {
  if (path === "/") {
    return "/";
  }

  const hasFileExtension = /\.[a-z0-9]+$/i.test(path);
  const normalizedPath = hasFileExtension || path.endsWith("/") ? path : `${path}/`;
  return normalizedPath;
}
