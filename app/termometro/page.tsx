import Header from '@/components/header'
import Footer from '@/components/footer'
import ThermometerContent from './_components/thermometer-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termômetro Emocional',
  description: 'Como você está se sentindo hoje? Compartilhe anonimamente e veja como a comunidade ANIMA se sente.',
}

export default function TermometroPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ThermometerContent />
      </main>
      <Footer />
    </>
  )
}
