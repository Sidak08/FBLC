"use client";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import TeamNav from "../../components/TeamNav";
import { useState, useEffect } from "react";

export default function MeetTheTeam() {
  const [teamData, setTeamData] = useState({});
  const [currentDepartment, setCurrentDepartment] = useState("admins");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setError(err.message);
        console.error("Error loading team data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  const handleTabChange = (departmentId) => {
    setCurrentDepartment(departmentId);
  };

  const getDepartmentTitle = (dept) => {
    const titles = {
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

  const getDepartmentDescription = (dept) => {
    const descriptions = {
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-black">
        {/* Gradient Spacer Above Navbar */}
        <div className="w-full" style={{ height: "2.5vw" }}></div>
        {/* Navigation */}
        <div className="flex justify-center w-full">
          <Navigation />
        </div>

        {/* Hero Section with Description */}
        <div className="text-center mb-16 px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Meet Our Team
          </h1>
          <p className="text-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Dedicated leaders committed to empowering the next generation of
            business professionals and fostering innovation in our community.
          </p>
        </div>

        <TeamNav activeTab={currentDepartment} onTabChange={handleTabChange} />

        {/* Loading State */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading team data...</p>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-black">
        {/* Gradient Spacer Above Navbar */}
        <div className="w-full" style={{ height: "2.5vw" }}></div>
        {/* Navigation */}
        <div className="flex justify-center w-full">
          <Navigation />
        </div>

        {/* Hero Section with Description */}
        <div className="text-center mb-16 px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Meet Our Team
          </h1>
          <p className="text-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Dedicated leaders committed to empowering the next generation of
            business professionals and fostering innovation in our community.
          </p>
        </div>

        <TeamNav activeTab={currentDepartment} onTabChange={handleTabChange} />

        {/* Error State */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="text-red-400 text-6xl mb-4">⚠️</div>
            <h2 className="text-white text-2xl font-bold mb-2">
              Unable to Load Team Data
            </h2>
            <p className="text-white/80 mb-4">Error: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300"
            >
              Retry
            </button>
          </div>
        </main>
      </div>
    );
  }

  const currentTeamMembers = teamData[currentDepartment] || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-black">
      {/* Gradient Spacer Above Navbar */}
      <div className="w-full" style={{ height: "2.5vw" }}></div>
      {/* Navigation */}
      <div className="flex justify-center w-full">
        <Navigation />
      </div>

      {/* Hero Section with Description */}
      <div className="text-center mb-16 px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
          Meet Our {getDepartmentTitle(currentDepartment)}
        </h1>
        <p className="text-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
          {getDepartmentDescription(currentDepartment)}
        </p>
      </div>

      <TeamNav activeTab={currentDepartment} onTabChange={handleTabChange} />

      {/* Main Content */}
      <main
        className="w-full px-6 py-12"
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        {/* Team Grid */}
        {currentTeamMembers.length > 0 ? (
          <div className="w-full mb-16">
            <div className="flex flex-wrap justify-center gap-12 w-full">
              {currentTeamMembers.map((member, index) => (
                <div
                  key={`${currentDepartment}-${index}`}
                  className="bg-transparent border border-[#60A5FA]/30 rounded-2xl p-8 backdrop-blur-sm hover:border-[#60A5FA]/50 transition-all duration-300 flex flex-col justify-between flex-shrink-0"
                  style={{ width: "650px", minHeight: "500px" }}
                >
                  <div className="flex-grow">
                    {/* Profile Circle/Image */}
                    <div className="flex justify-center mb-8">
                      <div className="w-40 h-40 rounded-full overflow-hidden bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] flex items-center justify-center">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-white text-6xl font-bold">
                            {member.initial || member.name.charAt(0)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-white text-3xl font-bold text-center mb-6">
                      {member.name}
                    </h3>

                    {/* Position(s) */}
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                      <span className="bg-[#1E40AF] text-white px-6 py-3 rounded-lg text-base font-medium">
                        {member.title}
                      </span>
                      {member.secondPosition && (
                        <span className="bg-[#1E40AF] text-white px-6 py-3 rounded-lg text-base font-medium">
                          {member.secondPosition}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    {member.description && (
                      <p
                        className="text-white text-center mb-6 text-base leading-relaxed overflow-hidden"
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
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {member.adjectives.map((adjective, adjectiveIndex) => (
                          <span
                            key={adjectiveIndex}
                            className="text-white text-sm px-4 py-2 border border-white/20 rounded-full"
                          >
                            {adjective}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Learn More Button */}
                  <div className="text-center mt-auto">
                    <button className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center mb-16">
            <div className="text-white/60 text-6xl mb-4">👥</div>
            <h3 className="text-white text-2xl font-bold mb-2">
              No Team Members Found
            </h3>
            <p className="text-white/80">
              We&apos;re currently building this team. Check back soon!
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="w-full bg-transparent border border-[#60A5FA]/30 rounded-2xl p-12 text-center backdrop-blur-sm">
          <h2 className="text-white text-3xl font-bold mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
            Discover leadership opportunities and become part of our growing
            community of future business leaders.
          </p>
          <Link
            href="/join"
            className="inline-block bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300"
          >
            Start Your Journey
          </Link>
        </div>
      </main>
    </div>
  );
}
