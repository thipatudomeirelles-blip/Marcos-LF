import { HardHat, Building2, MapPin, ShieldCheck } from 'lucide-react'

const HIGHLIGHTS = [
  { icon: HardHat, label: 'Direito Trabalhista', href: '#areas-de-atuacao' },
  { icon: Building2, label: 'Direito Condominial', href: '#areas-de-atuacao' },
  { icon: MapPin, label: 'Zona Norte - SP', href: undefined },
  { icon: ShieldCheck, label: 'Inscrito na OAB/SP', href: undefined },
]

export function HighlightsBar() {
  return (
    <section className="w-full border-b border-neutral-200 bg-white">
      {/* Mobile: 4 selos em uma única linha horizontal, ícone ao lado do texto com divisores */}
      <div className="grid grid-cols-4 py-2.5 lg:hidden">
        {HIGHLIGHTS.map(({ icon: Icon, label, href }, i) => {
          const content = (
            <>
              <Icon className="h-3 w-3 shrink-0 text-neutral-700" aria-hidden="true" />
              <span className="text-[8px] font-semibold leading-tight text-neutral-800">
                {label}
              </span>
            </>
          )
          const classes =
            'flex items-center justify-center gap-1 px-1 text-center' +
            (i < HIGHLIGHTS.length - 1 ? ' border-r border-neutral-300' : '')
          return href ? (
            <a key={label} href={href} className={classes + ' transition-colors active:bg-neutral-50'}>
              {content}
            </a>
          ) : (
            <div key={label} className={classes}>
              {content}
            </div>
          )
        })}
      </div>

      {/* Desktop: faixa original */}
      <div className="mx-auto hidden max-w-7xl grid-cols-2 lg:grid lg:grid-cols-4">
        {HIGHLIGHTS.map(({ icon: Icon, label, href }, i) => {
          const content = (
            <>
              <Icon className="h-6 w-6 text-neutral-700" aria-hidden="true" />
              <span className="text-sm font-semibold text-neutral-800 md:text-base">{label}</span>
            </>
          )
          const classes =
            'flex items-center justify-center gap-3 px-4 py-6 text-center' +
            (i < HIGHLIGHTS.length - 1 ? ' lg:border-r border-neutral-300' : '')

          return href ? (
            <a key={label} href={href} className={classes + ' transition-colors hover:bg-neutral-50'}>
              {content}
            </a>
          ) : (
            <div key={label} className={classes}>
              {content}
            </div>
          )
        })}
      </div>
    </section>
  )
}
