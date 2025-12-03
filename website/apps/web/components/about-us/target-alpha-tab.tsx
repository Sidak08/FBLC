import { Button } from "@workspace/ui/components/button"
import { Target } from "lucide-react"
import { InfoCard } from "./info-card"

export function TargetAlphaTab() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-start bg-[#141D2B] p-9 border border-solid border-[#60A5FA] rounded-lg">
      {/* Left side - Organization info */}
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white">Target Alpha</h2>
        </div>
        
        <p className="text-white/90 text-lg leading-relaxed">
          Canada's leading student financial literacy organization, engaging youth across the nation since 2013.
        </p>
        
        <div className="flex space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
            Investment Hub
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-3">
            Market Analysis
          </Button>
        </div>
      </div>

      {/* Right side - Activities and Mission */}
      <div className="space-y-6">
        <InfoCard 
          title="Our Focus"
          description="We aim to engage youth in financial literacy by hosting conferences, organizing real-time competitions, and providing educational resources to Target Alpha chapters nationwide."
        />
        
        <InfoCard 
          title="National Impact"
          description="Since our inception in 2013, Target Alpha has grown to become Canada's leading student financial literacy organization, engaging youth all across the nation!"
        />
      </div>
    </div>
  )
}