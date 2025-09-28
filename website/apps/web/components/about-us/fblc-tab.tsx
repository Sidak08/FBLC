import { Button } from "@workspace/ui/components/button"
import { FileText } from "lucide-react"
import { InfoCard } from "./info-card"

export function FblcTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
      {/* Left side - Organization info */}
      <div className="space-y-6 sm:space-y-8">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">FBLC</h2>
        </div>
        
        <p className="text-white/90 text-base sm:text-lg leading-relaxed">
          Future Business Leaders Coalition is the umbrella organization that unites three premier student organizations dedicated to promoting learning and interest in the world of business and leadership development.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
            Learn More
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
            Join FBLC
          </Button>
        </div>
      </div>

      {/* Right side - Activities and Mission */}
      <div className="space-y-4 sm:space-y-6">
        <InfoCard 
          title="Our Activities"
          description="We coordinate events, leadership workshops, and networking opportunities across our three organizations, providing comprehensive business education and career development."
        />
        
        <InfoCard 
          title="Our Mission"
          description="We focus on creating a unified platform for ambitious students to connect, learn, and grow together while developing essential business and leadership skills for their future careers."
        />
      </div>
    </div>
  )
}