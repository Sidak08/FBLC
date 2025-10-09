import Image from "next/image"
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"
import { ArrowRight, Users, Target, Award, BookOpen } from "lucide-react"

export default function ElevateLeaderPage() {
  return (
    <div className="min-h-screen">
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        <Image
          src="/elevate-leader/ElevateLeaderBannerImage.png"
          alt="Elevate Leader Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Comprehensive Member Development Strategy Banner */}
      <div className="bg-fblc-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <p className="text-fblc-sky-blue text-base sm:text-lg italic font-normal">
                Academics and Fun
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-fblc-sky-blue text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                REKINDLES
              </h3>
              <p className="text-fblc-sky-blue text-base sm:text-lg italic font-normal">
                Competitive Spirit
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-fblc-sky-blue text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                FUELS
              </h3>
              <p className="text-fblc-sky-blue text-base sm:text-lg italic font-normal">
                Creativity
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-fblc-sky-blue text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                ENCOURAGES
              </h3>
              <p className="text-fblc-sky-blue text-base sm:text-lg italic font-normal">
                Thoughtful Exploration
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Program Overview Section */}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Founders Feed */}
                <div className="bg-white/95 rounded-xl p-6 shadow-xl">
                  <div className="flex items-center mb-3">
                    <span className="text-green-600 text-sm font-semibold mr-3">Weekly News Feed</span>
                  </div>
                  <h3 className="text-fblc-navy text-2xl font-bold mb-3">Founders Feed</h3>
                  <p className="text-fblc-navy/70 text-sm leading-relaxed">
                    The Founder's Feed Series provides the community and members with relevant daily business news from across the globe. This series aids members in remaining informed in an era where access to news is often obstructed by unnecessary jargon and paywalls.
                  </p>
                </div>

                {/* Insight to Impact */}
                <div className="bg-white/95 rounded-xl p-6 shadow-xl">
                  <div className="flex items-center mb-3">
                    <span className="text-green-600 text-sm font-semibold mr-3">Workshops</span>
                  </div>
                  <h3 className="text-fblc-navy text-2xl font-bold mb-3">Insight to Impact</h3>
                  <p className="text-fblc-navy/70 text-sm leading-relaxed">
                    The Insight to Impact Series serves as the program's workshop auxiliary, providing members and the community with access to free leadership and career development workshops led by industry professionals.
                  </p>
                </div>

                {/* Leaders of Tomorrow */}
                <div className="bg-white/95 rounded-xl p-6 shadow-xl">
                  <div className="flex items-center mb-3">
                    <span className="text-green-600 text-sm font-semibold mr-3">Development Opportunities & Networking</span>
                  </div>
                  <h3 className="text-fblc-navy text-2xl font-bold mb-3">Leaders of Tomorrow</h3>
                  <p className="text-fblc-navy/70 text-sm leading-relaxed">
                    The Leaders of Tomorrow Series offers members career and leadership development opportunities both across Canada and globally. These opportunities are carefully identified by a team of researchers, discovering safe and fulfilling opportunities.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Business & Beyond */}
                <div className="bg-white/95 rounded-xl p-6 shadow-xl">
                  <div className="flex items-center mb-3">
                    <span className="text-green-600 text-sm font-semibold mr-3">Weekly Blog</span>
                  </div>
                  <h3 className="text-fblc-navy text-2xl font-bold mb-3">Business & Beyond</h3>
                  <p className="text-fblc-navy/70 text-sm leading-relaxed">
                    The Business & Beyond Series provides members with access to engaging and informative content on the latest business topics relevant to young professionals.
                  </p>
                </div>

                {/* Aspire Link */}
                <div className="bg-white/95 rounded-xl p-6 shadow-xl">
                  <div className="flex items-center mb-3">
                    <span className="text-green-600 text-sm font-semibold mr-3">Mentorship</span>
                  </div>
                  <h3 className="text-fblc-navy text-2xl font-bold mb-3">Aspire Link</h3>
                  <p className="text-fblc-navy/70 text-sm leading-relaxed">
                    The Aspire Link Series serves as the mentorship auxiliary of the program, offering members guidance from post-secondary students who have previously navigated similar academic pathways. This series is unique in that it offers a limited number of available spots.
                  </p>
                </div>

                {/* Leaders Voice */}
                <div className="bg-white/95 rounded-xl p-6 shadow-xl">
                  <div className="flex items-center mb-3">
                    <span className="text-green-600 text-sm font-semibold mr-3">Biweekly Podcast</span>
                  </div>
                  <h3 className="text-fblc-navy text-2xl font-bold mb-3">Leaders Voice</h3>
                  <p className="text-fblc-navy/70 text-sm leading-relaxed">
                    The Leaders Voice series functions as the podcast auxiliary of the program, providing members and the community with insightful and engaging content from industry and student leaders across Canada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program Details Section */}
        <div className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-6">
                  What You'll Learn
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-white/80">Leadership fundamentals and core competencies</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-white/80">Communication and presentation skills</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-white/80">Emotional intelligence and self-awareness</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-white/80">Conflict resolution and negotiation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-white/80">Innovation and change management</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 rounded-xl p-8 shadow-xl">
                <h4 className="text-fblc-navy text-xl font-bold mb-4">Program Structure</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-fblc-navy font-medium">Duration:</span>
                    <span className="text-fblc-navy/70">12 weeks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-fblc-navy font-medium">Format:</span>
                    <span className="text-fblc-navy/70">Hybrid (Online + In-person)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-fblc-navy font-medium">Sessions:</span>
                    <span className="text-fblc-navy/70">Weekly workshops</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-fblc-navy font-medium">Mentorship:</span>
                    <span className="text-fblc-navy/70">1-on-1 coaching</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Leadership?
            </h3>
            <p className="text-white/80 text-lg sm:text-xl mb-8 leading-relaxed">
              Join the next cohort of future leaders and start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
