import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import CookieBanner from '@/components/cookie-banner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Casamia - Il tuo portale immobiliare intelligente',
  description: 'Compra e vendi casa senza agenzia. L\'intelligenza artificiale al tuo servizio.',
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
