"use client";

//import { Navigation } from "../../components/navigation";

export default function FutureBusinessProgram() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-black">
      {/* Gradient Spacer Above Navbar */}
      <div className="w-full" style={{ height: "2.5vw" }}></div>
      {/* Navigation */}
      {/*<div className="flex justify-center w-full">
        <Navigation />
      </div>*/}

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Future Business Program
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
            Preparing tomorrow&apos;s business leaders through innovative
            programs and real-world experience.
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-transparent border border-[#60A5FA]/30 rounded-2xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">
              🚀
            </div>
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">
              Coming Soon
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              We&apos;re working hard to bring you an exciting Future Business
              Program. This comprehensive program will provide students with
              cutting-edge business skills, entrepreneurial mindset development,
              and hands-on experience with real business challenges.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl mb-2">💼</div>
                <h3 className="text-white font-semibold mb-2 text-base sm:text-lg">
                  Business Skills
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Learn essential business fundamentals and advanced strategies
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl mb-2">🎯</div>
                <h3 className="text-white font-semibold mb-2 text-base sm:text-lg">
                  Real Projects
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Work on actual business challenges with industry partners
                </p>
              </div>
              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="text-2xl sm:text-3xl mb-2">🤝</div>
                <h3 className="text-white font-semibold mb-2 text-base sm:text-lg">
                  Mentorship
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Get guidance from experienced business professionals
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <button className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 text-sm sm:text-base min-h-[44px] touch-manipulation">
                Get Notified
              </button>
              <button className="bg-transparent border border-[#60A5FA] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#60A5FA]/10 transition-all duration-300 text-sm sm:text-base min-h-[44px] touch-manipulation">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
