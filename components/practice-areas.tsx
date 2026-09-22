import { Scale, Building2 } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'

const AREAS = [
  {
    icon: Scale,
    title: 'Trabalhista',
    description:
      'Ramo jurídico voltado a regular a relação entre empregados e empregadores, estabelecendo normas e garantias essenciais para equilibrar essa relação contratual.',
    tags: [
      'Acidente de Trabalho',
      'Rescisão de Contratos',
      'Assédio Moral',
      'Valores a Receber',
      'Vínculo Empregatício',
      'Horas Extras',
      'Insalubridade e Periculosidade',
      'Sem Carteira Assinada',
      'Entre Outros',
    ],
  },
  {
    icon: Building2,
    title: 'Condominial',
    description:
      'Variante do Direito Civil dedicada a disciplinar as regras de convivência, a administração, os direitos e os deveres no âmbito dos condomínios residenciais e comerciais.',
    tags: [
      'Inadimplência',
      'Problemas com Animais',
      'Obras e Reformas',
      'Prestações de Contas',
      'Cobranças Indevidas',
      'Segurança e Acessibilidade',
      'Conflitos com Vizinhos e Síndicos',
      'Revisão de Contratos',
      'Entre Outros',
    ],
  },
]

export function PracticeAreas() {
  return (
    <section id="areas-de-atuacao" className="w-full bg-white pb-8 pt-6 md:pb-24 md:pt-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Cabeçalho com badge e linhas */}
        <div className="mb-4 flex items-center justify-center gap-4 md:mb-12">
          <span className="hidden h-px flex-1 bg-neutral-300 sm:block" aria-hidden="true" />
          <h2 className="inline-block rounded-full bg-neutral-700 px-4 py-1.5 text-xs font-bold text-white md:px-5 md:py-2 md:text-base">
            Áreas de Atuação
          </h2>
          <span className="hidden h-px flex-1 bg-neutral-300 sm:block" aria-hidden="true" />
        </div>

        {/* ===== Mobile (< md): descrição à esquerda + caixa de tags em 3 colunas ===== */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {AREAS.map(({ icon: Icon, title, description, tags }) => (
            <div key={title} className="flex flex-col rounded-2xl bg-black p-3.5 text-white">
              <div className="flex gap-3">
                <div className="w-[44%] shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-900">
                      <Icon className="h-4 w-4 text-white" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-bold leading-tight">{title}</h3>
                  </div>
                  <p className="mt-2 text-pretty text-[11px] leading-snug text-neutral-300">
                    {description}
                  </p>
                </div>

                {/* Grade de exemplos: divisórias verticais retas e de altura total */}
                <div className="flex-1 rounded-lg border border-neutral-700 p-1.5">
                  <div className="grid auto-rows-fr grid-cols-3">
                    {tags.map((tag, i) => (
                      <span
                        key={tag}
                        className={
                          'flex items-center justify-center px-1.5 py-2 text-center text-[8px] font-medium leading-tight text-neutral-200' +
                          (i % 3 !== 0 ? ' border-l border-neutral-700' : '')
                        }
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3.5 block w-full rounded-full bg-neutral-700 py-2 text-center text-[11px] font-medium text-white transition-colors hover:bg-neutral-600"
              >
                Consulte um especialista
              </a>
            </div>
          ))}
        </div>

        {/* ===== Tablet e Desktop (md+): layout original inalterado ===== */}
        <div className="hidden grid-cols-1 gap-3 md:grid md:gap-6 lg:grid-cols-2">
          {AREAS.map(({ icon: Icon, title, description, tags }) => (
            <div
              key={title}
              className="flex flex-col justify-between rounded-2xl bg-black p-3 text-white sm:p-6 md:p-8"
            >
              <div className="grid grid-cols-[1fr_1.15fr] items-start gap-3 md:block md:gap-0">
                <div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-900 md:h-12 md:w-12 md:rounded-xl">
                    <Icon className="h-4 w-4 text-white md:h-6 md:w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-2 text-sm font-bold leading-tight md:mt-5 md:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-pretty text-[10px] leading-snug text-neutral-400 md:mt-3 md:text-base md:leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:mt-6 md:gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center justify-center rounded-md border border-neutral-200 bg-white px-1.5 py-1 text-center text-[9px] font-bold leading-tight text-neutral-900 shadow-sm md:rounded-lg md:px-2 md:py-2 md:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block w-full rounded-full bg-neutral-700 py-2 text-center text-[11px] font-medium text-white transition-colors hover:bg-neutral-600 md:mt-8 md:py-3 md:text-base"
              >
                Consulte um especialista
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
