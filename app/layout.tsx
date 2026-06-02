import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from './_components/hero-section'
import ServicesPreview from './_components/services-preview'
import TeamPreview from './_components/team-preview'
import CtaSection from './_components/cta-section'
import './globals.css'

// Configuração da tipografia de títulos (Sábio/Sofisticação)
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
})

// Configuração da tipografia de corpo (Clareza/Modernidade)
const lato = Lato({ 
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700'],
})

export const metadata: Metadata = {
  title: 'Espaço ANIMA | Psicoterapia e Avaliação Psicológica em Itapuã',
  description: 'Reunimos Psicanálise, Terapia Cognitivo-Comportamental e Avaliação Psicológica em um ambiente construído para acolher diferentes formas de sofrimento psíquico.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${playfair.variable} ${lato.variable} font-sans bg-marfim text-grafite antialiased selection:bg-dourado selection:text-grafite`}>
        <Header />
        <main className="min-h-screen">
          <HeroSection />
          {/* As seções abaixo serão refatoradas nos próximos passos */}
          {/* <QuemSomos /> */}
          <TeamPreview />
          {/* <ComoTrabalhamos /> */}
          <ServicesPreview />
          <CtaSection />
        </main>
        <Footer />
      </body>
    </html>
  )
}