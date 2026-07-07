export const SITE_TITLE = 'Archive';

// Prefix a path with the configured base (e.g. '/archive-www') so assets and
// links resolve correctly when served from a GitHub Pages subpath. Joins with a
// single slash regardless of whether BASE_URL has a trailing slash.
export const withBase = (path = '') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return clean ? `${base}/${clean}` : `${base}/`;
};
