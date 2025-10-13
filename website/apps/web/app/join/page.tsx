"use client";

import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

export default function JoinUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-black">
      {/* Gradient Spacer Above Navbar */}
      <div className="w-full" style={{ height: "2.5vw" }}></div>

      {/* Navigation */}
      <div className="flex justify-center w-full">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-4">
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <h1 className="text-white font-black leading-tight mb-4 sm:mb-6 font-[Poppins] drop-shadow-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            JOIN US
          </h1>
          <h2 className="text-white font-normal leading-tight mb-8 sm:mb-12 font-[Poppins] text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Become part of the future business leaders community
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-4xl mx-auto mb-8">
            Ready to take your business skills to the next level? Join FBLC and connect with like-minded individuals who are passionate about entrepreneurship and leadership.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="w-96 h-20 rounded-xl flex items-center justify-center font-black tracking-wide shadow-2xl text-white text-2xl hover:bg-[#8A2337] transition-colors duration-300 cursor-pointer"
              style={{ backgroundColor: "#A42B43" }}
            >
              APPLY NOW
            </button>
            <button
              className="w-96 h-20 rounded-xl flex items-center justify-center font-black tracking-wide shadow-2xl text-white text-2xl border-2 border-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
