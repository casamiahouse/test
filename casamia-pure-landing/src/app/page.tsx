/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, CheckCircle2, Lock, BrainCircuit, Wallet, ShieldCheck, Mail, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

const faqs = [
    {
        q: "Come è possibile che il servizio sia a zero provvigioni?",
        a: "Casamia nasce proprio per eliminare gli enormi costi di intermediazione delle agenzie tradizionali. Offriamo una piattaforma tecnologica avanzata guidata dall'AI, automatizzando i processi burocratici per farti risparmiare migliaia di euro."
    },
    {
        q: "Com'è garantita la sicurezza per compratori e venditori?",
        a: "Assolutamente garantita. Il nostro sistema di Intelligenza Artificiale verifica i documenti (visure, planimetrie, identità SPID) interrogando database ufficiali per offrirti compravendite limpide, sicure e connettendoti a veri professionisti (Notai, ecc.) per l'atto finale."
    },
    {
        q: "L'assistente Casabot è disponibile 24 ore su 24?",
        a: "Sì, Casabot non dorme mai. Sa rispondere immediatamente su tutte le caratteristiche tecniche, strutturali ed energetiche dell'immobile, e prenota le visite in autonomia incrociando le tue agende personali."
    },
    {
        q: "Ho bisogno di essere esperto per usare Casamia?",
        a: "Assolutamente no. Casabot ti guida passo per passo in modo semplice e conversazionale, come parlare con un amico esperto. Non è richiesta nessuna conoscenza tecnica o legale."
    }
]

function FaqAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <div className="w-full space-y-4">
            {faqs.map((faq, i) => (
                <div
                    key={i}
                    className="border border-white/10 bg-white/5 px-6 rounded-2xl backdrop-blur-sm overflow-hidden"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between py-6 text-left gap-4 group"
                    >
                        <span className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                            {faq.q}
                        </span>
                        <ChevronDown
                            className={`w-5 h-5 text-white/50 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-primary' : ''}`}
                        />
                    </button>
                    <div
                        className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                        <div className="overflow-hidden">
                            <p className="text-white/60 text-base leading-relaxed pb-6">
                                {faq.a}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default function LandingPage() {
    const fadeUp: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden dark">

            {/* Immersive Background Effects */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 bg-black">
                <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            {/* Minimal Header */}
            <header className="absolute top-0 w-full z-50 p-6">
                <div className="container mx-auto flex items-center justify-between">
                    <Link href="/">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo.png" alt="Casamia" className="h-12 w-auto" />
                    </Link>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 flex flex-col items-center justify-center min-h-[90vh]">
                    <div className="w-full max-w-4xl mx-auto text-center relative z-10">
                        <motion.div
                            initial="hidden" animate="visible" variants={fadeUp}
                            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-white/90">L'evoluzione del mercato immobiliare</span>
                        </motion.div>

                        <motion.h1
                            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
                        >
                            Comprare e vendere casa.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                                Senza agenzia, guidati dall'IA.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
                            className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
                        >
                            Abbiamo eliminato le provvigioni d'agenzia e lo stress della burocrazia.
                            Casamia è l'ecosistema intelligente che mette in contatto diretto compratori e venditori in totale sicurezza.
                        </motion.p>

                        <motion.div
                            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }}
                            className="max-w-md mx-auto relative mt-4"
                        >
                            <Link href="mailto:myhousecasamia@gmail.com">
                                <Button className="rounded-full h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg text-lg">
                                    <Mail className="w-5 h-5 mr-2" /> Contattaci
                                </Button>
                            </Link>
                            <p className="text-sm text-white/50 mt-6 flex items-center justify-center gap-2">
                                <Lock className="w-4 h-4" /> Nessuna registrazione richiesta. Scrivici direttamente!
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* The Problem & Solution Section */}
                <section className="py-24 px-4 relative z-10 border-t border-white/5">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Perché stiamo costruendo Casamia?</h2>
                            <p className="text-xl text-white/60 max-w-3xl mx-auto">
                                Il mercato immobiliare tradizionale è lento, opaco ed estremamente costoso.
                                In Italia, comprare o vendere casa costa in media tra i 6.000€ e i 15.000€ solo di intermediazione d'agenzia.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                                <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Wallet className="w-7 h-7 text-red-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Troppi Costi Nascosti</h3>
                                <p className="text-white/60 leading-relaxed">Le agenzie chiedono fino al 5% a entrambe le parti. Con Casamia le provvigioni immobiliari sono letteralmente a zero.</p>
                            </motion.div>

                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} transition={{ delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                                    <BrainCircuit className="w-7 h-7 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">La Tecnologia Aiuta</h3>
                                <p className="text-white/60 leading-relaxed">L'Intelligenza Artificiale oggi può fare il 90% del lavoro dell'agente: stima del prezzo, controllo documentazione, e creazione annunci perfetti.</p>
                            </motion.div>

                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} transition={{ delay: 0.3 }} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                                    <ShieldCheck className="w-7 h-7 text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Disintermediazione Sicura</h3>
                                <p className="text-white/60 leading-relaxed">Spesso le persone temono di fare da sole per paura di truffe. Casamia verifica identità e documenti, collegandoti a Notai veri solo alla fine.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Casabot Feature Section */}
                <section className="py-24 px-4 relative z-10 bg-gradient-to-b from-transparent to-primary/5">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8">
                            <Badge variant="outline" className="text-primary border-primary bg-primary/10 px-4 py-1 text-sm">Presentiamo Casabot 🤖</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-white">Il tuo Agente AI personale h24.</h2>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-white">Ti guida lungo tutto il processo</h4>
                                        <p className="text-white/60 mt-1">Che tu sia un venditore o un acquirente, Casabot ti guida nel completare ogni step burocratico.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-white">Risponde alle tue domande</h4>
                                        <p className="text-white/60 mt-1">Il bot può rispondere alle FAQ sulla tua casa (es. classe energetica, spese condominiali) anche quando tu dormi.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-white">Ti aiuta nella ricerca</h4>
                                        <p className="text-white/60 mt-1">"Casamia, cercami un quadrilocale luminoso a Milano Navigli con terrazzo". Diglielo come lo diresti a un amico, ci pensa lui.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full relative">
                            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
                            <Card className="relative bg-[#0F172A] border-white/10 shadow-2xl overflow-hidden p-6 md:p-8 rounded-[2rem]">
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-end">
                                        <div className="bg-primary text-primary-foreground px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
                                            Ho un budget di 350k€, cerco qualcosa vicino alla metro a Milano. Magari con box.
                                        </div>
                                    </div>
                                    <div className="flex justify-start items-end gap-2">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mb-1">
                                            <Sparkles className="w-4 h-4 text-primary" />
                                        </div>
                                        <div className="bg-white/10 text-white px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm border border-white/5">
                                            Ottima scelta! Ho trovato 12 immobili che combaciano. La rata del mutuo media stimata per 350.000€ a 30 anni è di circa 1.150€/mese. <br /><br />
                                            Vuoi che ti mostri prima quelli in zona Crocetta o Centro Storico?
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 px-4 relative z-10 border-t border-white/5">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Domande Frequenti</h2>
                            <p className="text-xl text-white/60">Tutto quello che c&apos;è da sapere su Casamia.</p>
                        </div>
                        <FaqAccordion />
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-24 px-4 relative z-10 border-t border-white/5">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A breve la piattaforma sarà live.<br />Iscriviti adesso e approfitta dei vantaggi</h2>
                        <p className="text-white/60 mb-10 text-lg">Aiutaci a trasformare un settore fermo agli anni &apos;90. I primi iscritti avranno accesso prioritario alle funzionalità premium.</p>

                        <Link href="mailto:myhousecasamia@gmail.com">
                            <Button className="h-14 px-10 rounded-full text-lg shadow-xl shadow-primary/25 bg-white text-black hover:bg-neutral-200">
                                <Mail className="w-5 h-5 mr-2" /> Contattaci
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    )
}
