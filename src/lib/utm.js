const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const STORAGE_KEY = 'knord-utm';

function readStored() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

export function initUtms() {
  const params = new URLSearchParams(window.location.search);
  const incoming = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) incoming[key] = value;
  }
  if (Object.keys(incoming).length) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(incoming));
    return incoming;
  }
  return readStored();
}

export function getUtms() {
  return readStored();
}

export function withUtm(path, fallback = {}) {
  const utms = { ...fallback, ...getUtms() };
  const hashIndex = path.indexOf('#');
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
  const withoutHash = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const url = new URL(withoutHash, window.location.origin);
  for (const [key, value] of Object.entries(utms)) {
    if (value) url.searchParams.set(key, value);
  }
  return url.pathname + url.search + hash;
}
