'use client'

import { WHATSAPP_URL } from '@/lib/site'

const NAV_LINKS = [
  { label: 'Sobre Mim', href: '#sobre-mim' },
  { label: 'Áreas de Atuação', href: '#areas-de-atuacao' },
  { label: 'Contatos', href: '#contato' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2.5 md:gap-3 md:px-8 md:py-3">
        <a
          href="#top"
          className="flex min-w-0 shrink items-center"
          aria-label="Marcos Le Fosse - Advogado"
        >
          <img
            src="/logo-marcos-le-fosse.png"
            alt="Marcos Le Fosse - Advogado"
            className="h-9 w-auto max-w-full object-contain md:h-20"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-black lg:text-base"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'conversion', {
                send_to: 'AW-18455432724/WCD9CNPzi4MdEJScnuBE',
              })
            }
          }}
          className="shrink-0 whitespace-nowrap rounded-full bg-neutral-600 px-3 py-1.5 text-center text-xs font-semibold text-white shadow-md transition-all hover:bg-neutral-700 md:px-7 md:py-3.5 md:text-base"
        >
          Consulte um especialista
        </a>
      </div>
    </header>
  )
}
