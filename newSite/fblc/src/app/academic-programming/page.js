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
      name: "Piraneerth Pathmajeyalan",
      role: "Supervising Admin",
      image: "/team/piraneerth.jpg",
    },
    {
      name: "Swathi Vasupilli",
      role: "Director of the academic programming",
      image: "/team/swathi.jpg",
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-8 text-center shadow-[10px_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[15px_15px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-2 w-full max-w-sm min-w-[400px] min-h-[300px] flex flex-col items-center justify-center"
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
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mt-[130px] min-h-[465px] flex flex-col gap-8">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black font-[Poppins] mb-16 text-center lg:text-left">
            What to expect?
          </h2>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 lg:p-12 shadow-[15px_15px_30px_rgba(0,0,0,0.3)] flex flex-col flex-1 gap-8">
            <p className="text-white/90 text-lg sm:text-xl font-normal font-[Poppins] mb-8 leading-relaxed">
              Academics at Brampton FBLC, JEC, and TA believes in a
              case-oriented and hands-on approach to learning business,
              facilitating a fun and productive learning environment. Specific
              examples from the real world help to bolster understanding of
              concepts and see them in action.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { id: "training", label: "Weekly Training" },
                { id: "workshops", label: "Workshops" },
                { id: "assessments", label: "Assessments" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#1E40AF] text-white shadow-lg"
                      : "bg-slate-700/50 text-white/80 hover:bg-slate-600/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-slate-900/50 rounded-xl p-6 flex-1 flex flex-col">
              <div className="text-white flex-1 flex flex-col">
                {activeTab === "training" && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Weekly Training Sessions
                    </h3>
                    <p className="text-lg leading-relaxed">
                      Participate in comprehensive weekly training sessions
                      covering essential business topics, case studies, and
                      practical applications. Our interactive approach ensures
                      deep understanding and retention.
                    </p>
                  </div>
                )}
                {activeTab === "workshops" && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Interactive Workshops
                    </h3>
                    <p className="text-lg leading-relaxed">
                      Engage in hands-on workshops designed to build practical
                      skills through real-world scenarios, group projects, and
                      collaborative problem-solving exercises.
                    </p>
                  </div>
                )}
                {activeTab === "assessments" && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Performance Assessments
                    </h3>
                    <p className="text-lg leading-relaxed">
                      Regular assessments help track your progress and identify
                      areas for improvement, ensuring you&apos;re meeting your
                      learning objectives and developing key competencies.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Hub Section - Container Centered, Two-Column Layout */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Side - Content Left-Aligned */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-white text-4xl sm:text-5xl font-black font-[Poppins] mb-8">
                Education Hub
              </h2>
              <p className="text-white/90 text-lg lg:text-xl font-normal font-[Poppins] mb-10 leading-relaxed">
                The Education Hub is a comprehensive document listing thousands
                of resources under many topics.
              </p>

              {/* Subject Tags - Centered on mobile, Left-aligned on desktop */}
              <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                {subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="bg-[#1E40AF] text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-[#1D4ED8] transition-colors duration-300 cursor-pointer"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side - Document Preview Centered in Column */}
            <div className="flex justify-center">
              <div className="relative max-w-md w-full">
                <div className="bg-white rounded-2xl p-8 shadow-[20px_20px_40px_rgba(0,0,0,0.3)] transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="text-slate-900">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">📚</span>
                      </div>
                      <h3 className="text-2xl font-bold text-red-600">
                        The Education Hub
                      </h3>
                    </div>

                    <div className="space-y-4 text-sm">
                      <p className="font-semibold">
                        This document was created and initially developed by the
                        Brampton Future Business Leaders Conference (FBLC-JEC).
                        It is a form-course and it hosts resources.
                      </p>
                      <p>
                        It is hoped that you can contribute to this document and
                        further develop it as opportunities for the Department
                        of Education.
                      </p>
                      <p>
                        This document was updated and initially developed by the
                        Brampton Future Business Leaders Conference (FBLC-JEC).
                        We suggest to the request section and The Department of
                        Education as available, other topics.
                      </p>
                      <p className="font-semibold">
                        The Department of Education (hereto onwards...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Administration Section - All Content Centered */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        {/* Full-width background rectangle */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ap/Rectangle.svg"
            alt="Background rectangle"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
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

          {/* Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 max-w-5xl mx-auto justify-items-center">
            {adminTeam.map((member, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-10 shadow-[15px_15px_30px_rgba(0,0,0,0.3)] hover:shadow-[20px_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-2 w-full max-w-sm"
              >
                {/* Profile Image Placeholder - Centered */}
                <div className="w-36 h-36 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl text-white font-bold">
                  {member.name
                    .split(" ")
                    .map((name) => name[0])
                    .join("")}
                </div>

                <div className="text-white text-sm font-medium font-[Poppins] mb-3 opacity-80 text-center">
                  {member.role}
                </div>
                <h3 className="text-white text-xl lg:text-2xl font-bold font-[Poppins] text-center">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section - Following Home Page Pattern */}
      <footer className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Footer Logo */}
            <div className="w-52 h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-white text-2xl font-bold">FBLC</span>
            </div>
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
