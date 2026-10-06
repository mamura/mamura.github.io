export function formatArticleDate(date: Date): string {
  return date
    .toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    })
    .replace('.', '')
    .toUpperCase();
}