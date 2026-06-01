import Header from '@/components/header'
import Footer from '@/components/footer'
import TeamContent from './_components/team-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Equipe',
  description: 'Conheça os profissionais do Espaço ANIMA. Psicanálise e TCC em Itapuã, Salvador.',
}

export default function EquipePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <TeamContent />
      </main>
      <Footer />
    </>
  )
}
