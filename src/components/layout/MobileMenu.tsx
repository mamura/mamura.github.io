import { useEffect, useId, useRef, useState } from 'react';

const navigation = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Artigos', href: '#artigos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Ferramentas', href: '/ferramentas/' },
];

export default function MobileMenu({ isToolsPage = false }: { isToolsPage?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const container = useRef<HTMLDivElement>(null);
  const toggleButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    container.current?.querySelector<HTMLAnchorElement>('nav a')?.focus();
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setIsOpen(false); }
      if (event.key !== 'Tab') return;
      const focusable = container.current?.querySelectorAll<HTMLElement>('button, a[href]');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
      desktop.removeEventListener('change', closeOnDesktop);
      if (!desktop.matches) toggleButton.current?.focus();
    };
  }, [isOpen]);

  function toggleMenu() {
    setIsOpen((current) => !current);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div ref={container} className="lg:hidden" role={isOpen ? 'dialog' : undefined} aria-modal={isOpen ? true : undefined} aria-label={isOpen ? 'Menu de navegação' : undefined}>
      <button
        type="button"
        ref={toggleButton}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        aria-controls={menuId}
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
        id={menuId}
        className={`
          fixed inset-0 z-40 overflow-y-auto bg-primary
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
              href={isToolsPage && item.href.startsWith('#') ? `/${item.href}` : item.href}
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
