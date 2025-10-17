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
      <main
        className="w-full px-6 py-16"
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Join Brampton FBLC
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to become part of our dynamic community of future business
            leaders? Take the first step towards transforming your
            entrepreneurial dreams into reality.
          </p>
        </div>

        {/* Membership Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* General Membership */}
          <div className="bg-transparent border border-[#60A5FA]/30 rounded-2xl p-8 backdrop-blur-sm hover:border-[#60A5FA]/50 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] flex items-center justify-center">
                <span className="text-white text-2xl font-bold">G</span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">
                General Member
              </h3>
              <p className="text-white/80 text-sm">
                Perfect for students new to business
              </p>
            </div>

            <ul className="text-white space-y-3 mb-8 text-sm">
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

            <button className="w-full bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300">
              Apply as General Member
            </button>
          </div>

          {/* Executive Membership */}
          <div className="bg-transparent border border-[#60A5FA]/50 rounded-2xl p-8 backdrop-blur-sm hover:border-[#60A5FA]/70 transition-all duration-300 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white px-4 py-1 rounded-full text-xs font-semibold">
                LEADERSHIP TRACK
              </span>
            </div>

            <div className="text-center mb-6 mt-4">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] flex items-center justify-center">
                <span className="text-white text-2xl font-bold">E</span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">
                Executive Member
              </h3>
              <p className="text-white/80 text-sm">
                For experienced leaders and entrepreneurs
              </p>
            </div>

            <ul className="text-white space-y-3 mb-8 text-sm">
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

            <button className="w-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#1D4ED8] hover:to-[#2563EB] transition-all duration-300">
              Apply as Executive Member
            </button>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-transparent border border-[#60A5FA]/30 rounded-2xl p-8 backdrop-blur-sm mb-16">
          <h2 className="text-white text-3xl font-bold text-center mb-8">
            Application Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">
                Submit Application
              </h3>
              <p className="text-white/80 text-sm">
                Fill out our comprehensive application form with your background
                and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">
                Interview Process
              </h3>
              <p className="text-white/80 text-sm">
                Participate in a friendly interview with our admin team.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Welcome Onboard</h3>
              <p className="text-white/80 text-sm">
                Join our community and start your leadership journey with us.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h2 className="text-white text-2xl font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-white/80 mb-6">
            Our team is here to help you understand which membership option is
            right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/meet-the-team"
              className="bg-transparent border border-[#60A5FA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#60A5FA]/10 transition-all duration-300"
            >
              Meet Our Team
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
