"use client";
import { useState } from "react";
import Image from "next/image";
import Navigation from "../../components/Navigation";

export default function AcademicProgramming() {
  const [activeTab, setActiveTab] = useState("training");

  const statsData = [
    {
      icon: "/ap/FBLC/Vector.svg",
      title: "Over 1000+ resources",
      subtitle: "available",
    },
    {
      icon: "/ap/FBLC/Vector-1.svg",
      title: "80% Training",
      subtitle: "Satisfaction Rate",
    },
    {
      icon: "/ap/FBLC/briefcase-solid-full 2.svg",
      title: "Interactive & Educational",
      subtitle: "Workshops",
    },
  ];

  const developmentStrategy = [
    {
      title: "INTEGRATES",
      subtitle: "ACADEMICS AND FUN",
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "REKINDLES",
      subtitle: "COMPETITIVE SPIRIT",
      color: "from-purple-600 to-purple-800",
    },
    {
      title: "FUELS",
      subtitle: "CREATIVITY",
      color: "from-green-600 to-green-800",
    },
    {
      title: "ENCOURAGES",
      subtitle: "THOUGHTFUL EXPLORATION",
      color: "from-red-600 to-red-800",
    },
  ];

  const subjects = [
    "Accounting",
    "Public Speaking",
    "Business Law",
    "Economics",
    "Personal Finance",
  ];

  const adminTeam = [
    {
      name: "Dhruv Aggarwal",
      role: "Deputy Director of Academic Programming",
      image: "/team/dhruv.jpg",
      hasTag: false,
    },
    {
      name: "Swathi Vasupilli",
      role: "Director of the Academic Programming",
      image: "/team/swathi.jpg",
      hasTag: true,
    },
    {
      name: "Piraneerth Pathmajeyalan",
      role: "Supervising Administrator",
      image: "/team/piraneerth.jpg",
      hasTag: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-black">
      {/* Gradient Spacer Above Navbar */}
      <div className="w-full" style={{ height: "2.5vw" }}></div>

      {/* Navigation - Centered */}
      <div className="flex justify-center w-full">
        <Navigation />
      </div>

      {/* Hero Section - Fully Centered */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 border-2 border-red-500/20 rounded-full"></div>
          <div className="absolute bottom-32 left-10 w-32 h-32 border-2 border-green-500/20 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-blue-500/20 rounded-full"></div>
        </div>

        {/* Hero Content - Centered Container */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
          {/* Department Label - Centered */}
          <div className="text-white/80 text-lg sm:text-xl font-normal font-[Poppins] mb-4">
            Department of Education
          </div>

          {/* Main Title - Centered */}
          <h1 className="text-white font-black leading-tight mb-6 font-[Poppins] drop-shadow-2xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
            Academic Programming
          </h1>

          {/* Subtitle - Centered */}
          <p className="text-white/90 text-lg sm:text-xl lg:text-2xl font-normal font-[Poppins] mb-12 max-w-4xl leading-relaxed text-center">
            Academics at Brampton FBLC, JEC, and TA are a fundamental component
            of the organization&apos;s functionality.
          </p>

          {/* CTA Buttons - Centered */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <button className="bg-[#1E40AF] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1D4ED8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Join Us
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
              Membership Prospectus
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section - Cards Centered */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="mx-auto w-full">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-8 text-center shadow-[10px_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[15px_15px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-2 w-full max-w-sm min-w-[400px] min-h-[300px] flex flex-col items-center justify-center"
                style={{ margin: "40px" }}
              >
                <div className="mb-3 flex justify-center">
                  <Image
                    src={stat.icon}
                    alt={`${stat.title} icon`}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="text-white text-2xl font-bold font-[Poppins] mb-2 text-center">
                  {stat.title}
                </div>
                <div className="text-white/80 text-xl font-medium font-[Poppins] text-center">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section - Container Centered, Content Left-Aligned */}
      <section
        className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
        style={{ marginTop: "100px" }}
      >
        <div className="mx-auto mt-[130px] min-h-[465px] flex flex-col justify-center items-center">
          {/* Heading moved inside content box for vertical centering */}

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl py-8 lg:py-12 px-12 lg:px-20 shadow-[15px_15px_30px_rgba(0,0,0,0.3)] flex flex-col justify-center gap-10 w-[90%] h-[470px] mx-auto">
            <div className="w-full" style={{ paddingLeft: "150px" }}>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black font-[Poppins] mb-6 text-left">
                What to expect?
              </h2>
              <p className="text-white/90 text-lg sm:text-xl font-normal font-[Poppins] mb-8 leading-relaxed">
                Academics at Brampton FBLC, JEC, and TA believes in a
                case-oriented and hands-on approach to learning business,
                facilitating a fun and productive learning environment. Specific
                examples from the real world help to bolster understanding of
                concepts and see them in action.
              </p>

              {/* Tabs (static labels with a thin line before each) */}
              <div className="flex flex-wrap gap-12 mb-8 items-center">
                {["Weekly Training", "Workshops", "Assessments"].map(
                  (label) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="inline-block w-[2px] h-[12px] bg-blue-500"></span>
                      <span className="text-white text-lg font-medium font-[Poppins]">
                        {label}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Hub Section - Refined Layout */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-4/5 relative" style={{ marginTop: "80px" }}>
          {/* Fixed-height panel */}
          <div className="relative w-full h-[276px] rounded-2xl bg-[#0E1420] border border-[#3B82F6] overflow-visible py-6 pr-6 flex">
            {/* Left content block */}
            <div
              className="flex flex-col justify-center w-[55%] min-w-[520px] pr-4"
              style={{ marginLeft: "80px !important" }}
            >
              <h2 className="text-white text-5xl font-black font-[Poppins] leading-tight mb-3">
                Education Hub
              </h2>
              <p className="text-white/90 text-xl font-normal font-[Poppins] leading-relaxed max-w-[640px]">
                The Education Hub is a comprehensive document listing thousands
                of resources under many topics.
              </p>
            </div>

            {/* Right layered cards container */}
            <div className="relative flex-1">
              {/* Main white card positioned to the far right and vertically centered */}
              <div className="absolute top-1/2 -translate-y-1/2 right-12 bg-white rounded-xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.55)] border border-slate-200 w-[500px] max-w-[500px] p-8">
                <h3 className="text-center text-[#B91C1C] font-bold text-2xl mb-4 tracking-wide">
                  The Education Hub
                </h3>
                <div className="h-px w-full bg-slate-300 mb-5" />
                <p className="text-slate-800 text-sm leading-relaxed mb-4">
                  <strong>This Education Hub</strong> was created for the
                  purpose of compiling over <strong>1000+ resources</strong>{" "}
                  that general members of Brampton FBLC, JEC, &amp; TA can use.
                  All of these resources have been officially approved by the
                  Department of Education.
                </p>
                <p className="text-slate-800 text-sm leading-relaxed">
                  The document was created and initially developed by
                  Co-President Piraneerth Pathmajeyalan, who serves as the
                  original author and lead curator. The Department of Education
                  contributes additional content and ongoing updates to support
                  the document’s continued development.
                </p>
              </div>

              {/* Mini card overlapping main card (tucked closer) */}
              <div className="absolute top-[18%] -left-6 bg-white rounded-lg shadow-[0_6px_28px_-6px_rgba(0,0,0,0.5)] border border-slate-200 w-44 p-5">
                <div className="h-2 w-20 bg-slate-300 mb-3 rounded" />
                <ul className="space-y-1 text-[10px] leading-snug text-slate-700">
                  <li className="underline text-blue-600">
                    Learning resources
                  </li>
                  <li className="underline text-blue-600">Frameworks</li>
                  <li className="underline text-blue-600">Cases</li>
                  <li className="underline text-blue-600">Videos</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Tags row moved fully below panel (matches separated look) */}
          <div
            className="mt-6 flex flex-wrap gap-3"
            style={{ marginTop: "24px !important" }}
          >
            {subjects.map((subject, index) => (
              <span
                key={index}
                className="w-[250px] h-[65px] flex items-center justify-center rounded-md bg-slate-800/80 border border-slate-600/40 text-white text-sm font-medium font-[Poppins] backdrop-blur-sm hover:bg-slate-700/80 transition-colors"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Administration Section - All Content Centered */}
      <section
        className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
        style={{ marginTop: "100px" }}
      >
        {/* Full-width background rectangle */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ap/Rectangle.svg"
            alt="Background rectangle"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto text-center">
          <h2 className="text-white text-4xl sm:text-5xl font-black font-[Poppins] mb-6 text-center">
            Administration
          </h2>
          <p className="text-white/80 text-lg lg:text-xl font-normal font-[Poppins] mb-16 text-center max-w-3xl mx-auto leading-relaxed">
            If you have any questions about academic programming, please
            redirect it to these people.
          </p>

          {/* Cards Layout - 2 on top, 1 below centered */}
          <div className="max-w-7xl mx-auto">
            {/* Top row - 2 cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {adminTeam.slice(0, 2).map((member, index) => (
                <div key={index} className="relative">
                  {member.hasTag && (
                    <div className="absolute -top-3 left-8 bg-blue-500 text-white px-3 py-1 rounded text-sm font-medium z-10">
                      Rectangle
                    </div>
                  )}
                  <div className="bg-slate-900/80 backdrop-blur-sm border border-blue-500/40 rounded-2xl p-8 flex items-center gap-6 shadow-[10px_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[15px_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300 min-h-[200px]">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500/30">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <div className="text-white/80 text-sm font-medium font-[Poppins] mb-2">
                        {member.role}
                      </div>
                      <h3 className="text-white text-2xl lg:text-3xl font-bold font-[Poppins] leading-tight">
                        {member.name.split(" ").map((word, i) => (
                          <div key={i}>{word}</div>
                        ))}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom row - 1 card centered */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                {adminTeam.slice(2).map((member, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/80 backdrop-blur-sm border border-blue-500/40 rounded-2xl p-8 flex items-center gap-6 shadow-[10px_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[15px_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300 min-h-[200px]"
                  >
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500/30">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <div className="text-white/80 text-sm font-medium font-[Poppins] mb-2">
                        {member.role}
                      </div>
                      <h3 className="text-white text-2xl lg:text-3xl font-bold font-[Poppins] leading-tight">
                        {member.name.split(" ").map((word, i) => (
                          <div key={i}>{word}</div>
                        ))}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section - Following Home Page Pattern */}
      <footer className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Footer Logo removed */}
            {/* Footer Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-white text-lg lg:text-xl font-normal font-[Kufam] leading-relaxed">
                Be part of the movement that&apos;s changing the game this is
                more than content, it&apos;s a community. Don&apos;t just sit on
                the sidelines, join us and help shape the future. Together,
                we&apos;re building something bigger than ourselves, and we want
                you to be a part of it.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
