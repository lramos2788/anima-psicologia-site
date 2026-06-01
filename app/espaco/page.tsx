import Header from '@/components/header'
import Footer from '@/components/footer'
import SpaceMap from './_components/space-map'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'O Espaço',
  description: 'Conheça o Espaço ANIMA em Itapuã, Salvador. Um ambiente acolhedor para a sua jornada terapêutica.',
}

export default function EspacoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <SpaceMap />
      </main>
      <Footer />
    </>
  )
}
