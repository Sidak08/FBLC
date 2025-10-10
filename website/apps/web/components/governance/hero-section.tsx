import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
      <Image
        src="/governance/GovernanceBG.png"
        alt="Governance Background"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay for better text readability */}
      <div className="relative z-10 flex items-center justify-center h-full">
      </div>
    </div>
  )
}
