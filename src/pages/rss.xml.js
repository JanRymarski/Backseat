import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('posts')).sort((a, b) => b.data.date - a.data.date);
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: 'Backseat devlog',
    description: 'Development diary for Backseat, a music-driven VR taxi ride.',
    site: context.site,
    items: posts.map((p) => ({ title: p.data.title, pubDate: p.data.date, description: p.data.summary, link: `${base}/posts/${p.id}/` })),
  });
}
