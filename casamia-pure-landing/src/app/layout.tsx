import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import CookieBanner from '@/components/cookie-banner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Casamia - Compra e Vendi Casa Senza Agenzia',
  description: 'Casamia è la piattaforma immobiliare con intelligenza artificiale che elimina le provvigioni. Compra e vendi casa in modo semplice, sicuro e senza intermediari.',
  keywords: ['compra casa', 'vendi casa', 'senza agenzia', 'portale immobiliare', 'intelligenza artificiale', 'zero provvigioni', 'immobili italia'],
  metadataBase: new URL('https://casamia.it.com'),
  openGraph: {
    title: 'Casamia - Compra e Vendi Casa Senza Agenzia',
    description: 'La piattaforma immobiliare con AI che elimina le provvigioni.',
    url: 'https://casamia.it.com',
    siteName: 'Casamia',
    locale: 'it_IT',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="dark">
      <head>
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500,
            });
            gtag('js', new Date());
            gtag('config', 'G-QYW36V7ZE5');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
