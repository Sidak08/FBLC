import Image from 'next/image'

export default function BuildBravelyBanner() {
  return (
    <div 
      className="mb-0"
      style={{
        background: 'linear-gradient(90deg, #04070D 0%, #1A2537 35%, #1F2F55 77%)'
      }}
    >
      <Image
        src="/events/BannerSVG.svg"
        alt="BUILD BRAVELY – COLLABORATE RESPECTFULLY"
        width={1440}
        height={191}
        className="w-full h-auto"
      />
    </div>
  )
}
