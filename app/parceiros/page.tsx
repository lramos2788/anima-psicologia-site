import Header from '@/components/header'
import Footer from '@/components/footer'
import PartnersForm from './_components/partners-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Parcerias',
  description: 'Profissionais de saúde: cadastre-se como parceiro do Espaço ANIMA.',
}

export default function ParceirosPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PartnersForm />
      </main>
      <Footer />
    </>
  )
}
