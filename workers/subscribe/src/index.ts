/**
 * Newsletter subscription Worker.
 *
 * Endpoints:
 *   POST /subscribe         { email, honeypot? }   → sends double-opt-in confirmation email
 *   GET  /confirm?token=…                          → adds contact to Resend audience, redirects to site
 *
 * No KV / DB needed: confirmation tokens are HMAC-SHA256 signed payloads
 * with a 24h expiry. Subscriber list lives entirely in Resend.
 */

export interface Env {
  // Secrets (set via `wrangler secret put`)
  RESEND_API_KEY: string;
  RESEND_AUDIENCE_ID: string;
  JWT_SECRET: string;
  // Vars (in wrangler.toml)
  SITE_URL: string;
  FROM_EMAIL: string;
  FROM_NAME: string;
}

const ALLOWED_ORIGINS = new Set([
  'https://chunghaolee.com',
  'https://www.chunghaolee.com',
  'https://lch99310.github.io',
]);

const TOKEN_TTL_SECONDS = 60 * 60 * 24;
const RESEND_API = 'https://api.resend.com';

function corsHeaders(origin: string | null): Record<string, string> {
  const allow = origin && ALLOWED_ORIGINS.has(origin) ? origin : 'https://chunghaolee.com';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  };
}

function json(body: unknown, init: ResponseInit & { headers?: Record<string, string> } = {}): Response {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init.headers || {}) },
  });
}

function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) && s.length < 254;
}

function b64urlEncode(bytes: Uint8Array): string {
  let s = '';
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function b64urlDecode(s: string): Uint8Array {
  let t = s.replace(/-/g, '+').replace(/_/g, '/');
  while (t.length % 4) t += '=';
  const bin = atob(t);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function hmacSign(secret: string, payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
  return b64urlEncode(new Uint8Array(sig));
}

async function makeToken(secret: string, email: string): Promise<string> {
  const payload = { email, exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS };
  const payloadB64 = b64urlEncode(new TextEncoder().encode(JSON.stringify(payload)));
  const sig = await hmacSign(secret, payloadB64);
  return `${payloadB64}.${sig}`;
}

async function verifyToken(secret: string, token: string): Promise<string | null> {
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const [payloadB64, sig] = parts;
  const expected = await hmacSign(secret, payloadB64);
  if (expected.length !== sig.length) return null;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
  }
  if (diff !== 0) return null;
  try {
    const payload = JSON.parse(new TextDecoder().decode(b64urlDecode(payloadB64))) as { email?: string; exp?: number };
    if (typeof payload.email !== 'string' || typeof payload.exp !== 'number') return null;
    if (payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload.email;
  } catch {
    return null;
  }
}

function confirmEmailHTML(confirmUrl: string): string {
  return `<!DOCTYPE html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;color:#222;line-height:1.6">
  <h2 style="margin:0 0 16px;font-size:20px">Confirm your subscription / 確認訂閱</h2>
  <p>Hi! Thanks for subscribing to <strong>Chung-Hao Lee's newsletter</strong>. Please click the button below to confirm your email so I can start sending you weekly updates every Saturday.</p>
  <p>嗨!感謝訂閱 <strong>Chung-Hao Lee 的 newsletter</strong>。請點下方按鈕確認你的 email,我才能開始在每週六寄更新摘要給你。</p>
  <p style="text-align:center;margin:32px 0">
    <a href="${confirmUrl}" style="background:#0a66c2;color:#fff;padding:12px 28px;border-radius:6px;text-decoration:none;display:inline-block;font-weight:500">Confirm subscription / 確認訂閱</a>
  </p>
  <p style="font-size:12px;color:#666;margin-top:32px">If you didn't request this, you can safely ignore this email — the link expires in 24 hours.<br>如果這不是你發起的訂閱,直接忽略此信即可,連結 24 小時後失效。</p>
</body></html>`;
}

async function sendConfirmEmail(env: Env, email: string, confirmUrl: string): Promise<Response> {
  return fetch(`${RESEND_API}/emails`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `${env.FROM_NAME} <${env.FROM_EMAIL}>`,
      to: [email],
      subject: 'Confirm your subscription / 確認訂閱',
      html: confirmEmailHTML(confirmUrl),
    }),
  });
}

async function addToAudience(env: Env, email: string): Promise<Response> {
  return fetch(`${RESEND_API}/audiences/${env.RESEND_AUDIENCE_ID}/contacts`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, unsubscribed: false }),
  });
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    const origin = req.headers.get('Origin');
    const cors = corsHeaders(origin);

    // Wrap the whole handler so any uncaught throw still returns a
    // CORS-tagged response. Without this, an unexpected error would
    // surface as Cloudflare's default 500 page (no CORS headers),
    // which the browser turns into a generic "Network error" / failed
    // fetch — unhelpful for debugging.
    try {
      if (req.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: cors });
      }

      // Lightweight health check: lets you verify the Worker is reachable
      // and CORS-correct from your browser without triggering a real send.
      if (url.pathname === '/health' && req.method === 'GET') {
        return json({ ok: true, service: 'newsletter-subscribe' }, { headers: cors });
      }

      if (url.pathname === '/subscribe' && req.method === 'POST') {
        let body: { email?: string; honeypot?: string };
        try {
          body = await req.json();
        } catch {
          return json({ ok: false, error: 'bad_request' }, { status: 400, headers: cors });
        }
        // Honeypot trip → silently succeed so bots don't learn
        if (body.honeypot && body.honeypot.length > 0) {
          return json({ ok: true }, { headers: cors });
        }
        const email = (body.email || '').trim().toLowerCase();
        if (!isValidEmail(email)) {
          return json({ ok: false, error: 'invalid_email' }, { status: 400, headers: cors });
        }

        // Validate that required secrets are present so misconfigurations
        // surface as a clear error code rather than a thrown undefined ref.
        if (!env.RESEND_API_KEY || !env.JWT_SECRET) {
          console.error('missing secrets', {
            has_api_key: !!env.RESEND_API_KEY,
            has_jwt: !!env.JWT_SECRET,
          });
          return json({ ok: false, error: 'misconfigured' }, { status: 500, headers: cors });
        }

        const token = await makeToken(env.JWT_SECRET, email);
        const confirmUrl = `${url.origin}/confirm?token=${encodeURIComponent(token)}`;
        const r = await sendConfirmEmail(env, email, confirmUrl);
        if (!r.ok) {
          const errText = await r.text().catch(() => '');
          console.error('resend send failed', r.status, errText);
          return json({ ok: false, error: 'send_failed', status: r.status, detail: errText.slice(0, 200) }, { status: 502, headers: cors });
        }
        return json({ ok: true }, { headers: cors });
      }

      if (url.pathname === '/confirm' && req.method === 'GET') {
        const token = url.searchParams.get('token') || '';
        const email = await verifyToken(env.JWT_SECRET, token);
        if (!email) {
          return Response.redirect(`${env.SITE_URL}/subscribed/?error=invalid`, 302);
        }
        const r = await addToAudience(env, email);
        // 200/201 = added; 422 typically = already exists. Both are user-success.
        if (!r.ok && r.status !== 422) {
          const errText = await r.text().catch(() => '');
          console.error('resend add contact failed', r.status, errText);
          return Response.redirect(`${env.SITE_URL}/subscribed/?error=server`, 302);
        }
        return Response.redirect(`${env.SITE_URL}/subscribed/`, 302);
      }

      return new Response('Not found', { status: 404, headers: cors });
    } catch (err) {
      console.error('worker uncaught error', err);
      const detail = err instanceof Error ? err.message : String(err);
      return json({ ok: false, error: 'server_error', detail: detail.slice(0, 200) }, { status: 500, headers: cors });
    }
  },
};
