"use client";

interface StatData {
  icon: string;
  title: string;
  subtitle: string;
}

interface AdminTeamMember {
  name: string;
  role: string;
  image: string;
  hasTag: boolean;
}

export default function AcademicProgramming() {
  const statsData: StatData[] = [
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

  const subjects: string[] = [
    "Accounting",
    "Public Speaking",
    "Business Law",
    "Economics",
    "Personal Finance",
  ];

  const adminTeam: AdminTeamMember[] = [ // Images added
    {
      name: "Dhruv Aggarwal",
      role: "Deputy Director of Academic Programming",
      image: "/team/Website Pictures/Department of Education/Dhruv.png",
      hasTag: false,
    },
    {
      name: "Swathi Vasupilli",
      role: "Director of the Academic Programming",
      image: "/team/Website Pictures/Department of Education/Swathi.png",
      hasTag: false,
    },
    {
      name: "Piraneerth Pathmajeyalan",
      role: "Supervising Administrator",
      image: "/team/Website Pictures/Admin Team/Piraneerth.png",
      hasTag: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-black"> 
      {/* Hero Section - Images */}
      <section className="w-full flex flex-col relative">
        {/* Top Image - heading.svg */}
        <div className="w-full bg-slate-800 min-h-[200px] flex items-center justify-center">
          <img
            src="/ap/FBLC(1)/heading.svg"
            alt="Academic Programming Heading"
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              if (e.currentTarget.parentElement) {
                e.currentTarget.parentElement.innerHTML =
                  '<div class="text-white text-4xl font-bold text-center py-12">Academic Programming</div>';
              }
            }}
          />
        </div>

        {/* Bottom Image - banner */}
        <div className="bg-fblc-navy py-16 sm:py-7 ">
        <div className="text-center mb-12">
          <h2 className="text-fblc-sky-blue text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide">
            Brampton FBLC, JEC & TA's Comprehensive Member Development Strategy
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="text-center">
            <h3 className="text-fblc-sky-blue text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              INTEGRATES
            </h3>
            <p className="text-fblc-sky-blue text-lg sm:text-xl italic font-normal">
              Academics and Fun
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-fblc-sky-blue text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              REKINDLES
            </h3>
            <p className="text-fblc-sky-blue text-lg sm:text-xl italic font-normal">
              Competitive Spirit
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-fblc-sky-blue text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              FUELS
            </h3>
            <p className="text-fblc-sky-blue text-lg sm:text-xl italic font-normal">
              Creativity
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-fblc-sky-blue text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              ENCOURAGES
            </h3>
            <p className="text-fblc-sky-blue text-lg sm:text-xl italic font-normal">
              Thoughtful Exploration
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* Stats Section - Cards Centered */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-6 sm:p-8 text-center shadow-[10px_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[15px_15px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-2 w-full max-w-sm min-h-[250px] sm:min-h-[300px] flex flex-col items-center justify-center"
              >
                <div className="mb-3 flex justify-center">
                  <img
                    src={stat.icon}
                    alt={`${stat.title} icon`}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-center">
                  {stat.title}
                </div>
                <div className="text-white/80 text-base sm:text-lg lg:text-xl font-medium text-center">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section - Container Centered, Content Left-Aligned */}
      <section
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{ marginTop: "-117px" }}
      >
        
        <div className="mx-auto mt-8 sm:mt-16 lg:mt-[130px] min-h-[350px] sm:min-h-[465px] flex flex-col justify-center items-center">
          {/* Heading moved inside content box for vertical centering */}

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl py-6 sm:py-8 lg:py-12 px-6 sm:px-8 lg:px-12 xl:px-20 shadow-[15px_15px_30px_rgba(0,0,0,0.3)] flex flex-col justify-center gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl h-auto min-h-[350px] sm:min-h-[470px] mx-auto">
            <div className="w-full lg:pl-[150px]">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 text-center lg:text-left">
                What to expect?
              </h2>
              <p className="text-white/90 text-base sm:text-lg lg:text-xl font-normal mb-6 sm:mb-8 leading-relaxed text-center lg:text-left">
                Academics at Brampton FBLC, JEC, and TA believes in a
                case-oriented and hands-on approach to learning business,
                facilitating a fun and productive learning environment. Specific
                examples from the real world help to bolster understanding of
                concepts and see them in action.
              </p>

              {/* Tabs (static labels with a thin line before each) */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 lg:gap-12 mb-6 sm:mb-8 items-center justify-center lg:justify-start">
                {["Weekly Training", "Workshops", "Assessments"].map(
                  (label) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="inline-block w-[2px] h-[12px] bg-blue-500"></span>
                      <span className="text-white text-base sm:text-lg font-medium">
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

      {/* Education Hub Section - Enhanced Design */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-7xl relative">
          {/* Mobile/Tablet: Enhanced Stacked Layout */}
          <div className="lg:hidden">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-blue-500/30 rounded-3xl p-6 sm:p-8 mb-8 shadow-2xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
                  Education Hub
                </h2>
                <p className="text-white/90 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
                  The Education Hub is a comprehensive document listing thousands of resources under many topics.
                </p>
              </div>

              {/* Enhanced Mobile Education Hub Card */}
              <div className="my-8"><div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.4)] border border-slate-200 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-red-600 font-bold text-xl sm:text-2xl tracking-wide">
                      The Education Hub
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                      <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
                        <span className="font-semibold text-blue-700">This Education Hub</span> was created for the purpose of compiling over <span className="font-bold text-blue-700">1000+ resources</span> that general members of Brampton FBLC, JEC, & TA can use. All of these resources have been officially approved by the Department of Education.
                      </p>
                    </div>
                    
                    <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-slate-400">
                      <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
                        The document was created and initially developed by <span className="font-semibold text-slate-700">Co-President Piraneerth Pathmajeyalan</span>, who serves as the original author and lead curator. The Department of Education contributes additional content and ongoing updates to support the document's continued development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Enhanced Side-by-side Layout */}
          <div className="hidden lg:block">
            <div className="relative w-full min-h-[400px] rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-blue-500/30 overflow-hidden shadow-2xl">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full translate-y-32 -translate-x-32"></div>
              
              <div className="relative z-10 flex h-full min-h-[400px]">
                {/* Left content block */}
                <div className="flex flex-col justify-center w-[55%] min-w-[520px] px-12 py-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h2 className="text-white text-5xl xl:text-6xl font-black leading-tight">
                      Education Hub
                    </h2>
                  </div>
                  <p className="text-white/90 text-xl xl:text-2xl font-normal leading-relaxed max-w-[640px]">
                    The Education Hub is a comprehensive document listing thousands of resources under many topics.
                  </p>
                </div>

                {/* Right enhanced card container */}
                <div className="relative flex-1 flex items-center justify-end pr-8">
                  <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-[0_25px_80px_-12px_rgba(0,0,0,0.4)] border border-slate-200 w-[520px] max-w-[520px] p-8 relative overflow-hidden">
                    {/* Card decoration */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <h3 className="text-red-600 font-bold text-2xl tracking-wide">
                          The Education Hub
                        </h3>
                      </div>
                      
                      <div className="space-y-5">
                        <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                          <p className="text-slate-800 text-sm leading-relaxed">
                            <span className="font-semibold text-blue-700">This Education Hub</span> was created for the purpose of compiling over <span className="font-bold text-blue-700">1000+ resources</span> that general members of Brampton FBLC, JEC, & TA can use. All of these resources have been officially approved by the Department of Education.
                          </p>
                        </div>
                        
                        <div className="bg-slate-50 rounded-xl p-5 border-l-4 border-slate-400">
                          <p className="text-slate-800 text-sm leading-relaxed">
                            The document was created and initially developed by <span className="font-semibold text-slate-700">Co-President Piraneerth Pathmajeyalan</span>, who serves as the original author and lead curator. The Department of Education contributes additional content and ongoing updates to support the document's continued development.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>      
          {/* Enhanced Tags row for all screen sizes */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="group h-[60px] sm:h-[75px] flex items-center justify-center rounded-xl bg-gradient-to-r from-slate-800/90 to-slate-700/90 border border-slate-600/50 text-white text-sm font-medium backdrop-blur-sm hover:from-blue-600/90 hover:to-blue-700/90 hover:border-blue-500/50 transition-all duration-300 px-4 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="group-hover:text-blue-100 transition-colors duration-300">
                  {subject}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Administration Section - All Content Centered */}
      <section
        className="relative py-12 sm:py-16 lg py:20 px-4 sm:px-6 lg:px-8"      
        style={{marginTop: "50px"}}   
      >

        {/* Full-width background rectangle */}
        <div className="absolute inset-0 z-0 bg-slate-800">
          <img
            src="/ap/Rectangle.svg"
            alt="Background rectangle"
            className="object-cover w-full h-full absolute inset-0"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div className="relative z-10 mx-auto text-center w-full flex flex-col items-center max-w-7xl">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-center">
            Administration
          </h2>
          <p className="text-white/80 text-base sm:text-lg lg:text-xl font-normal mb-8 sm:mb-12 lg:mb-16 text-center max-w-3xl mx-auto leading-relaxed">
            If you have any questions about academic programming, please
            redirect it to these people.
          </p>

          {/* Cards Layout - Responsive Grid */}
          <div className="w-full flex flex-col items-center">
            {/* All cards in a responsive grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8 justify-items-center">
              {adminTeam.map((member, index) => (
                <div key={index} className="w-full max-w-md lg:max-w-lg">
                  <div className="bg-slate-900/80 backdrop-blur-sm border border-blue-500/40 rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-[10px_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[15px_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300 min-h-[200px] sm:min-h-[250px]">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px] rounded-full overflow-hidden border-4 border-blue-500/30 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] flex items-center justify-center">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            if (e.currentTarget.parentElement) {
                              e.currentTarget.parentElement.innerHTML = `<span class="text-white text-2xl font-bold">${member.name.charAt(0)}</span>`;
                            }
                          }}
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 text-center sm:text-left">
                      <div className="text-white/80 text-xs sm:text-sm font-medium mb-2">
                        {member.role}
                      </div>
                      <h3 className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight">
                        {member.name.split(" ").map((word, i) => (
                          <div key={i}>{word}</div>
                        ))}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer
        className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center w-full"
        style={{ marginTop: "50px" }}
      >
        <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12 min-h-[12rem] sm:min-h-[16rem]">
          {/* Footer Image */}
          <img
            src="FBLC Logo.svg"
            alt="Footer Logo"
            className="w-40 sm:w-48 lg:w-52 h-24 sm:h-28 lg:h-32 object-cover rounded-xl flex-shrink-0"
          />
          {/* Footer Text */}
          <div className="flex-1 flex items-center">
            <p className="text-white text-sm sm:text-base lg:text-lg font-normal text-center sm:text-left leading-relaxed">
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