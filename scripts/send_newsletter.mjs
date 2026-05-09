/**
 * Weekly newsletter sender.
 *
 * Triggered by .github/workflows/newsletter.yml on Saturday 01:00 UTC
 * (Saturday 09:00 Asia/Taipei) and on workflow_dispatch.
 *
 * Flow:
 *   1. Fetch the site's home RSS feed.
 *   2. Filter items published after data/newsletter_state.json:last_sent_at.
 *   3. If none → log and exit cleanly (no email sent).
 *   4. Render bilingual HTML + text email.
 *   5. Create + send a Resend Broadcast to the audience.
 *   6. Update data/newsletter_state.json (workflow commits & pushes).
 *
 * Required environment:
 *   RESEND_API_KEY        - secret
 *   RESEND_AUDIENCE_ID    - secret
 *   FROM_EMAIL            - e.g. newsletter@chunghaolee.com
 *   FROM_NAME             - e.g. Chung-Hao Lee
 *   SITE_URL              - e.g. https://chunghaolee.com
 *   RSS_URL               - e.g. https://chunghaolee.com/index.xml
 *   STATE_FILE            - path to data/newsletter_state.json
 *   DRY_RUN               - "true" to skip the actual Resend send (still updates state? no — see below)
 */

import { readFile, writeFile } from 'node:fs/promises';
import { XMLParser } from 'fast-xml-parser';
import { renderHTML, renderText, renderSubject } from './render_email.mjs';

const env = process.env;
const RESEND_API = 'https://api.resend.com';

function requireEnv(name) {
  const v = env[name];
  if (!v) {
    console.error(`Missing required env: ${name}`);
    process.exit(1);
  }
  return v;
}

function pickThumbnail(item, link) {
  // Hugo's home RSS doesn't include thumbnails by default.
  // Try common conventions: media:content, enclosure, or first <img> in description.
  if (item['media:content']?.['@_url']) return item['media:content']['@_url'];
  if (item.enclosure?.['@_url']) return item.enclosure['@_url'];
  const desc = item.description || '';
  const m = String(desc).match(/<img[^>]+src=["']([^"']+)["']/i);
  if (m) {
    const src = m[1];
    if (src.startsWith('http')) return src;
    if (src.startsWith('/')) {
      try { return new URL(src, link).toString(); } catch { /* ignore */ }
    }
  }
  return null;
}

function detectSection(link) {
  try {
    const path = new URL(link).pathname.toLowerCase();
    if (path.includes('/posts/')) return 'Post';
    if (path.includes('/portfolio/')) return 'Portfolio';
  } catch { /* ignore */ }
  return '';
}

async function fetchRSS(rssUrl) {
  const r = await fetch(rssUrl, { headers: { 'User-Agent': 'chunghao-lee-newsletter/1.0' } });
  if (!r.ok) throw new Error(`RSS fetch failed: ${r.status}`);
  const xml = await r.text();
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
  const parsed = parser.parse(xml);
  const channel = parsed?.rss?.channel;
  if (!channel) throw new Error('Invalid RSS: no <channel>');
  const rawItems = Array.isArray(channel.item) ? channel.item : (channel.item ? [channel.item] : []);
  return rawItems.map((it) => {
    const link = String(it.link || '').trim();
    return {
      title: String(it.title || '').trim(),
      link,
      pubDate: it.pubDate ? new Date(it.pubDate).toISOString() : null,
      description: String(it.description || '').trim(),
      thumbnail: pickThumbnail(it, link),
      section: detectSection(link),
    };
  });
}

async function readState(path) {
  try {
    const txt = await readFile(path, 'utf8');
    return JSON.parse(txt);
  } catch (e) {
    if (e.code === 'ENOENT') return { last_sent_at: '1970-01-01T00:00:00Z', history: [] };
    throw e;
  }
}

async function writeState(path, state) {
  await writeFile(path, JSON.stringify(state, null, 2) + '\n', 'utf8');
}

async function resendCreateBroadcast({ apiKey, audienceId, from, subject, html, text }) {
  const r = await fetch(`${RESEND_API}/broadcasts`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ audience_id: audienceId, from, subject, html, text }),
  });
  if (!r.ok) throw new Error(`Resend create broadcast failed: ${r.status} ${await r.text()}`);
  return r.json();
}

async function resendSendBroadcast({ apiKey, broadcastId }) {
  const r = await fetch(`${RESEND_API}/broadcasts/${broadcastId}/send`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  if (!r.ok) throw new Error(`Resend send broadcast failed: ${r.status} ${await r.text()}`);
  return r.json();
}

function weekLabel(date = new Date()) {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Taipei' });
}

async function main() {
  const apiKey = requireEnv('RESEND_API_KEY');
  const audienceId = requireEnv('RESEND_AUDIENCE_ID');
  const fromEmail = requireEnv('FROM_EMAIL');
  const fromName = env.FROM_NAME || 'Chung-Hao Lee';
  const siteUrl = env.SITE_URL || 'https://chunghaolee.com';
  const rssUrl = env.RSS_URL || `${siteUrl.replace(/\/$/, '')}/index.xml`;
  const stateFile = env.STATE_FILE || 'data/newsletter_state.json';
  const dryRun = env.DRY_RUN === 'true';

  const from = `${fromName} <${fromEmail}>`;

  console.log(`[newsletter] fetching ${rssUrl}`);
  const items = await fetchRSS(rssUrl);
  console.log(`[newsletter] RSS contains ${items.length} items`);

  const state = await readState(stateFile);
  const lastSent = new Date(state.last_sent_at || 0);
  console.log(`[newsletter] last sent: ${lastSent.toISOString()}`);

  const newItems = items
    .filter((it) => it.pubDate && new Date(it.pubDate) > lastSent)
    .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  console.log(`[newsletter] ${newItems.length} new items since last send`);

  if (newItems.length === 0) {
    console.log('[newsletter] no new content — skipping email send');
    return;
  }

  const subject = renderSubject(newItems);
  const label = weekLabel();
  const html = renderHTML({ items: newItems, siteUrl, weekLabel: label });
  const text = renderText({ items: newItems, siteUrl });

  console.log(`[newsletter] subject: ${subject}`);
  console.log(`[newsletter] items:`);
  for (const it of newItems) console.log(`  - ${it.title} (${it.link})`);

  if (dryRun) {
    console.log('[newsletter] DRY_RUN=true — skipping Resend API calls');
    return;
  }

  const broadcast = await resendCreateBroadcast({
    apiKey, audienceId, from, subject, html, text,
  });
  const broadcastId = broadcast?.id;
  if (!broadcastId) throw new Error(`Resend response missing id: ${JSON.stringify(broadcast)}`);
  console.log(`[newsletter] created broadcast ${broadcastId}`);

  await resendSendBroadcast({ apiKey, broadcastId });
  console.log(`[newsletter] broadcast ${broadcastId} sent`);

  const now = new Date().toISOString();
  const newState = {
    last_sent_at: now,
    history: [
      ...(Array.isArray(state.history) ? state.history : []),
      {
        sent_at: now,
        broadcast_id: broadcastId,
        item_count: newItems.length,
        items: newItems.map((it) => ({ title: it.title, link: it.link, pubDate: it.pubDate })),
      },
    ].slice(-50),
  };
  await writeState(stateFile, newState);
  console.log(`[newsletter] state updated → ${stateFile}`);
}

main().catch((err) => {
  console.error('[newsletter] failed:', err);
  process.exit(1);
});
