import { getUtms } from './utm.js';

export async function postLead(fields) {
  const payload = {
    ...fields,
    pageUrl: window.location.href,
    externalId: crypto.randomUUID(),
    ...getUtms(),
  };

  const res = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || 'Could not send your request. Please try again.');
  }
  return data;
}
