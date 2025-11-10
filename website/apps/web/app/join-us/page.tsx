"use client";

// import { Navigation } from "../../components/navigation";
import Link from "next/link";

export default function JoinPage() {
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
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
            Join Brampton FBLC
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Ready to become part of our dynamic community of future business
            leaders? Take the first step towards transforming your
            entrepreneurial dreams into reality.
          </p>
        </div>

        {/* Membership Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* General Membership */}
          <div className="bg-transparent border border-[#60A5FA]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-[#60A5FA]/50 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] flex items-center justify-center">
                <span className="text-white text-xl sm:text-2xl font-bold">
                  G
                </span>
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                General Member
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Perfect for students new to business
              </p>
            </div>

            <ul className="text-white space-y-3 mb-6 sm:mb-8 text-sm sm:text-base">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-3"></span>
                Access to workshops and events
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-3"></span>
                Networking opportunities
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-3"></span>
                Monthly business challenges
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-3"></span>
                Community support
              </li>
            </ul>

            <a 
              href="https://form.jotform.com/252156876829270"
              target="_blank"        
              rel="noopener noreferrer" 
              className="w-full bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white px-6 py-3 sm:py-4 rounded-lg font-semibold hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 text-sm sm:text-base min-h-[44px] touch-manipulation flex items-center justify-center"
              >
              Apply as a General Member
            </a>

          </div>

          {/* Executive Membership */}
          <div className="bg-transparent border border-[#60A5FA]/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-[#60A5FA]/70 transition-all duration-300 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                LEADERSHIP TRACK
              </span>
            </div>

            <div className="text-center mb-6 mt-4">
              <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] flex items-center justify-center">
                <span className="text-white text-xl sm:text-2xl font-bold">
                  E
                </span>
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                Executive Member
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                For experienced leaders and entrepreneurs
              </p>
            </div>

            <ul className="text-white space-y-3 mb-6 sm:mb-8 text-sm sm:text-base">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#1E40AF] rounded-full mr-3"></span>
                All general member benefits
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#1E40AF] rounded-full mr-3"></span>
                Leadership training programs
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#1E40AF] rounded-full mr-3"></span>
                Exclusive mentor access
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#1E40AF] rounded-full mr-3"></span>
                Project management opportunities
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#1E40AF] rounded-full mr-3"></span>
                Direct impact on club direction
              </li>
            </ul>

            <button className="w-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white px-6 py-3 sm:py-4 rounded-lg font-semibold hover:from-[#1D4ED8] hover:to-[#2563EB] transition-all duration-300 text-sm sm:text-base min-h-[44px] touch-manipulation">
              Apply as Executive Member
            </button>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-transparent border border-[#60A5FA]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm mb-12 sm:mb-16">
          <h2 className="text-white text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            Application Process
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] flex items-center justify-center">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2 text-base sm:text-lg">
                Submit Application
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Fill out our comprehensive application form with your background
                and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] flex items-center justify-center">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2 text-base sm:text-lg">
                Interview Process
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Participate in a friendly interview with our admin team.
              </p>
            </div>

            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] flex items-center justify-center">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2 text-base sm:text-lg">
                Welcome Onboard
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Join our community and start your leadership journey with us.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center px-4">
          <h2 className="text-white text-xl sm:text-2xl font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-white/80 mb-6 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Our team is here to help you understand which membership option is
            right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <a
              href="/meet-the-team"
              className="bg-transparent border border-[#60A5FA] text-white px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#60A5FA]/10 transition-all duration-300 text-sm sm:text-base min-h-[44px] touch-manipulation flex items-center justify-center"
            >
              Meet Our Team
            </a>
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white px-6 py-3 sm:py-4 rounded-lg font-semibold hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 text-sm sm:text-base min-h-[44px] touch-manipulation flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
