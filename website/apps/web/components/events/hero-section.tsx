import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
      <Image
        src="/events/EventsBanner.png"
        alt="Events Banner"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}
