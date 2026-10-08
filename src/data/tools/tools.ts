export interface PublicTool {
  title: string;
  description: string;
  href: string;
  status: 'Em preparação' | 'Disponível';
}

export const tools: PublicTool[] = [
  {
    title: 'Gerador de Metas SMART',
    description: 'Transforme uma intenção em um objetivo claro, com critérios SMART, indicador de sucesso e prazo.',
    href: '/ferramentas/metas-smart/',
    status: 'Disponível',
  },
];
