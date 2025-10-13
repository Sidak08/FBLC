import Image from 'next/image'
import ProgramCard from './program-card'

const programData = [
  {
    category: 'Weekly News Feed',
    title: 'Founders Feed',
    description: 'The Founder\'s Feed Series provides the community and members with relevant daily business news from across the globe. This series aids members in remaining informed in an era where access to news is often obstructed by unnecessary jargon and paywalls.',
    categoryColor: 'text-green-400'
  },
  {
    category: 'Workshops',
    title: 'Insight to Impact',
    description: 'The Insight to Impact Series serves as the program\'s workshop auxiliary, providing members and the community with access to free leadership and career development workshops led by industry professionals.',
    categoryColor: 'text-blue-400'
  },
  {
    category: 'Development Opportunities & Networking',
    title: 'Leaders of Tomorrow',
    description: 'The Leaders of Tomorrow Series offers members career and leadership development opportunities both across Canada and globally. These opportunities are carefully identified by a team of researchers, discovering safe and fulfilling opportunities.',
    categoryColor: 'text-blue-400'
  },
  {
    category: 'Weekly Blog',
    title: 'Business & Beyond',
    description: 'The Business & Beyond Series provides members with access to engaging and informative content on the latest business topics relevant to young professionals.',
    categoryColor: 'text-green-400'
  },
  {
    category: 'Mentorship',
    title: 'Aspire Link',
    description: 'The Aspire Link Series serves as the mentorship auxiliary of the program, offering members guidance from post-secondary students who have previously navigated similar academic pathways. This series is unique in that it offers a limited number of available spots.',
    categoryColor: 'text-yellow-400',
    imageSrc: '/elevate-leader/AspireLinkImage.png',
    imageAlt: 'Aspire Link'
  },
  {
    category: 'Biweekly Podcast',
    title: 'Leaders Voice',
    description: 'The Leaders Voice series functions as the podcast auxiliary of the program, providing members and the community with insightful and engaging content from industry and student leaders across Canada.',
    categoryColor: 'text-green-400'
  }
]

export default function ProgramSection() {
  return (
    <div 
      style={{
        background: 'linear-gradient(353.51deg, #04070D 0%, #1A2537 60%, #1F2F55 100%)'
      }}
    >
      <div className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Leadership & Career Development Program
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-3xl leading-relaxed">
              Elevate Leaders is the flagship membership initiative at Brampton FBLC, JEC, and TA. It's comprised of many resources to build your career and leadership skills.
            </p>
          </div>

          {/* Program Components Grid */}
          <div className="relative mt-32">
            {/* Background SVG */}
            <div className="absolute inset-0 flex items-center justify-center opacity-100">
              <Image
                src="/elevate-leader/RectangleCenter.svg"
                alt="Background decoration"
                width={1156}
                height={1050}
                className="w-full h-auto max-w-4xl"
              />
            </div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 z-10 max-w-5xl mx-auto">
              {/* Left Column */}
              <div className="space-y-8">
                {programData.slice(0, 3).map((program, index) => (
                  <ProgramCard
                    key={index}
                    category={program.category}
                    title={program.title}
                    description={program.description}
                    categoryColor={program.categoryColor}
                    imageSrc={program.imageSrc}
                    imageAlt={program.imageAlt}
                  />
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-8 mt-16">
                {programData.slice(3, 6).map((program, index) => (
                  <ProgramCard
                    key={index + 3}
                    category={program.category}
                    title={program.title}
                    description={program.description}
                    categoryColor={program.categoryColor}
                    imageSrc={program.imageSrc}
                    imageAlt={program.imageAlt}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
