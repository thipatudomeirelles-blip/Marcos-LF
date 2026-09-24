import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dr. Marcos Le Fosse | Advogado Trabalhista e Condominial - Zona Norte SP',
  description:
    'Advogado com mais de 20 anos de experiência em Direito do Trabalho e Condominial na Zona Norte de São Paulo.',
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
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18455432724"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18455432724');
            gtag('event', 'conversion', {
                'send_to': 'AW-18455432724/vmLGCKjs__kcEJScnuBE',
                'value': 1.0,
                'currency': 'BRL'
            });
          `}
        </Script>
      </head>
      <body className="overflow-x-hidden font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
