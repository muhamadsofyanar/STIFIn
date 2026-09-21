import { getCollection } from 'astro:content';

const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character] || character);

export async function GET() {
  const articles = (await getCollection('articles', ({ data }) => !data.draft))
    .sort((a, b) => (b.data.updatedAt || b.data.publishedAt).getTime() - (a.data.updatedAt || a.data.publishedAt).getTime());
  const items = articles.map((article) => `<item><title>${escapeXml(article.data.title)}</title><link>https://stifinmulia.com/artikel/${article.id}/</link><guid isPermaLink="true">https://stifinmulia.com/artikel/${article.id}/</guid><description>${escapeXml(article.data.description)}</description><category>${escapeXml(article.data.category)}</category><pubDate>${(article.data.updatedAt || article.data.publishedAt).toUTCString()}</pubDate></item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Artikel STIFIn Mulia</title><link>https://stifinmulia.com/artikel/</link><description>Artikel STIFIn, keluarga, belajar, profesi, bisnis, promotor, dan Ruang Tafsir Al-Qamar.</description><language>id-ID</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
