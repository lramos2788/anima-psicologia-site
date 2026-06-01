import Header from '@/components/header'
import Footer from '@/components/footer'
import QuizContent from './_components/quiz-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quiz - Qual Caminho Anima?',
  description: 'Descubra qual tipo de atendimento psicológico é mais indicado para você.',
}

export default function QuizPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <QuizContent />
      </main>
      <Footer />
    </>
  )
}
