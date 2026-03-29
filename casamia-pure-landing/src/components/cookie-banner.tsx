'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function CookieBanner() {
  const [consent, setConsent] = useState<'accepted' | 'declined' | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('cookie-consent') as 'accepted' | 'declined' | null
    setConsent(saved)
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setConsent('accepted')
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined')
    setConsent('declined')
  }

  return (
    <>
      {consent === 'accepted' && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {consent === null && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
          <div className="max-w-2xl mx-auto bg-[#0F172A] border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl backdrop-blur-sm flex flex-col md:flex-row items-start md:items-center gap-4">
            <p className="text-sm text-white/70 flex-1 leading-relaxed">
              Utilizziamo cookie analitici per migliorare la tua esperienza. I dati sono anonimi e gestiti da Google Analytics.{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-white/50 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={decline}
                className="px-4 py-2 text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 rounded-full transition-colors"
              >
                Rifiuta
              </button>
              <button
                onClick={accept}
                className="px-4 py-2 text-sm font-semibold bg-primary hover:bg-primary/90 text-white rounded-full transition-colors"
              >
                Accetta
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
