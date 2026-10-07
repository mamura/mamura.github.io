export const categorySlugs = {
  'Engenharia de Software': 'engenharia-de-software',
  'Inteligência Artificial': 'inteligencia-artificial',
  'Desenvolvimento Web': 'desenvolvimento-web',
  'Produto & Discovery': 'produto-e-discovery',
  'Carreira & Mercado': 'carreira-e-mercado',
} as const;

export type ArticleCategory =
  keyof typeof categorySlugs;

export function getCategorySlug(
  category: ArticleCategory,
): string {
  return categorySlugs[category];
}