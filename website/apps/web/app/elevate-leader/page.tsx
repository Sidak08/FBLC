import HeroSection from '@/components/elevate-leader/hero-section'
import StrategyBanner from '@/components/elevate-leader/strategy-banner'
import ProgramSection from '@/components/elevate-leader/program-section'

export default function ElevateLeaderPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StrategyBanner />
      <ProgramSection />
    </div>
  )
}