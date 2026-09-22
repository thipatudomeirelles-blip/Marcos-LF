import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { HighlightsBar } from '@/components/highlights-bar'
import { AboutSection } from '@/components/about-section'
import { PracticeAreas } from '@/components/practice-areas'
import { CtaPanel } from '@/components/cta-panel'
import { LfDivider } from '@/components/lf-divider'
import { FaqSection } from '@/components/faq-section'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFab } from '@/components/whatsapp-fab'

export default function Page() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-white">
      <SiteHeader />
      <HeroSection />
      <HighlightsBar />
      <AboutSection />
      <PracticeAreas />
      {/* Desktop: linha cinza fina entre os painéis pretos e o painel "Fale comigo agora" */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-7xl px-8">
          <span className="block h-px w-full bg-neutral-300" aria-hidden="true" />
        </div>
      </div>
      <CtaPanel />
      <LfDivider />
      <FaqSection />
      <SiteFooter />
      <WhatsappFab />
    </main>
  )
}
