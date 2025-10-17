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
      <main className="w-full px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Future Business Program
          </h1>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
            Preparing tomorrow's business leaders through innovative programs
            and real-world experience.
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-transparent border border-[#60A5FA]/30 rounded-2xl p-12 backdrop-blur-sm text-center">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-white text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We're working hard to bring you an exciting Future Business
              Program. This comprehensive program will provide students with
              cutting-edge business skills, entrepreneurial mindset development,
              and hands-on experience with real business challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">💼</div>
                <h3 className="text-white font-semibold mb-2">
                  Business Skills
                </h3>
                <p className="text-white/70 text-sm">
                  Learn essential business fundamentals and advanced strategies
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="text-white font-semibold mb-2">Real Projects</h3>
                <p className="text-white/70 text-sm">
                  Work on actual business challenges with industry partners
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🤝</div>
                <h3 className="text-white font-semibold mb-2">Mentorship</h3>
                <p className="text-white/70 text-sm">
                  Get guidance from experienced business professionals
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300">
                Get Notified
              </button>
              <button className="bg-transparent border border-[#60A5FA] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#60A5FA]/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
