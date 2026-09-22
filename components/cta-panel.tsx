import { WHATSAPP_URL } from '@/lib/site'

export function CtaPanel() {
  return (
    <section className="w-full px-4 py-6 md:px-8 md:py-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
        <img
          src="/hero-justica.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80 md:bg-black/70" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-3xl px-5 py-7 text-center text-white md:px-8 md:py-20">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-semibold md:px-5 md:py-2 md:text-sm">
            Fale comigo agora
          </span>
          <h2 className="mt-3 text-balance text-lg font-bold leading-tight md:mt-5 md:text-4xl">
            Ainda dá tempo de proteger seus direitos e fazer o que é justo
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-pretty text-xs leading-relaxed text-neutral-200 md:mt-4 md:text-base">
            Estou disponível para auxiliá-lo como puder, com total sigilo, eficiência, transparência
            e profissionalismo.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block w-full rounded-full bg-white px-8 py-2.5 text-center text-xs font-semibold text-black transition-colors hover:bg-neutral-200 sm:w-auto md:mt-8 md:py-3.5 md:text-base"
          >
            Solicite uma análise jurídica
          </a>
        </div>
      </div>
    </section>
  )
}
