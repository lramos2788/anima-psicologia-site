import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from './_components/hero-section'
import TeamPreview from './_components/team-preview'
import TwoApproachesSection from './_components/two-approaches-section'
import ServicesPreview from './_components/services-preview'
import CtaSection from './_components/cta-section'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TeamPreview />
        <TwoApproachesSection />
        <ServicesPreview />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
