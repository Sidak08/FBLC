"use client";

import Image from "next/image";
import Link from "next/link";
// import { Navigation } from "../../components/navigation";
import { TeamNav } from "../../components/team-nav";
import { useState, useEffect } from "react";

interface TeamMember {
  name: string;
  title: string;
  secondPosition?: string;
  description?: string;
  adjectives?: string[];
  initial?: string;
  image?: string;
}

interface TeamData {
  [key: string]: TeamMember[];
}

export default function MeetTheTeam() {
  const [teamData, setTeamData] = useState<TeamData>({});
  const [currentDepartment, setCurrentDepartment] = useState("admins");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/team/team-data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch team data");
        }
        const data = await response.json();
        setTeamData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        console.error("Error loading team data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  const handleTabChange = (departmentId: string) => {
    setCurrentDepartment(departmentId);
  };

  const getDepartmentTitle = (dept: string) => {
    const titles: { [key: string]: string } = {
      admins: "Admin Team",
      presidential: "Office of the First Co-President",
      education: "Department of Education",
      special: "Department of Special Functions",
      operations: "Department of Operations",
      marketing: "Department of Marketing",
      recruitment: "Department of Recruitment & Membership Services",
    };
    return titles[dept] || "Team";
  };

  const getDepartmentDescription = (dept: string) => {
    const descriptions: { [key: string]: string } = {
      admins:
        "Dedicated leaders committed to empowering the next generation of business professionals and fostering innovation in our community.",
      presidential:
        "Supporting the First Co-President with oversight, compliance, and general member affairs to ensure effective governance and accountability.",
      education:
        "Developing comprehensive curriculum and delivering exceptional educational experiences that prepare students for business success.",
      special:
        "Driving innovation through special events, partnerships, and cutting-edge initiatives that create lasting impact.",
      operations:
        "Ensuring smooth day-to-day operations and coordinating seamless execution of all organizational initiatives.",
      marketing:
        "Crafting compelling brand stories and building engaging digital communities that connect with our audience.",
      recruitment:
        "Building inclusive communities through strategic outreach and meaningful service learning opportunities.",
    };
    return descriptions[dept] || "Our dedicated team members.";
  };

  const currentTeamMembers = teamData[currentDepartment] || [];
  const bannerSrc = `/team/Banners/${currentDepartment}-mobile.png`;
  const bannerAlt = `${getDepartmentTitle(currentDepartment)} banner`;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-black">
        {/* Gradient Spacer Above Navbar */}
        <div className="w-full hidden sm:block" style={{ height: "2.5vw" }}></div>

        {/* Navigation */}
        {/*<div className="flex justify-center w-full">
          <Navigation />
        </div>*/}

        {/* Hero Section with Description */}
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Meet Our Team
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Dedicated leaders committed to empowering the next generation of
            business professionals and fostering innovation in our community.
          </p>
        </div>

        <TeamNav activeTab={currentDepartment} onTabChange={handleTabChange} />

        {/* Loading State */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 sm:h-16 w-12 sm:w-16 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-white text-base sm:text-lg">
              Loading team data...
            </p>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-black">
        {/* Gradient Spacer Above Navbar */}
        <div className="w-full hidden sm:block" style={{ height: "2.5vw" }}></div>
        {/* Navigation */}
        {/*<div className="flex justify-center w-full">
          <Navigation />
        </div>*/}

        {/* Hero Section with Description */}
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Meet Our Team
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Dedicated leaders committed to empowering the next generation of
            business professionals and fostering innovation in our community.
          </p>
        </div>

        <TeamNav activeTab={currentDepartment} onTabChange={handleTabChange} />

        {/* Error State */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-center">
            <div className="text-red-400 text-6xl mb-4">⚠️</div>
            <h2 className="text-white text-xl sm:text-2xl font-bold mb-2">
              Unable to Load Team Data
            </h2>
            <p className="text-white/80 mb-4 text-sm sm:text-base">
              Error: {error}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 min-h-[44px] touch-manipulation"
            >
              Retry
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-black">
      {/* Gradient Spacer Above Navbar */}
      <div className="w-full hidden sm:block" style={{ height: "2.5vw" }}></div>

      {/* Mobile-only department banner (shows only on small screens) */}
      <div className="relative w-full h-54 sm:hidden">
        <Image
          src={bannerSrc}
          alt={bannerAlt}
          fill
          className="object-cover"
          priority
        />
        {/* Optional overlay for centered text (keeps same structure if you want content over the banner) */}
        <div className="relative z-10 flex items-center justify-center h-full">
          {/* put centered text/buttons here if desired */}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center w-full">{/*<Navigation />*/}</div>

      {/* Hero Section with Description */}
      <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
          Meet Our {getDepartmentTitle(currentDepartment)}
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
          {getDepartmentDescription(currentDepartment)}
        </p>
      </div>

      <TeamNav activeTab={currentDepartment} onTabChange={handleTabChange} />

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl mx-auto">
        {/* Team Grid */}
        {currentTeamMembers.length > 0 ? (
          <div className="w-full mb-12 sm:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 justify-items-center">
              {currentTeamMembers.map((member, index) => (
                <div
                  key={`${currentDepartment}-${index}`}
                  className="bg-transparent border border-[#60A5FA]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-[#60A5FA]/50 transition-all duration-300 flex flex-col justify-between w-full max-w-md lg:max-w-lg xl:max-w-xl min-h-[450px] sm:min-h-[500px]"
                >
                  <div className="flex-grow">
                    {/* Profile Circle/Image */}
                    <div className="flex justify-center mb-6 sm:mb-8">
                      <div className="w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 rounded-full overflow-hidden bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] flex items-center justify-center">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold">
                            {member.initial || member.name.charAt(0)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6">
                      {member.name}
                    </h3>

                    {/* Position(s) */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <span className="bg-[#1E40AF] text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm lg:text-base font-medium">
                        {member.title}
                      </span>
                      {member.secondPosition && (
                        <span className="bg-[#1E40AF] text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm lg:text-base font-medium">
                          {member.secondPosition}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    {member.description && (
                      <p
                        className="text-white text-center mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 5,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {member.description}
                      </p>
                    )}

                    {/* Tags/Adjectives */}
                    {member.adjectives && member.adjectives.length > 0 && (
                      <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
                        {member.adjectives.map((adjective, adjectiveIndex) => (
                          <span
                            key={adjectiveIndex}
                            className="text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 border border-white/20 rounded-full"
                          >
                            {adjective}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Learn More Button */}
                  <div className="text-center mt-auto">
                    <a
                      className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white px-6 py-3 sm:py-4 rounded-lg font-semibold hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 text-sm sm:text-base min-h-[44px] touch-manipulation flex items-center justify-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-white/60 text-4xl sm:text-6xl mb-4">👥</div>
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
              No Team Members Found
            </h3>
            <p className="text-white/80 text-sm sm:text-base">
              We&apos;re currently building this team. Check back soon!
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="w-full bg-transparent border border-[#60A5FA]/30 rounded-2xl p-6 sm:p-8 lg:p-12 text-center backdrop-blur-sm">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover leadership opportunities and become part of our growing
            community of future business leaders.
          </p>
          <Link
            href="/join-us"
            className="inline-block bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 min-h-[44px] touch-manipulation"
          >
            Start Your Journey
          </Link>
        </div>
      </main>
    </div>
  );
}