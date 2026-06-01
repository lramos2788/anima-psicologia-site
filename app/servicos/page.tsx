import Header from '@/components/header'
import Footer from '@/components/footer'
import ServicesContent from './_components/services-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serviços',
  description: 'Conheça os serviços do Espaço ANIMA: psicoterapia individual, terapia em grupo, avaliações psicológicas e cursos.',
}

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ServicesContent />
      </main>
      <Footer />
    </>
  )
}
