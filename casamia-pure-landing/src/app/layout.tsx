import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
      <body className={inter.className}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
