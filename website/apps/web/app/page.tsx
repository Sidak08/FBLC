"use client";

//import { Navigation } from "../components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen h-full bg-gradient-to-b from-slate-800 via-slate-900 to-black">
      {/* Gradient Spacer Above Navbar */}
      <div className="w-full" style={{ height: "2.5vw" }}></div>
      {/* Navigation */}
      {/*<div className="flex justify-center w-full">
        <Navigation />
      </div>*/}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-4">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-h-[400px]">
          {/* Main Heading */}
          <h1 className="text-white font-black leading-tight mb-4 sm:mb-6 font-[Poppins] drop-shadow-2xl text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block">EMPOWERING FUTURE</span>
            <span className="block">BUSINESS</span>
          </h1>

          {/* Sub Heading */}
          <h2 className="text-white font-black leading-tight mb-8 sm:mb-12 font-[Poppins] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            LEADERS, ONE STEP AT A TIME!
          </h2>

          {/* CTA Button */}
          <div
            className="flex justify-center"
            style={{ marginTop: "20px !important" }}
          >
            <div
              className="w-72 xs:w-80 sm:w-96 h-20 xs:h-24 sm:h-28 rounded-xl flex items-center justify-center font-black tracking-wide shadow-2xl text-white text-lg xs:text-xl sm:text-2xl md:text-3xl cursor-pointer hover:bg-[#8A2337] transition-colors duration-300 px-4"
              style={{ backgroundColor: "#A42B43" }}
            >
              REGISTER NOW!
            </div>
          </div>
        </div>

        {/* Decorative gradient at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full">
            {/* General Members Card */}
            <div className="w-full sm:flex-1 flex flex-col items-center justify-center bg-blue-400 rounded-xl shadow-[10px_10px_8px_2px_rgba(0,0,0,0.25)] border border-black p-4 sm:p-6 min-h-[10rem] sm:min-h-[11rem]">
              <div className="text-white text-4xl sm:text-5xl lg:text-6xl font-black font-['MuseoModerno'] mb-2 text-center">
                200+
              </div>
              <div className="text-white text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Mukta_Malar'] text-center">
                General Members
              </div>
            </div>
            {/* Executive Members Card */}
            <div className="w-full sm:flex-1 flex flex-col items-center justify-center bg-indigo-900 rounded-xl shadow-[10px_10px_8px_2px_rgba(0,0,0,0.25)] p-4 sm:p-6 min-h-[10rem] sm:min-h-[11rem]">
              <div className="text-white text-4xl sm:text-5xl lg:text-6xl font-black font-['MuseoModerno'] mb-2 text-center">
                30+
              </div>
              <div className="text-white text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Mukta_Malar'] text-center">
                Executive Members
              </div>
            </div>
            {/* Subsidiaries Card */}
            <div className="w-full sm:flex-1 flex flex-col items-center justify-center bg-blue-950 rounded-xl shadow-[10px_10px_8px_2px_rgba(0,0,0,0.25)] border border-black p-4 sm:p-6 min-h-[10rem] sm:min-h-[11rem]">
              <div className="text-white text-4xl sm:text-5xl lg:text-6xl font-black font-['MuseoModerno'] mb-2 text-center">
                2
              </div>
              <div className="text-white text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Mukta_Malar'] text-center">
                Subsidiaries
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-8 sm:py-12 lg:py-[20px] px-4 sm:px-6 lg:px-8"
        id="about"
        style={{ marginTop: "40px", marginBottom: "40px" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full">
            {/* Images Side - Both images in a column, but as a flex item in the row */}
            <div className="flex flex-col items-center justify-center gap-4 flex-shrink-0 w-full lg:w-auto">
              <img
                src="https://placehold.co/556x147"
                alt="FBLC Logo Banner"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-32 sm:h-40 lg:h-48 object-cover rounded-xl shadow-lg"
              />
              <img
                src="https://placehold.co/599x450"
                alt="FBLC Activity"
                className="w-full max-w-sm sm:max-w-md lg:max-w-xl h-64 sm:h-80 lg:h-[28rem] object-cover rounded-xl shadow-[24px_24px_16px_8px_rgba(0,0,0,0.35)] -rotate-1 lg:-rotate-2"
              />
            </div>
            {/* Content Side */}
            <div className="flex flex-col justify-center items-center gap-8 sm:gap-12 lg:gap-16 shadow-[12px_12px_6px_0px_rgba(0,0,0,0.25)] bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 xl:p-20 border border-slate-700/30 flex-1 w-full lg:max-w-xl self-center h-auto min-h-[500px] sm:min-h-[600px] lg:min-h-[650px]">
              <div className="w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-[Poppins] text-center mb-2">
                About Brampton FBLC, JEC, & TA
              </div>
              <div className="w-full text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-normal font-[Poppins] text-center mb-2 leading-relaxed">
                Brampton FBLC , JEC, & TA is a youth-driven business club
                dedicated to empowering the next generation of entrepreneurs and
                leaders. Our mission is to educate, inspire, and equip
                individuals with real-world business knowledge through hands-on
                experiences, mentorship, and collaborative projects. We provide
                you the tools, community, and guidance to help you grow and
                thrive in the world of business.
              </div>
              <div className="w-full flex justify-center">
                <div
                  className="w-64 sm:w-80 lg:w-96 h-16 sm:h-18 lg:h-20 pt-2 rounded-2xl shadow-[12px_12px_8px_0px_rgba(2,2,2,0.25)] inline-flex justify-center items-center gap-2.5 cursor-pointer hover:bg-[#8A2337] transition-colors duration-300 px-4"
                  style={{ backgroundColor: "#A42B43" }}
                >
                  <div className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-['Mulish'] text-center">
                    LEARN MORE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Image Row Section Above 'What We Are Up To' */}
      <section className="w-full flex justify-center items-center mb-8 sm:mb-12 lg:mb-16">
        <div className="min-h-[300px] sm:min-h-[450px] lg:min-h-[630px] w-[95%] max-w-7xl mx-auto rounded-2xl border border-blue-400 bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-[2px] px-4 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-center sm:justify-evenly gap-4 sm:gap-6 lg:gap-8 overflow-hidden">
          <img
            src="https://placehold.co/397x287"
            alt="Gallery 1"
            className="w-full sm:w-1/3 max-w-[250px] sm:max-w-xs h-48 sm:h-60 lg:h-72 object-cover rounded-xl shadow-[12px_12px_8px_4px_rgba(0,0,0,0.25)] rotate-3 sm:rotate-12"
          />
          <img
            src="https://placehold.co/498x323"
            alt="Gallery 2"
            className="w-full sm:w-1/3 max-w-[280px] sm:max-w-md h-52 sm:h-64 lg:h-80 object-cover rounded-[10px] shadow-[12px_12px_8px_4px_rgba(0,0,0,0.25)] -rotate-2 sm:-rotate-6"
          />
          <img
            src="https://placehold.co/282x376"
            alt="Gallery 3"
            className="w-full sm:w-1/3 max-w-[220px] sm:max-w-xs h-56 sm:h-72 lg:h-96 object-cover rounded-xl shadow-[12px_12px_8px_4px_rgba(0,0,0,0.25)] rotate-1 sm:rotate-3"
          />
        </div>
      </section>

      {/* Gallery Section - "What We Are Up To" */}
      <section
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center w-full"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <div className="w-[95%] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12">
          {/* Text Column */}
          <div className="flex flex-col justify-center items-center lg:items-start gap-6 lg:gap-8 w-full lg:w-[525px] text-center lg:text-left">
            <div
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black font-[Poppins] drop-shadow-lg mb-2 sm:mb-4"
              style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
            >
              WHAT WE ARE UP TO
            </div>
            <div className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-normal font-['Kufam'] max-w-full lg:max-w-[545px] leading-relaxed">
              Follow us on Instagram, TikTok, and all your favorite platforms to
              stay connected. Don't miss out on the latest updates,
              behind-the-scenes content, and more—join the community and keep up
              with everything we're working on. Wherever you scroll, we'll be
              there.
            </div>
          </div>
          {/* Images Row */}
          <div className="flex flex-col sm:flex-row lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:relative w-full lg:w-[50%] lg:h-[400px]">
            {/* Mobile/Tablet: Simple row layout */}
            <div className="flex sm:hidden lg:hidden flex-col items-center gap-4 w-full">
              <img
                src="https://placehold.co/350x400"
                alt="Gallery 1"
                className="w-48 h-64 rounded-2xl shadow-[12px_12px_8px_4px_rgba(0,0,0,0.25)]"
              />
              <img
                src="https://placehold.co/350x400"
                alt="Gallery 2"
                className="w-52 h-72 rounded-2xl shadow-[12px_12px_8px_4px_rgba(0,0,0,0.25)]"
              />
              <img
                src="https://placehold.co/350x400"
                alt="Gallery 3"
                className="w-48 h-64 rounded-2xl shadow-[12px_12px_8px_4px_rgba(0,0,0,0.25)]"
              />
            </div>
            {/* Small tablets: Simple row layout */}
            <div className="hidden sm:flex lg:hidden flex-row items-center justify-center gap-4 w-full">
              <img
                src="https://placehold.co/350x400"
                alt="Gallery 1"
                className="w-32 h-40 rounded-2xl shadow-[12px_12px_8px_4px_rgba(0,0,0,0.25)]"
              />
              <img
                src="https://placehold.co/350x400"
                alt="Gallery 2"
                className="w-36 h-48 rounded-2xl shadow-[12px_12px_8px_4px_rgba(0,0,0,0.25)]"
              />
              <img
                src="https://placehold.co/350x400"
                alt="Gallery 3"
                className="w-32 h-40 rounded-2xl shadow-[12px_12px_8px_4px_rgba(0,0,0,0.25)]"
              />
            </div>
            {/* Desktop: Complex overlapping layout */}
            <div className="hidden lg:flex absolute inset-0">
              {/* Card 1 - Layer height 1, 50% opacity, overlaps center from left */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-[120%] -translate-y-1/2 z-10 opacity-50">
                <img
                  src="https://placehold.co/350x400"
                  alt="Gallery 1"
                  className="w-72 h-96 rounded-2xl shadow-[12px_12px_8px_4px_rgba(0,0,0,0.25)]"
                />
              </div>
              {/* Card 2 - Layer height 2, full opacity */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <img
                  src="https://placehold.co/350x400"
                  alt="Gallery 2"
                  className="w-72 h-96 rounded-2xl shadow-[12px_12px_8px_4px_rgba(0,0,0,0.25)]"
                />
              </div>
              {/* Card 3 - Layer height 1, 50% opacity, overlaps center from right */}
              <div className="absolute left-1/2 top-1/2 transform translate-x-[20%] -translate-y-1/2 z-10 opacity-50">
                <img
                  src="https://placehold.co/350x400"
                  alt="Gallery 3"
                  className="w-72 h-96 rounded-2xl shadow-[12px_12px_8px_4px_rgba(0,0,0,0.25)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center w-full">
        <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12 min-h-[12rem] sm:min-h-[16rem]">
          {/* Footer Image */}
          <img
            src="https://placehold.co/215x129"
            alt="Footer Logo"
            className="w-40 sm:w-48 lg:w-52 h-24 sm:h-28 lg:h-32 object-cover rounded-xl flex-shrink-0"
          />
          {/* Footer Text */}
          <div className="flex-1 flex items-center">
            <p className="text-white text-sm sm:text-base lg:text-lg font-normal font-[Kufam] text-center sm:text-left leading-relaxed">
              Be part of the movement that&apos;s changing the game this is more
              than content, it&apos;s a community. Don&apos;t just sit on the
              sidelines, join us and help shape the future. Together, we&apos;re
              building something bigger than ourselves, and we want you to be a
              part of it.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
