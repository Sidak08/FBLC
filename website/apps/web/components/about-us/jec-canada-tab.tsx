import { Button } from "@workspace/ui/components/button"
import { Users } from "lucide-react"
import { InfoCard } from "./info-card"

export function JecCanadaTab() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-start bg-[#141D2B] p-9 border border-solid border-[#60A5FA] rounded-lg">
      {/* Left side - Organization info */}
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white">JEC Canada</h2>
        </div>
        
        <p className="text-white/90 text-lg leading-relaxed">
          A federally registered non-profit organization dedicated to promoting learning and interest in the world of business through competitions and educational initiatives.
        </p>
        
        <div className="flex space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
            Case Competitions
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-3">
            Junior Economist
          </Button>
        </div>
      </div>

      {/* Right side - Activities and Mission */}
      <div className="space-y-6">
        <InfoCard 
          title="Our Activities"
          description="We host events, case competitions, and economic forums alongside our own writing publication: Junior Economist, providing comprehensive business education."
        />
        
        <InfoCard 
          title="Our Mission"
          description="We focus on exposing ambitious high school students to free events, connections and opportunities regardless of socio-economic background to level the playing field for all students across the country."
        />
      </div>
    </div>
  )
}