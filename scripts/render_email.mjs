/**
 * Card-based bilingual (en + zh) HTML email template for the weekly
 * digest. Inline styles are used everywhere because most email clients
 * strip <style> blocks or apply inconsistent CSS support.
 *
 * Visual structure (matches the reference newsletter design):
 *
 *   ┌─────────────────────────────────────┐
 *   │ Header card                         │
 *   │   Chung-Hao Lee's Note              │
 *   │   2026-05-09 Updates · 15 articles  │
 *   │   chunghaolee.com                   │
 *   └─────────────────────────────────────┘
 *
 *   ┌─────────────────────────────────────┐
 *   │ Article card                        │
 *   │   Title (bold, clickable)           │
 *   │   2026-05-03                        │
 *   │   [optional thumbnail image]        │
 *   │   First few sentences of body…      │
 *   │   Read article / 閱讀全文 →         │
 *   └─────────────────────────────────────┘
 *
 *   (cards repeat)
 *
 *   ┌─────────────────────────────────────┐
 *   │ Footer (subscription reason +       │
 *   │ unsubscribe link)                   │
 *   └─────────────────────────────────────┘
 */

function escapeHtml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function decodeEntities(s = '') {
  return String(s)
    .replace(/&nbsp;/g, ' ')
    .replace(/&hellip;/g, '...')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&lsquo;|&rsquo;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#34;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function stripHtml(s = '') {
  // Remove tags, decode entities, collapse whitespace.
  return decodeEntities(String(s).replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

function fmtDateIso(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  // YYYY-MM-DD in Asia/Taipei. sv-SE locale gives ISO format directly.
  return new Intl.DateTimeFormat('sv-SE', {
    year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Taipei',
  }).format(d);
}

function truncatePlain(s = '', n = 260) {
  const text = stripHtml(s);
  if (text.length <= n) return text;
  // Cut on a word boundary when possible so we don't break mid-CJK or mid-word.
  const cut = text.slice(0, n);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > n * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…';
}

export function renderSubject(items /* , weekLabel */) {
  // Plain ASCII, no emoji, no slashes — these tend to lift the spam
  // score on a fresh sending domain. Bilingual content stays in the
  // body where it doesn't affect inbox routing.
  if (items.length === 1) {
    return `Chung-Hao Lee Weekly: ${items[0].title}`;
  }
  return `Chung-Hao Lee Weekly: ${items.length} new updates`;
}

export function renderHTML({ items, siteUrl, dateLabel }) {
  const cleanHost = siteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const updates = `${items.length} ${items.length === 1 ? 'article' : 'articles'}`;

  const cards = items
    .map((it) => {
      const link = escapeHtml(it.link);
      const title = escapeHtml(it.title);
      const date = escapeHtml(fmtDateIso(it.pubDate));
      const desc = escapeHtml(truncatePlain(it.description || '', 280));
      const img = it.thumbnail
        ? `<a href="${link}" style="text-decoration:none;display:block;margin:0 0 16px"><img src="${escapeHtml(it.thumbnail)}" alt="" width="552" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;border:0;outline:none;text-decoration:none"></a>`
        : '';
      return `
      <tr><td style="padding:0 0 16px">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px">
          <tr><td style="padding:24px 24px 22px">
            <a href="${link}" style="text-decoration:none;color:#111827;display:block">
              <h2 style="margin:0 0 6px;font-size:19px;line-height:1.35;font-weight:700;color:#111827">${title}</h2>
            </a>
            <p style="margin:0 0 14px;font-size:13px;color:#9ca3af;letter-spacing:0.01em">${date}</p>
            ${img}
            ${desc ? `<p style="margin:0 0 16px;font-size:14.5px;line-height:1.65;color:#374151">${desc}</p>` : ''}
            <a href="${link}" style="display:inline-block;font-size:14px;color:#2563eb;text-decoration:none;font-weight:500">Read article / 閱讀全文 →</a>
          </td></tr>
        </table>
      </td></tr>`;
    })
    .join('\n');

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#111827;-webkit-font-smoothing:antialiased">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f3f4f6">
    <tr><td align="center" style="padding:24px 12px">
      <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;width:100%">

        <!-- Header card -->
        <tr><td style="padding:0 0 20px">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#111827;border-radius:12px">
            <tr><td style="padding:28px 28px">
              <h1 style="margin:0 0 6px;font-size:24px;line-height:1.25;font-weight:700;color:#ffffff;letter-spacing:-0.01em">Chung-Hao Lee's Note</h1>
              <p style="margin:0 0 10px;font-size:14px;color:#9ca3af">${escapeHtml(dateLabel)} Updates · ${updates}</p>
              <a href="${escapeHtml(siteUrl)}" style="font-size:13px;color:#60a5fa;text-decoration:none">${escapeHtml(cleanHost)}</a>
            </td></tr>
          </table>
        </td></tr>

        <!-- Intro -->
        <tr><td style="padding:0 8px 18px">
          <p style="margin:0;font-size:14px;line-height:1.65;color:#4b5563">
            Here are this week's new posts and portfolio entries. Thanks for reading!<br>
            以下是本週的新文章與作品集更新,謝謝你的閱讀!
          </p>
        </td></tr>

        <!-- Article cards -->
        ${cards}

        <!-- Footer -->
        <tr><td style="padding:8px 8px 0">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr><td style="padding:20px 0 0;border-top:1px solid #e5e7eb;font-size:12px;line-height:1.6;color:#6b7280">
              <p style="margin:0 0 6px">You're receiving this because you subscribed at <a href="${escapeHtml(siteUrl)}" style="color:#2563eb;text-decoration:none">${escapeHtml(cleanHost)}</a>.</p>
              <p style="margin:0 0 14px">你之所以收到這封信,是因為你曾在 <a href="${escapeHtml(siteUrl)}" style="color:#2563eb;text-decoration:none">${escapeHtml(cleanHost)}</a> 訂閱了 newsletter。</p>
              <p style="margin:0">{{{RESEND_UNSUBSCRIBE_URL}}}</p>
            </td></tr>
          </table>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body></html>`;
}

export function renderText({ items, siteUrl, dateLabel }) {
  const cleanHost = siteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const lines = [
    `Chung-Hao Lee's Note`,
    `${dateLabel} Updates · ${items.length} ${items.length === 1 ? 'article' : 'articles'}`,
    cleanHost,
    '',
    `Here are this week's new posts and portfolio entries.`,
    `以下是本週的新文章與作品集更新。`,
    '',
  ];
  for (const it of items) {
    lines.push('---');
    lines.push(it.title);
    if (it.pubDate) lines.push(fmtDateIso(it.pubDate));
    lines.push('');
    const desc = truncatePlain(it.description || '', 240);
    if (desc) {
      lines.push(desc);
      lines.push('');
    }
    lines.push(`Read article / 閱讀全文: ${it.link}`);
    lines.push('');
  }
  lines.push('—');
  lines.push(`Subscribed at ${cleanHost}`);
  lines.push(`Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}`);
  return lines.join('\n');
}
