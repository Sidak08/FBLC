import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
      <Image
        src="/elevate-leader/ElevateLeaderBannerImage.png"
        alt="Elevate Leader"
        fill
        className="object-cover"
        priority
      />
      <Image
              src="/elevate-leader/ELP-mobile.png" 
              alt="Elevate Leader Mobile Banner"
              fill
              className="object-cover sm:hidden" 
              priority
            />
            {/* Dark overlay for better text readability */}
            <div className="relative z-10 flex items-center justify-center h-full">
            </div>
    </div>
  )
}
