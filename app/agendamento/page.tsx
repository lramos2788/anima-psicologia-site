import Header from '@/components/header'
import Footer from '@/components/footer'
import BookingForm from './_components/booking-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agendamento',
  description: 'Solicite seu agendamento no Espaço ANIMA. Psicoterapia individual, em grupo, avaliações e cursos em Itapuã, Salvador.',
}

export default function AgendamentoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <BookingForm />
      </main>
      <Footer />
    </>
  )
}
