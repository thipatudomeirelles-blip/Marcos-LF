import { Clock, MapPin, Phone, Mail } from 'lucide-react'
import { WHATSAPP_URL, LINKEDIN_URL, CONTACT } from '@/lib/site'

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const INFO = [
  { icon: Clock, label: 'Horário', value: CONTACT.hours, href: undefined },
  { icon: MapPin, label: 'Endereço', value: CONTACT.address, href: undefined },
  { icon: Phone, label: 'Telefone', value: CONTACT.phoneLabel, href: WHATSAPP_URL },
  { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
]

export function SiteFooter() {
  return (
    <footer id="contato" className="w-full border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 md:gap-10 md:px-8 md:py-14 lg:grid-cols-2">
        {/* Esquerda: logo + botões */}
        <div>
          <img
            src="/logo-marcos-le-fosse.png"
            alt="Marcos Le Fosse - Advogado"
            className="h-10 w-auto max-w-full object-contain md:h-20"
          />
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap md:mt-6 md:gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-4 py-2.5 text-xs font-medium text-neutral-800 transition-all hover:border-black sm:px-8 sm:py-4 md:gap-3 md:text-lg"
            >
              <img src="/whatsapp-icon.webp" alt="" aria-hidden="true" className="h-4 w-4 md:h-6 md:w-6" />
              {CONTACT.phoneLabelFull}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-4 py-2.5 text-xs font-medium text-neutral-800 transition-all hover:border-black sm:px-8 sm:py-4 md:gap-3 md:text-lg"
            >
              <LinkedinIcon className="h-4 w-4 md:h-6 md:w-6" />
              Marcos Le Fosse
            </a>
          </div>
        </div>

        {/* Direita: informações de contato */}
        <div className="lg:justify-self-end">
          <h2 className="text-base font-bold text-neutral-900 md:text-lg">Contatos</h2>
          {/* Mobile: grade 2x2 compacta / Desktop: lista vertical (inalterado) */}
          <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-3 md:mt-5 md:block md:space-y-4">
            {INFO.map(({ icon: Icon, label, value, href }) => {
              const body = (
                <div className="flex items-start gap-1.5 md:gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 md:h-9 md:w-9">
                    <Icon className="h-3 w-3 text-neutral-700 md:h-4 md:w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[9px] uppercase tracking-wide text-neutral-500 md:text-xs">
                      {label}
                    </dt>
                    <dd className="break-words text-[10px] font-medium leading-tight text-neutral-800 md:text-sm">
                      {value}
                    </dd>
                  </div>
                </div>
              )
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block transition-opacity hover:opacity-70"
                >
                  {body}
                </a>
              ) : (
                <div key={label}>{body}</div>
              )
            })}
          </dl>
        </div>
      </div>

      {/* Faixa legal */}
      <div className="space-y-0.5 bg-neutral-900 px-4 py-3 text-center text-[7px] leading-tight text-neutral-400 md:space-y-1.5 md:py-6 md:text-xs md:text-white">
        <p>Marcos Tadeu Le Fosse Sanches - OAB/SP 188535</p>
        <p>Comunicação jurídica publicada em conformidade com o Provimento 205/2021 da OAB.</p>
        <p>Desenvolvido por Thiago Meirelles · Tráfego pago gerenciado por: Thiago Meirelles</p>
      </div>
    </footer>
  )
}
