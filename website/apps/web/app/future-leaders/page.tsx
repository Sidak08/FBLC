import HeroSection from '@/components/future-leaders/hero-section'
import StrategyBanner from '@/components/future-leaders/strategy-banner'
import BursarySection from '@/components/future-leaders/bursary-section'
import ProgramSection from '@/components/future-leaders/program-section'

export default function FutureLeadersPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StrategyBanner />
      <BursarySection />
      <ProgramSection />
    </div>
  )
}