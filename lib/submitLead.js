const DEFAULT_WEBHOOK_URL =
  'https://nityavali.com/api/webhooks/knord/web-form';

function str(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function pickUtms(body) {
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  const utms = {};
  for (const key of keys) {
    const value = str(body[key]);
    if (value) utms[key] = value;
  }
  return utms;
}

export function normalizeLead(body = {}) {
  const name = str(body.name || body.fullName);
  const organization = str(body.organization || body.company);
  const email = str(body.email);
  const phone = str(body.phone || body.mobile);
  const city = str(body.city);
  const message = str(body.message);
  const pageUrl = str(body.pageUrl);
  const externalId = str(body.externalId);

  return {
    name,
    organization,
    email,
    phone,
    city,
    message,
    pageUrl,
    externalId,
    ...pickUtms(body),
  };
}

export function compactLead(lead) {
  return Object.fromEntries(
    Object.entries(lead).filter(([, value]) => value !== ''),
  );
}

export function validateLead(lead) {
  const hasIdentity = Boolean(
    lead.name || lead.organization || lead.email || lead.phone,
  );
  if (!hasIdentity) {
    return 'Please add your name or company.';
  }
  if (!lead.email && !lead.phone) {
    return 'Please add a work email or phone number.';
  }
  return null;
}

export async function submitLead(body, env = process.env) {
  const lead = compactLead(normalizeLead(body));
  const error = validateLead(lead);
  if (error) {
    return { status: 400, body: { error } };
  }

  const url = str(env.NITYAVALI_WEBHOOK_URL) || DEFAULT_WEBHOOK_URL;
  const secret = str(env.NITYAVALI_WEBHOOK_SECRET);
  if (!secret) {
    console.error('NITYAVALI_WEBHOOK_SECRET is not configured');
    return {
      status: 503,
      body: { error: 'Lead capture is not configured yet.' },
    };
  }

  if (!lead.externalId) {
    lead.externalId = crypto.randomUUID();
  }

  let response;
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Webhook-Secret': secret,
      },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(15000),
    });
  } catch {
    console.error('Nityavali webhook request failed');
    return {
      status: 502,
      body: { error: 'Could not send your request. Please try again.' },
    };
  }

  if (!response.ok) {
    console.error('Nityavali webhook failed', response.status);
    return {
      status: 502,
      body: { error: 'Could not send your request. Please try again.' },
    };
  }

  return { status: 200, body: { ok: true } };
}
