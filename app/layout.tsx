import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_RAW,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700'],
})

const siteDescription =
  'Dois psicólogos, duas abordagens, um mesmo espaço em Itapuã. Psicanálise com Lucas Ramos (CRP 03/29660) e Terapia Cognitivo-Comportamental com Benedita Araujo (CRP 03/19048). Atendimento a partir de 18 anos.'

export const metadata: Metadata = {
  title: 'Espaço ANIMA | Psicanálise e TCC em Itapuã, Salvador',
  description: siteDescription,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Espaço ANIMA | Psicanálise e TCC em Itapuã, Salvador',
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espaço ANIMA | Psicanálise e TCC em Itapuã, Salvador',
    description: siteDescription,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  description: 'Espaço compartilhado de atendimento psicológico em Itapuã, Salvador',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua da Cacimba, s/n, 2º andar - Sala 202',
    addressLocality: 'Salvador',
    addressRegion: 'BA',
    addressCountry: 'BR',
  },
  telephone: CONTACT_PHONE_RAW,
  email: CONTACT_EMAIL,
  url: SITE_URL,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${lato.variable} font-sans bg-marfim text-grafite antialiased selection:bg-dourado selection:text-grafite`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
