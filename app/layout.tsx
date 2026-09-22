import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dr. Marcos Le Fosse | Advogado Trabalhista e Condominial - Zona Norte SP',
  description:
    'Advogado com mais de 20 anos de experiência em Direito do Trabalho e Condominial na Zona Norte de São Paulo. Reconhecimento de vínculo, verbas rescisórias, conflitos condominiais e mais. Fale agora pelo WhatsApp.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth bg-white`}>
      <body className="overflow-x-hidden font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
