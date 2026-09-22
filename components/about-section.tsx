import { Check } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'

const FEATURES = ['Mais de 20 anos de experiência', 'Apoio Técnico Especializado']

const PARAGRAPH =
  'Pós-graduado em Direito Empresarial, atuo no auxílio e suporte jurídico a trabalhadores de diversos setores e moradores que necessitam de apoio profissional em questões condominiais. Meu compromisso é ouvir a sua situação de forma atenciosa e buscar soluções jurídicas eficientes, ágeis e sem burocracia.'

export function AboutSection() {
  return (
    <section id="sobre-mim" className="w-full bg-white py-6 md:py-24">
      {/* ===== Mobile (< md): foto ao lado do título, checks lado a lado, CTA full-width ===== */}
      <div className="mx-auto max-w-7xl px-4 md:hidden">
        <div className="flex flex-row items-center gap-3">
          <div className="h-32 w-28 shrink-0 overflow-hidden rounded-xl bg-neutral-100">
            <img
              src="/marcos.png"
              alt="Dr. Marcos Le Fosse, advogado"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="min-w-0">
            <span className="inline-block rounded-full bg-neutral-700 px-3 py-1 text-[10px] font-bold text-white">
              Sobre Mim
            </span>
            <h2 className="mt-1.5 text-2xl font-bold leading-tight text-black">
              Dr. Marcos <span className="text-neutral-400">Le</span> Fosse
            </h2>
          </div>
        </div>

        <p className="mt-3 text-pretty text-xs leading-relaxed text-neutral-600">{PARAGRAPH}</p>

        <div className="mt-4 flex flex-row items-center justify-between gap-2">
          {FEATURES.map((feature) => (
            <div key={feature} className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black">
                <Check className="h-3 w-3 text-white" aria-hidden="true" />
              </span>
              <span className="text-[11px] font-medium leading-tight text-neutral-800">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block w-full rounded-full bg-black py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
        >
          Consulte um especialista
        </a>
      </div>

      {/* ===== Tablet e Desktop (md+): layout original inalterado ===== */}
      <div className="mx-auto hidden max-w-7xl grid-cols-1 items-center gap-3 px-4 md:grid md:gap-10 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Texto */}
        <div className="order-2 lg:order-none">
          <span className="inline-block rounded-full bg-neutral-700 px-3 py-1 text-[10px] font-bold text-white md:px-5 md:py-2 md:text-sm">
            Sobre Mim
          </span>
          <h2 className="mt-2 text-xl font-bold text-black md:mt-5 md:text-4xl">
            Dr. Marcos Le Fosse
          </h2>
          <p className="mt-2 text-pretty text-xs leading-relaxed text-neutral-600 md:mt-4 md:text-base">
            {PARAGRAPH}
          </p>

          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-8 md:gap-3">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-2 md:gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black md:h-6 md:w-6">
                  <Check className="h-3 w-3 text-white md:h-4 md:w-4" aria-hidden="true" />
                </span>
                <span className="text-xs font-medium text-neutral-800 md:text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block w-full rounded-full bg-black px-8 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-neutral-800 sm:w-auto md:mt-8 md:py-3 md:text-base"
          >
            Consulte um especialista
          </a>
        </div>

        {/* Foto */}
        <div className="order-1 lg:order-none">
          <div className="relative h-52 w-full overflow-hidden rounded-xl bg-neutral-100 md:mx-auto md:h-96 md:max-w-md lg:h-[30rem] lg:max-w-none">
            <img
              src="/marcos.png"
              alt="Dr. Marcos Le Fosse, advogado"
              className="h-full w-full object-contain object-center md:object-cover md:object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
