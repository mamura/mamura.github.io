import { useState } from 'react';

const navigation = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Artigos', href: '#artigos' },
  { label: 'Sobre', href: '#sobre' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((current) => !current);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={toggleMenu}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        className="relative z-50 flex h-10 w-10 items-center justify-center text-white"
      >
        <span className="sr-only">
          {isOpen ? 'Fechar menu' : 'Abrir menu'}
        </span>

        <div className="flex w-6 flex-col gap-1.5">
          <span
            className={`
              block h-0.5 w-full bg-current
              transition-transform duration-300
              ${isOpen ? 'translate-y-2 rotate-45' : ''}
            `}
          />

          <span
            className={`
              block h-0.5 w-full bg-current
              transition-opacity duration-300
              ${isOpen ? 'opacity-0' : ''}
            `}
          />

          <span
            className={`
              block h-0.5 w-full bg-current
              transition-transform duration-300
              ${isOpen ? '-translate-y-2 -rotate-45' : ''}
            `}
          />
        </div>
      </button>

      <div
        className={`
          fixed inset-0 z-40 bg-primary
          transition-all duration-300
          ${
            isOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-4 opacity-0'
          }
        `}
      >
        <nav
          aria-label="Navegação mobile"
          className="
            flex flex-col
            justify-center gap-8
            px-8 py-16
          "
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="
                font-heading
                text-3xl
                font-semibold
                text-white
                transition-opacity
                hover:opacity-70
              "
            >
              {item.label}
            </a>
          ))}

          <a
            href="/curriculo"
            onClick={closeMenu}
            className="
              mt-4
              font-heading
              text-xl
              font-semibold
              text-white
              transition-opacity
              hover:opacity-70
            "
          >
            CV ↗
          </a>
        </nav>
      </div>
    </div>
  );
}