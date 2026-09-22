import { Clock, Phone, MapPin, Mail } from 'lucide-react'
import { WHATSAPP_URL, CONTACT } from '@/lib/site'

const INFO = [
  { icon: Clock, label: 'Horário', value: CONTACT.hours },
  { icon: Phone, label: 'Telefone', value: CONTACT.phoneLabel },
  { icon: MapPin, label: 'Localização', value: CONTACT.location },
  { icon: Mail, label: 'Email', value: CONTACT.email },
]

export function HeroSection() {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-black text-white">
      {/* Imagem de fundo (metade direita, altura total) — apenas desktop.
          O gradiente cobre a largura inteira em uma única camada contínua,
          eliminando a fresta de subpixel que aparecia ao dar zoom. */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        <img
          src="/hero-justica.jpg"
          alt="Balança da justiça, martelo e livros de direito"
          className="absolute inset-y-0 right-0 h-full w-1/2 scale-x-[-1] object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #000000 0%, #000000 35%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 85%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Imagem de fundo mobile/tablet — metade direita, mesclada ao preto */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 block w-[46%] lg:hidden">
        <img
          src="/hero-justica.jpg"
          alt="Balança da justiça, martelo e livros de direito"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black via-black/55 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4 py-6 md:gap-8 md:px-8 md:py-20 lg:grid-cols-2 lg:gap-8">
        {/* Coluna esquerda */}
        <div className="relative z-20 w-[60%] max-w-xl lg:w-auto">
          <p className="mb-1.5 whitespace-nowrap text-[7px] font-semibold uppercase tracking-[0.08em] text-neutral-400 sm:whitespace-normal sm:text-xs sm:tracking-[0.15em] md:text-sm">
            Advogado Trabalhista e Condominial
          </p>
          <h1 className="text-balance text-2xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Defesa Jurídica
          </h1>
          <p className="mt-2 text-pretty text-[11px] leading-relaxed text-neutral-300 md:mt-5 md:text-lg">
            Excelência e experiência em Direito do Trabalho e Direito Condominial. Atendimento ágil
            e focado na proteção dos seus direitos na Zona Norte de São Paulo.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 hidden w-full rounded-full bg-white px-8 py-3 text-center text-base font-semibold text-black transition-colors hover:bg-neutral-200 sm:w-auto lg:inline-block"
          >
            Consulte um especialista
          </a>

          {/* Mobile: grade 2x2 compacta / Desktop: coluna única (inalterado) */}
          <dl className="mt-4 grid grid-cols-2 gap-x-2 gap-y-2 md:mt-8 md:grid-cols-1 md:gap-4 md:p-5 lg:mt-10 lg:gap-5 lg:border-0 lg:bg-transparent lg:p-0">
            {INFO.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-1 md:gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 md:h-10 md:w-10">
                  <Icon className="h-2.5 w-2.5 text-neutral-300 md:h-5 md:w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <dt className="text-[7px] uppercase tracking-wide text-neutral-500 md:text-xs">
                    {label}
                  </dt>
                  <dd className="whitespace-nowrap text-[7px] font-medium leading-tight text-white md:whitespace-normal md:text-base">
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
