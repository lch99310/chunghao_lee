/**
 * Render a bilingual (en + zh) HTML email body listing new RSS items.
 */

function escapeHtml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function fmtDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'Asia/Taipei' });
}

function truncate(s = '', n = 220) {
  const text = String(s).replace(/\s+/g, ' ').trim();
  return text.length > n ? text.slice(0, n - 1) + '…' : text;
}

export function renderSubject(items, weekLabel) {
  // Plain ASCII, no emoji, no slashes — these tend to lift the spam
  // score on a fresh sending domain. Bilingual content stays in the
  // body where it doesn't affect inbox routing.
  if (items.length === 1) {
    return `Chung-Hao Lee Weekly: ${items[0].title}`;
  }
  return `Chung-Hao Lee Weekly: ${items.length} new updates`;
}

export function renderHTML({ items, siteUrl, weekLabel }) {
  const itemsHtml = items
    .map((it) => {
      const link = escapeHtml(it.link);
      const title = escapeHtml(it.title);
      const date = escapeHtml(fmtDate(it.pubDate));
      const desc = escapeHtml(truncate(it.description || '', 240));
      const section = escapeHtml(it.section || '');
      const thumb = it.thumbnail
        ? `<a href="${link}" style="display:block;margin:0 0 12px"><img src="${escapeHtml(it.thumbnail)}" alt="" width="560" style="display:block;width:100%;max-width:560px;height:auto;border-radius:6px"></a>`
        : '';
      return `
      <div style="margin:0 0 32px;padding:0 0 32px;border-bottom:1px solid #e5e7eb">
        ${thumb}
        <div style="font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 6px">${section}${date ? ' · ' + date : ''}</div>
        <h2 style="margin:0 0 10px;font-size:20px;line-height:1.35"><a href="${link}" style="color:#111827;text-decoration:none">${title}</a></h2>
        <p style="margin:0 0 14px;font-size:14px;line-height:1.6;color:#374151">${desc}</p>
        <p style="margin:0"><a href="${link}" style="color:#0a66c2;text-decoration:none;font-weight:500">Read more / 閱讀全文 →</a></p>
      </div>`;
    })
    .join('\n');

  return `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#111827">
  <div style="max-width:600px;margin:0 auto;padding:32px 24px;background:#ffffff">
    <div style="margin:0 0 28px">
      <h1 style="margin:0 0 6px;font-size:22px;line-height:1.3">Chung-Hao Lee · Weekly Updates</h1>
      <p style="margin:0;font-size:13px;color:#6b7280">${escapeHtml(weekLabel)} · ${items.length} new ${items.length === 1 ? 'update' : 'updates'} / 本週更新</p>
    </div>

    <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:#374151">
      Here are this week's new posts and portfolio entries. Thanks for reading!<br>
      以下是本週的新文章與作品集更新,謝謝你的閱讀!
    </p>

    ${itemsHtml}

    <div style="margin:32px 0 0;padding:24px 0 0;border-top:1px solid #e5e7eb;font-size:12px;color:#6b7280;line-height:1.6">
      <p style="margin:0 0 8px">You're receiving this because you subscribed at <a href="${escapeHtml(siteUrl)}" style="color:#0a66c2;text-decoration:none">${escapeHtml(siteUrl.replace(/^https?:\/\//, ''))}</a>.</p>
      <p style="margin:0 0 8px">你之所以收到這封信,是因為你曾在 <a href="${escapeHtml(siteUrl)}" style="color:#0a66c2;text-decoration:none">${escapeHtml(siteUrl.replace(/^https?:\/\//, ''))}</a> 訂閱了 newsletter。</p>
      <p style="margin:0">{{{RESEND_UNSUBSCRIBE_URL}}}</p>
    </div>
  </div>
</body></html>`;
}

export function renderText({ items, siteUrl }) {
  const lines = [
    `Chung-Hao Lee · Weekly Updates`,
    `${items.length} new ${items.length === 1 ? 'update' : 'updates'} this week / 本週 ${items.length} 則更新`,
    '',
  ];
  for (const it of items) {
    lines.push(`• ${it.title}`);
    if (it.section) lines.push(`  [${it.section}]${it.pubDate ? ' ' + fmtDate(it.pubDate) : ''}`);
    lines.push(`  ${it.link}`);
    lines.push('');
  }
  lines.push('---');
  lines.push(`Subscribed at ${siteUrl}`);
  lines.push('Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}');
  return lines.join('\n');
}
