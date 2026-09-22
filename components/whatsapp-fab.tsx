import { WHATSAPP_URL } from '@/lib/site'

export function WhatsappFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-4 right-4 z-50 transition-transform hover:scale-105 md:bottom-6 md:right-6"
    >
      <img
        src="/whatsapp-icon.webp"
        alt=""
        aria-hidden="true"
        className="h-14 w-14 drop-shadow-2xl md:h-16 md:w-16"
      />
    </a>
  )
}
