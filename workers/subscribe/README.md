# newsletter-subscribe (Cloudflare Worker)

Receives the subscription form POST from `chunghaolee.com`, sends a
double-opt-in confirmation email via Resend, and on confirm adds the
contact to the Resend audience.

No KV / DB / state storage: tokens are HMAC-signed payloads with 24h
expiry; the subscriber list lives entirely in Resend's audience.

## Endpoints

- `POST /subscribe` — body `{ email, honeypot? }` → sends confirm email
- `GET  /confirm?token=…` → adds contact to audience, redirects to `${SITE_URL}/subscribed/`

## One-time setup

```bash
cd workers/subscribe
npm install
npx wrangler login
```

Then set the three secrets:

```bash
npx wrangler secret put RESEND_API_KEY
# paste your Resend API key (starts with re_)

npx wrangler secret put RESEND_AUDIENCE_ID
# paste the audience UUID from Resend Dashboard → Audiences

npx wrangler secret put JWT_SECRET
# paste any long random string, e.g. output of:
#   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Deploy:

```bash
npx wrangler deploy
```

The deploy output prints your Worker URL, e.g.
`https://newsletter-subscribe.<your-account>.workers.dev`

## Wiring it to the site

After deploy, copy the Worker URL and update
`config/_default/params.toml`:

```toml
[newsletter]
  enabled = true
  subscribeEndpoint = "https://newsletter-subscribe.<your-account>.workers.dev/subscribe"
```

Commit + push to `main` → Hugo redeploys → form on the site is live.

## Local dev

```bash
npx wrangler dev
# Worker runs at http://localhost:8787
# Use a .dev.vars file (gitignored) for local secrets
```

`.dev.vars` example (DO NOT commit):

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
RESEND_AUDIENCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
JWT_SECRET=abc123randomstring
```

## Logs

```bash
npx wrangler tail
# stream live logs from the deployed Worker
```

## Common issues

| Symptom | Likely cause | Fix |
|---|---|---|
| Confirm email never arrives | Resend domain not verified | Resend → Domains → make sure `chunghaolee.com` is green |
| 502 `send_failed` | Resend API key invalid or `from` domain not verified | Re-issue key + reverify domain |
| 403 from form | Origin not in `ALLOWED_ORIGINS` | Edit `src/index.ts` `ALLOWED_ORIGINS` set + redeploy |
| Form posts but token invalid on click | Different `JWT_SECRET` between runs (e.g. you re-set it) | Re-set the secret once, then keep it stable |
