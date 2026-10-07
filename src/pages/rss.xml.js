import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = (
    await getCollection(
      'articles',
      ({ data }) => !data.draft,
    )
  ).sort(
    (a, b) =>
      b.data.publishedAt.getTime() -
      a.data.publishedAt.getTime(),
  );

  return rss({
    title: 'Mamura.dev',
    description:
      'Artigos sobre engenharia de software, inteligência artificial, desenvolvimento web, produto e liderança técnica.',
    site: context.site,

    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishedAt,
      link: `/artigos/${article.id}`,
    })),

    customData: `
      <language>pt-BR</language>
    `,
  });
}