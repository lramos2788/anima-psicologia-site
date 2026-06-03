import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from './_components/hero-section'
import AboutSection from './_components/about-section'
import TeamPreview from './_components/team-preview'
import ServicesPreview from './_components/services-preview'
import CtaSection from './_components/cta-section'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TeamPreview />
        <ServicesPreview />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}