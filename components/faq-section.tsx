'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: 'Trabalhei sem carteira assinada. Tenho direitos?',
    a: 'Sim. Se cumpria horários e recebia salário, a lei reconhece o vínculo. É possível cobrar FGTS, férias, 13º e horas extras.',
  },
  {
    q: 'Fui demitido e não recebi a rescisão. O que fazer?',
    a: 'A empresa tem até 10 dias para pagar. Se atrasar, você pode acionar a justiça para receber tudo corrigido e com multa.',
  },
  {
    q: 'Tenho direito a adicional de insalubridade ou periculosidade?',
    a: 'Insalubridade: para exposição a barulho, poeira ou químicos.\n\nPericulosidade (30%): para risco de vida, como vigilantes e porteiros.',
  },
  {
    q: 'Sofri acidente de trabalho ou fiquei doente pela função. Quais meus direitos?',
    a: 'Você tem 12 meses de estabilidade no emprego após voltar do INSS, além de possível indenização por danos.',
  },
  {
    q: 'O condomínio pode proibir animais de estimação?',
    a: 'Não de forma geral. A proibição só vale se o animal trouxer risco comprovado à segurança, saúde ou sossego dos moradores.',
  },
  {
    q: 'Recebi multa indevida ou o síndico não presta contas. Como agir?',
    a: 'Você tem direito à defesa prévia antes de pagar. Dá para anular a multa ou exigir a prestação de contas na justiça.',
  },
  {
    q: 'Estou com taxa de condomínio em atraso. O que pode acontecer?',
    a: 'O condomínio pode cobrar na justiça, mas sem juros abusivos ou exposição. O ideal é negociar um acordo viável.',
  },
  {
    q: 'Quais documentos preciso separar para avaliação do caso?',
    a: 'Trabalhista: Carteira de trabalho, extrato FGTS, comprovantes bancários e conversas de WhatsApp.\n\nCondominial: Convenção, regimento interno, notificações recebidas e comprovantes.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-neutral-200 py-2.5 md:py-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 text-left md:gap-4"
      >
        <span className="text-xs font-semibold text-black md:text-base">{q}</span>
        <Plus
          className={`h-4 w-4 shrink-0 text-neutral-600 transition-transform duration-200 md:h-5 md:w-5 ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`grid transition-all duration-200 ${
          open ? 'mt-2 grid-rows-[1fr] opacity-100 md:mt-3' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="whitespace-pre-line text-pretty text-[11px] leading-relaxed text-neutral-600 md:text-base">
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FaqSection() {
  return (
    <section className="w-full bg-white pb-6 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-xl font-bold text-black md:mb-10 md:text-4xl">
          Perguntas Frequentes
        </h2>
        <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-2">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
