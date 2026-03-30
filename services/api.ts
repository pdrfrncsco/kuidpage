const API_ORIGIN =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? 'http://localhost:8004' : '');

function joinUrl(base: string, path: string): string {
  const normalizedBase = base.replace(/\/+$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}

export const API_CONFIG = {
  origin: API_ORIGIN,
  addressesBase: joinUrl(API_ORIGIN, '/api/v1/addresses'),
  authBase: joinUrl(API_ORIGIN, '/api/v1/auth'),
  tokenRefreshUrl: joinUrl(API_ORIGIN, '/api/token/refresh/'),
};

export { joinUrl };

