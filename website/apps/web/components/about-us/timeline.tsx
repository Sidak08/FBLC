import * as React from "react";

type TimelineEntry = {
  date: string;
  title: string;
  content: string;
};

const timelineData: TimelineEntry[] = [
  {
    date: "September 2024",
    title: "Founding & Registration",
    content:
      "Former President Richakm and VP Pravishten officially register Brampton FBLC as a chapter of FBL Canada, establishing the foundation for what would become a thriving student organization.",
  },
  {
    date: "September 2024",
    title: "Co-Founder Joins",
    content:
      "VP Hariham joins as co-founder and Vice-President, forming a strong leadership team of founders and strengthening the leadership foundation of the organization.",
  },
  {
    date: "October 18, 2024",
    title: "General Member Launch",
    content:
      "General Member Applications officially open, marking the club's first recruitment drive and beginning the expansion of our community of ambitious students.",
  },
  {
    date: "December 1, 2024",
    title: "Executive Team Applications",
    content:
      "Applications open for the first-ever Executive Team, setting up long-term leadership growth and establishing a sustainable organizational structure for future success.",
  },
  {
    date: "Spring 2025",
    title: "Major Expansion & National Competition",
    content:
      "VP Hariham acquires TA and JEC Brampton, making Brampton FBLC the only FBL Canada chapter with two subsidiaries, significantly expanding our reach and capabilities. Brampton FBLC, JEC, and TA co-host Founder's Den, drawing 130+ students nationwide and establishing our organization as a major force in Canadian business education.",
  },
];

export function Timeline() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-white mb-8 sm:mb-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
          Our Journey
        </h1>
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-2 top-4 bottom-4 w-0.5 bg-white/40 shadow-lg"></div>
          
          {timelineData.map((entry, index) => (
            <div key={index} className="relative mb-8 sm:mb-10 pl-6 sm:pl-8">
              {/* Timeline dot */}
              <div className="bg-white absolute left-0 top-3 sm:top-3.5 w-3 sm:w-4 h-3 sm:h-4 rounded-full border-2 sm:border-4 border-white/30 shadow-lg"></div>
              
              <div className="bg-white/95 rounded-xl p-4 sm:p-6 shadow-xl border border-gray-200/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h4 className="text-lg sm:text-xl font-bold text-fblc-navy mb-2 sm:mb-0">
                    {entry.title}
                  </h4>
                  <span className="text-xs sm:text-sm font-semibold text-fblc-navy/60 bg-fblc-navy/10 px-2 sm:px-3 py-1 rounded-full">
                    {entry.date}
                  </span>
                </div>
                
                <div className="text-fblc-navy/80 leading-relaxed text-sm sm:text-base">
                  {entry.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}