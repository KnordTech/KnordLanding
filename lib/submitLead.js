const DEFAULT_WEBHOOK_URL =
  'https://nityavali.com/api/webhooks/knord/web-form';

function str(value) {
  return typeof value === 'string' ? value.trim() : '';
}

/** Strip common paste mistakes from Vercel env values. */
function cleanSecret(value) {
  let secret = str(value);
  secret = secret.replace(/^['"]|['"]$/g, '');
  secret = secret.replace(/^Bearer\s+/i, '');
  secret = secret.replace(/^X-Webhook-Secret:\s*/i, '');
  return secret.trim();
}

/**
 * Keep the webhook on the working API host.
 * https://www.nityavali.com currently fails TLS; http:// redirects and can drop auth headers.
 */
function normalizeWebhookUrl(raw) {
  const fallback = DEFAULT_WEBHOOK_URL;
  const input = str(raw) || fallback;
  try {
    const url = new URL(input);
    if (url.hostname === 'www.nityavali.com' || url.hostname === 'nityavali.com') {
      url.hostname = 'nityavali.com';
      url.protocol = 'https:';
      if (!url.pathname || url.pathname === '/') {
        url.pathname = '/api/webhooks/knord/web-form';
      }
      // Avoid trailing-slash redirect ambiguity
      url.pathname = url.pathname.replace(/\/+$/, '') || '/';
      return url.toString();
    }
    url.protocol = 'https:';
    return url.toString();
  } catch {
    return fallback;
  }
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

async function readUpstreamMessage(response) {
  try {
    const data = await response.json();
    return str(data.message || data.error);
  } catch {
    return '';
  }
}

function mapUpstreamError(status, message) {
  if (status === 401 || /invalid webhook secret/i.test(message)) {
    return {
      status: 502,
      body: {
        error:
          'Lead capture secret is invalid. In Vercel, set NITYAVALI_WEBHOOK_SECRET to the Knord tenant web-form secret (Admin → Integrations).',
        code: 'invalid_secret',
      },
    };
  }
  if (status === 503 || /not enabled/i.test(message)) {
    return {
      status: 502,
      body: {
        error:
          'Website form capture is not enabled for the Knord tenant. Enable it in Nityavali Admin → Integrations.',
        code: 'not_enabled',
      },
    };
  }
  if (status === 409 || /duplicate value for leadcode/i.test(message)) {
    return {
      status: 502,
      body: {
        error:
          'The CRM could not assign a lead code. Please try again in a moment, or email hello@knord.tech.',
        code: 'duplicate_lead_code',
      },
    };
  }
  if (status === 404 || /tenant/i.test(message)) {
    return {
      status: 502,
      body: {
        error:
          'Knord tenant webhook was not found. Confirm tenant slug "knord" exists in Nityavali.',
        code: 'tenant_missing',
      },
    };
  }
  return {
    status: 502,
    body: {
      error: message || 'Could not send your request. Please try again.',
      code: 'upstream_error',
      upstreamStatus: status,
    },
  };
}

export async function submitLead(body, env = process.env) {
  const lead = compactLead(normalizeLead(body));
  const error = validateLead(lead);
  if (error) {
    return { status: 400, body: { error } };
  }

  const url = normalizeWebhookUrl(env.NITYAVALI_WEBHOOK_URL);
  const secret = cleanSecret(env.NITYAVALI_WEBHOOK_SECRET);
  if (!secret) {
    console.error('NITYAVALI_WEBHOOK_SECRET is not configured');
    return {
      status: 503,
      body: { error: 'Lead capture is not configured yet.', code: 'missing_secret' },
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
        Authorization: `Bearer ${secret}`,
      },
      body: JSON.stringify(lead),
      redirect: 'error',
      signal: AbortSignal.timeout(15000),
    });
  } catch (err) {
    console.error('Nityavali webhook request failed', err?.message || err);
    return {
      status: 502,
      body: {
        error:
          'Could not reach Nityavali CRM. Check NITYAVALI_WEBHOOK_URL (use https://nityavali.com/api/webhooks/knord/web-form) and try again.',
        code: 'upstream_unreachable',
      },
    };
  }

  if (!response.ok) {
    const message = await readUpstreamMessage(response);
    console.error('Nityavali webhook failed', response.status, message);
    return mapUpstreamError(response.status, message);
  }

  return { status: 200, body: { ok: true } };
}
