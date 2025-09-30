import Navigation from "../components/Navigation";
import StatsCard from "../components/StatsCard";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="min-h-screen h-full bg-gradient-to-b from-slate-800 via-slate-900 to-black">
      {/* Gradient Spacer Above Navbar */}
      <div className="w-full" style={{ height: "2.5vw" }}></div>
      {/* Navigation */}
      <div className="flex justify-center w-full">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-4">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-h-[400px]">
          {/* Main Heading */}
          <h1 className="text-white font-black leading-tight mb-4 sm:mb-6 font-[Poppins] drop-shadow-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block">EMPOWERING FUTURE</span>
            <span className="block">BUSINESS</span>
          </h1>

          {/* Sub Heading */}
          <h2 className="text-white font-black leading-tight mb-8 sm:mb-12 font-[Poppins] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            LEADERS, ONE STEP AT A TIME!
          </h2>

          {/* CTA Button */}
          <div
            className="flex justify-center"
            style={{ marginTop: "20px !important" }}
          >
            <div
              className="w-96 h-28 rounded-xl flex items-center justify-center font-black tracking-wide shadow-2xl text-white text-3xl"
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
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-[96%] flex justify-evenly">
          <div className="flex flex-row items-center justify-center gap-4 w-full">
            {/* General Members Card */}
            <div className="flex-1 flex flex-col items-center justify-center bg-blue-400 rounded-xl shadow-[10px_10px_8px_2px_rgba(0,0,0,0.25)] border border-black p-6 min-h-[11rem]">
              <div className="text-white text-6xl font-black font-['MuseoModerno'] mb-2 text-center">
                200+
              </div>
              <div className="text-white text-3xl font-extrabold font-['Mukta_Malar'] text-center">
                General Members
              </div>
            </div>
            {/* Executive Members Card */}
            <div className="flex-1 flex flex-col items-center justify-center bg-indigo-900 rounded-xl shadow-[10px_10px_8px_2px_rgba(0,0,0,0.25)] p-6 min-h-[11rem]">
              <div className="text-white text-6xl font-black font-['MuseoModerno'] mb-2 text-center">
                30+
              </div>
              <div className="text-white text-3xl font-extrabold font-['Mukta_Malar'] text-center">
                Executive Members
              </div>
            </div>
            {/* Subsidiaries Card */}
            <div className="flex-1 flex flex-col items-center justify-center bg-blue-950 rounded-xl shadow-[10px_10px_8px_2px_rgba(0,0,0,0.25)] border border-black p-6 min-h-[11rem]">
              <div className="text-white text-6xl font-black font-['MuseoModerno'] mb-2 text-center">
                2
              </div>
              <div className="text-white text-3xl font-extrabold font-['Mukta_Malar'] text-center">
                Subsidiaries
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-[20px] px-4 sm:px-6 lg:px-8"
        id="about"
        style={{ marginTop: "80px", marginBottom: "80px" }}
      >
        <div className="max-w-7xl mx-auto w-full max-w-full">
          <div className="flex flex-row items-center justify-center gap-16 w-full">
            {/* Images Side - Both images in a column, but as a flex item in the row */}
            <div className="flex flex-col items-center justify-center gap-4 flex-shrink-0">
              <img
                src="https://placehold.co/556x147"
                alt="FBLC Logo Banner"
                className="w-full max-w-lg h-48 object-cover rounded-xl shadow-lg"
                style={{ minWidth: "280px" }}
              />
              <img
                src="https://placehold.co/599x450"
                alt="FBLC Activity"
                className="w-full max-w-xl h-[28rem] object-cover rounded-xl shadow-[24px_24px_16px_8px_rgba(0,0,0,0.35)] -rotate-2"
                style={{ minWidth: "320px" }}
              />
            </div>
            {/* Content Side */}
            <div className="flex flex-col justify-center items-center gap-16 shadow-[12px_12px_6px_0px_rgba(0,0,0,0.25)] bg-slate-800/60 backdrop-blur-sm rounded-2xl p-12 lg:p-20 border border-slate-700/30 flex-1 min-w-[710px] max-w-xl self-center h-auto min-h-[650px] px-8">
              <div className="py-8 p-4 w-[95%] text-white text-4xl sm:text-5xl lg:text-6xl font-bold font-[Poppins] text-center mb-2">
                About Brampton FBLC, JEC, & TA
              </div>
              <div className="w-[95%] text-white text-lg sm:text-xl lg:text-2xl font-normal font-[Poppins] text-center mb-2">
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
                  className="w-96 h-20 pt-2 rounded-2xl shadow-[12px_12px_8px_0px_rgba(2,2,2,0.25)] inline-flex justify-center items-center gap-2.5"
                  style={{ backgroundColor: "#A42B43" }}
                >
                  <div className="w-52 h-11 justify-start text-white text-3xl font-bold font-['Mulish']">
                    LEARN MORE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Image Row Section Above 'What We Are Up To' */}
      <section className="w-full flex justify-center items-center mb-16">
        <div className="min-h-[630px] min-w-[95%] w-full max-w-7xl mx-auto rounded-2xl border border-blue-400 bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-[2px] px-4 py-8 flex flex-row items-center justify-evenly gap-8 overflow-x-auto">
          <img
            src="https://placehold.co/397x287"
            alt="Gallery 1"
            className="w-1/3 min-w-[220px] max-w-xs h-72 object-cover rounded-xl shadow-[12px_12px_8px_4px_rgba(0,0,0,0.25)] rotate-12"
            style={{ flex: "1 1 0" }}
          />
          <img
            src="https://placehold.co/498x323"
            alt="Gallery 2"
            className="w-1/3 min-w-[220px] max-w-md h-80 object-cover rounded-[10px] shadow-[12px_12px_8px_4px_rgba(0,0,0,0.25)] -rotate-6"
            style={{ flex: "1 1 0" }}
          />
          <img
            src="https://placehold.co/282x376"
            alt="Gallery 3"
            className="w-1/3 min-w-[180px] max-w-xs h-96 object-cover rounded-xl shadow-[12px_12px_8px_4px_rgba(0,0,0,0.25)] rotate-3"
            style={{ flex: "1 1 0" }}
          />
        </div>
      </section>

      {/* Gallery Section - "What We Are Up To" */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-[767px] w-full"
        style={{ marginTop: "100px" }}
      >
        <div className="w-[95%] mx-auto flex flex-row items-center justify-between gap-12 min-h-[767px]">
          {/* Text Column */}
          <div className="flex flex-col justify-center items-start gap-8 w-[525px] min-w-[300px]">
            <div
              className="text-white text-8xl font-black font-[Poppins] drop-shadow-lg mb-4"
              style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
            >
              WHAT WE ARE UP TO
            </div>
            <div className="text-white text-2xl font-normal font-['Kufam'] w-[545px] max-w-full">
              Follow us on Instagram, TikTok, and all your favorite platforms to
              stay connected. Don’t miss out on the latest updates,
              behind-the-scenes content, and more—join the community and keep up
              with everything we’re working on. Wherever you scroll, we’ll be
              there.
            </div>
          </div>
          {/* Images Row */}
          <div className="flex flex-row items-center justify-center relative w-[50%] h-[400px]">
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
      </section>

      {/* Footer Section */}
      <footer className="py-12 px-4 flex justify-start items-center w-[90%] ml-[60px] pl-[60px]">
        <div className="w-full max-w-2xl flex flex-row items-center gap-8 md:gap-12 min-h-[16rem] ml-[60px]">
          {/* Footer Image */}
          <img
            src="https://placehold.co/215x129"
            alt="Footer Logo"
            className="w-52 h-32 object-cover rounded-xl"
          />
          {/* Footer Text */}
          <div className="flex-1 flex items-center">
            <p className="text-white text-lg font-normal font-[Kufam]">
              Be part of the movement that’s changing the game this is more than
              content, it’s a community. Don’t just sit on the sidelines, join
              us and help shape the future. Together, we’re building something
              bigger than ourselves, and we want you to be a part of it.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
