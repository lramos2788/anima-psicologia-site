import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Espaço ANIMA | Psicólogo em Itapuã, Salvador - Psicoterapia Integrativa',
    template: '%s | Espaço ANIMA',
  },
  description:
    'Espaço ANIMA: clínica de psicoterapia integrativa em Itapuã, Salvador. Psicanálise e Terapia Cognitivo-Comportamental (TCC). Atendimento individual, em grupo, avaliações psicológicas e cursos.',
  keywords: [
    'psicólogo Itapuã',
    'psicólogo Salvador',
    'psicoterapia Salvador',
    'psicanálise Salvador',
    'TCC Salvador',
    'terapia cognitivo comportamental',
    'avaliação psicológica Salvador',
    'Espaço ANIMA',
  ],
  openGraph: {
    title: 'Espaço ANIMA | Psicoterapia Integrativa em Salvador',
    description:
      'Onde a profundidade da escuta psicanalítica encontra a clareza das práticas baseadas em evidências.',
    images: ['/og-image.png'],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espaço ANIMA | Psicoterapia Integrativa em Salvador',
    description:
      'Onde a profundidade da escuta psicanalítica encontra a clareza das práticas baseadas em evidências.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        <Toaster />
        <ChunkLoadErrorHandler />
        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: 'Espaço ANIMA',
              description:
                'Clínica de psicoterapia integrativa em Itapuã, Salvador. Psicanálise e TCC.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rua da Cacimba, s/n, 2º andar - Sala 202',
                addressLocality: 'Salvador',
                addressRegion: 'BA',
                postalCode: '41620-000',
                addressCountry: 'BR',
              },
              telephone: '+55-71-99295-3117',
              email: 'lucasrdo2@outlook.com',
              url: process.env.NEXTAUTH_URL ?? 'http://localhost:3000',
              areaServed: 'Itapuã, Salvador, Bahia',
              medicalSpecialty: 'Psychiatric',
            }),
          }}
        />
      </body>
    </html>
  )
}
