# mamura.dev

Site pessoal e portfólio profissional de **Marcio Mota**, Software Engineer.

O projeto apresenta minha trajetória profissional, projetos, especialidades técnicas e artigos sobre desenvolvimento de software, arquitetura e tecnologia.

**Site:** https://mamura.dev

---

## Sobre o projeto

O `mamura.dev` foi desenvolvido como uma aplicação web estática focada em apresentar minha experiência profissional de forma mais visual do que um currículo tradicional.

A página principal é organizada nas seguintes seções:

- **Hero** — apresentação e áreas de atuação
- **Projetos** — projetos e produtos em que trabalhei
- **Especialidades** — principais áreas de conhecimento técnico
- **Trajetória** — experiência profissional apresentada através de uma timeline interativa
- **Artigos** — conteúdos técnicos publicados no site
- **Contato** — canais profissionais para contato

O design e a implementação foram desenvolvidos especificamente para este projeto, sem utilização de templates prontos.

---

## Tecnologias

O projeto utiliza:

- [Astro](https://astro.build/) — estrutura principal e geração do site
- [React](https://react.dev/) — componentes interativos
- [TypeScript](https://www.typescriptlang.org/) — tipagem e desenvolvimento
- [Tailwind CSS](https://tailwindcss.com/) — estilização
- [Motion](https://motion.dev/) — animações e interações
- [Lucide](https://lucide.dev/) — iconografia
- [Poppins](https://fonts.google.com/specimen/Poppins) — tipografia de títulos
- [Inter](https://fonts.google.com/specimen/Inter) — tipografia de conteúdo

---

## Estrutura

```text
src/
├── components/
│   └── home/
│       ├── Hero
│       ├── Projects
│       ├── Specialties
│       ├── Trajectory
│       ├── Articles
│       └── Contact
│
├── layouts/
├── pages/
└── styles/

public/
├── icons/
└── images/
```

Astro é utilizado como base do projeto e os componentes React são carregados apenas nas partes da interface que precisam de comportamento interativo.

---

## Desenvolvimento

### Requisitos

- Node.js
- npm

Clone o repositório:

```bash
git clone git@github.com:mamura/mamura.github.io.git
```

Entre no diretório:

```bash
cd mamura.github.io
```

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

O Astro disponibilizará o endereço local da aplicação no terminal.

---

## Build

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos são gerados em:

```text
dist/
```

Para testar o build localmente:

```bash
npm run preview
```

---

## Deploy

O site é hospedado através do **GitHub Pages**.

O deploy é realizado automaticamente por **GitHub Actions** sempre que alterações são enviadas para a branch:

```text
master
```

Fluxo:

```text
Push para master
       ↓
GitHub Actions
       ↓
Build do Astro
       ↓
GitHub Pages
       ↓
mamura.dev
```

O domínio personalizado utilizado é:

```text
mamura.dev
```

A configuração do domínio também é preservada através de:

```text
public/CNAME
```

---

## Versões

A branch `master` contém a versão atual do site desenvolvida com Astro.

A branch `v1` preserva a versão anterior do portfólio, utilizada antes da migração para a arquitetura atual.

---

## Autor

**Marcio Mota**  
Software Engineer

- Site: https://mamura.dev
- GitHub: https://github.com/mamura
- LinkedIn: https://linkedin.com/in/marciomota-mamura

---

## Licença

O código deste projeto é destinado ao meu portfólio pessoal.

Conteúdos, textos, identidade visual, imagens e demais materiais presentes no site não devem ser reutilizados sem autorização.