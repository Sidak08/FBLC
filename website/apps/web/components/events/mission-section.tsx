import Image from 'next/image'

export default function MissionSection() {
  return (
    <div 
      className="py-16 sm:py-24"
      style={{
        background: 'linear-gradient(90deg, #04070D 0%, #1A2537 60%, #1F2F55 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="border rounded-lg p-8" style={{ backgroundColor: '#0F172A', borderColor: '#60A5FA' }}>
            <div className="space-y-6 text-white">
              <p className="text-base leading-relaxed">
                Brampton FBLC, JEC & TA is committed to empowering the next generation of business leaders through professional growth and competitive excellence. Each year, we offer our members access to 8+ national events, designed to help them unlock their full potential.
              </p>
              <p className="text-base leading-relaxed">
                Our events provide transformative opportunities, from case competitions and skill-building workshops to webinars, networking sessions, and leadership experiences.
              </p>
              <p className="text-base leading-relaxed">
                Every initiative ties back to our core principle: <strong><em>Empowering Future Business Leaders, One Step at a Time.</em></strong>
              </p>
            </div>
          </div>

          {/* Maple Leaf Graphic */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/events/MapleLeafImage.png"
              alt="Canadian Maple Leaf"
              width={800}
              height={800}
              className="w-96 h-96 sm:w-[28rem] sm:h-[28rem] lg:w-[32rem] lg:h-[32rem]"
            />
          </div>
        </div>

        {/* Bottom Heading */}
        <div className="text-center mt-16">
          <h2 className="text-white text-2xl sm:text-3xl font-bold">
            Brampton FBLC, JEC & TA's Events Empowers Members to:
          </h2>
        </div>
      </div>
    </div>
  )
}
