export default function CNLCSection() {
  return (
    <div 
      className="py-16 sm:py-24"
      style={{
        background: 'linear-gradient(90deg, #04070D 0%, #1A2537 60%, #1F2F55 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Canadian National Leadership Conference
          </h2>
          
          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-fblc-sky-blue/20 border border-fblc-sky-blue/30 rounded-lg p-6 text-center">
              <h3 className="text-fblc-sky-blue text-2xl font-bold mb-2">18+ Events</h3>
            </div>
            <div className="bg-fblc-sky-blue/20 border border-fblc-sky-blue/30 rounded-lg p-6 text-center">
              <h3 className="text-fblc-sky-blue text-2xl font-bold mb-2">2 Days Hybrid</h3>
              <p className="text-fblc-sky-blue/80 text-sm">(Online & In-Person)</p>
            </div>
            <div className="bg-fblc-sky-blue/20 border border-fblc-sky-blue/30 rounded-lg p-6 text-center">
              <h3 className="text-fblc-sky-blue text-2xl font-bold mb-2">1850+ Attendees</h3>
            </div>
          </div>

          {/* Conference Description */}
          <div className="bg-black/40 backdrop-blur-sm border border-fblc-sky-blue/30 rounded-lg p-8 mb-16">
            <p className="text-white text-lg leading-relaxed">
              The Canadian National Leadership Conference (CNLC) is FBL Canada's annual flagship event and one of Canada's premier high school business competitions. Each year, the CNLC brings together top high school business leaders from across Canada to compete for prestigious awards, network with like-minded peers, learn from engaging speakers, and have lots of fun!
            </p>
          </div>
        </div>

        {/* Competition Sections */}
        <div className="space-y-12">
          {/* First Row of Competitions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Founder's Den */}
            <div className="bg-black/40 backdrop-blur-sm border border-fblc-sky-blue/30 rounded-lg p-6">
              <h3 className="text-fblc-sky-blue text-xl font-bold mb-4">Founder's Den</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                The Founder's Den, a premier national business pitch event first launched by Brampton FBLC, in 2025, returns in 2028. Now under the Ascend Council of Canada, this year's edition promises its most dynamic and impactful experience yet!
              </p>
            </div>

            {/* JCBC */}
            <div className="bg-black/40 backdrop-blur-sm border border-fblc-sky-blue/30 rounded-lg p-6">
              <h3 className="text-fblc-sky-blue text-xl font-bold mb-4">JCBC (Junior Canadian Business Competition)</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                The Junior Canadian Business Competition is JEC Canada's premier national case competition, where high school students tackle real-world business challenges and present solutions to expert judges, with top teams earning cash prizes and certificates.
              </p>
            </div>

            {/* SAWC */}
            <div className="bg-black/40 backdrop-blur-sm border border-fblc-sky-blue/30 rounded-lg p-6">
              <h3 className="text-fblc-sky-blue text-xl font-bold mb-4">SAWC (Seasonal Article Writing Competition)</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                The Seasonal Article Writing Competition is JEC Canada's premier contest where high school students nationwide showcase their economic prowess through writing. Winners receive prizes such as cash, certificates, and a feature on JEC's National Website.
              </p>
            </div>
          </div>

          {/* Second Row of Competitions */}
          <div className="space-y-4">
            {/* SPC */}
            <div className="flex bg-gray-800 rounded-lg overflow-hidden">
              <div className="bg-fblc-sky-blue w-32 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold">SPC</h3>
                  <div className="w-12 h-0.5 bg-white mx-auto mt-2"></div>
                </div>
              </div>
              <div className="flex-1 p-6 bg-black/40 backdrop-blur-sm">
                <p className="text-white text-sm leading-relaxed">
                  Target Alpha's Stock Pitch Competition is Canada's largest stock pitch competition for high school students, in which competitors pitch a stock to industry professionals. Over 300 students participated in last year's Stock Pitch Competition.
                </p>
              </div>
            </div>

            {/* FPC */}
            <div className="flex bg-gray-800 rounded-lg overflow-hidden">
              <div className="bg-fblc-sky-blue w-32 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold">FPC</h3>
                  <div className="w-12 h-0.5 bg-white mx-auto mt-2"></div>
                </div>
              </div>
              <div className="flex-1 p-6 bg-black/40 backdrop-blur-sm">
                <p className="text-white text-sm leading-relaxed">
                  Target Alpha's Financial Planners Competition (FPC) allows participants to create and pitch a solution to a case study in groups of 1-4 members. Over 300 students participated in last year's Financial Planners' Conference.
                </p>
              </div>
            </div>

            {/* STC */}
            <div className="flex bg-gray-800 rounded-lg overflow-hidden">
              <div className="bg-fblc-sky-blue w-32 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold">STC</h3>
                  <div className="w-12 h-0.5 bg-white mx-auto mt-2"></div>
                </div>
              </div>
              <div className="flex-1 p-6 bg-black/40 backdrop-blur-sm">
                <p className="text-white text-sm leading-relaxed">
                  Target Alpha's Stock Trading (STC) Competition allows students to buy and sell stocks of their choice in an eventful 3-month simulation with sponsor-led workshops. Over 380 students competed in last year's Stock Trading Competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
