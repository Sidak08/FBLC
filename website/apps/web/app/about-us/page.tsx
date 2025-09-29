import Image from "next/image"
import { Badge } from "@workspace/ui/components/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { FblcTab, TargetAlphaTab, JecCanadaTab, Timeline, Stats } from "@/components/about-us"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Banner */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        <Image
          src="/With_BRAMPTON_FBLC_4.png"
          alt="About Us Banner"
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay with blur and color */}
        <div className="absolute inset-0 bg-fblc-navy/50 backdrop-blur-sm"></div>
        
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center sm:items-end sm:justify-start">
          <div className="px-4 sm:px-8 lg:ml-[25%] lg:mr-auto pb-0 sm:pb-16 lg:pb-24 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl text-center sm:text-center lg:text-left">
            <Badge className="mb-3 sm:mb-4 bg-transparent text-white border-white border-2 backdrop-blur-sm text-xs sm:text-sm px-4 py-2 inline-block">
              Our Mission
            </Badge>
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold leading-tight sm:leading-relaxed drop-shadow-lg">
              Discover the three premier student organizations shaping the future of business education and leadership development across Canada.
            </p>
          </div>
        </div>
      </div>

      {/* Inset Shadow Separator */}
      <div className="h-8 bg-gradient-to-b from-black/20 via-black/10 to-transparent shadow-inner"></div>

      {/* Organizations Section with Tabs */}
      <div className="bg-gradient-to-br from-fblc-navy via-fblc-navy/90 to-fblc-navy/80 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="fblc" className="w-full">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <TabsList className="bg-fblc-navy/20 border border-white/20 p-2 flex flex-col sm:flex-row w-full max-w-md sm:max-w-none sm:w-auto gap-2 sm:gap-0">
                <TabsTrigger 
                  value="fblc" 
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white/70 px-4 sm:px-8 py-3 sm:py-3 w-full sm:w-auto text-sm sm:text-base"
                >
                  FBLC
                </TabsTrigger>
                <TabsTrigger 
                  value="target-alpha" 
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white/70 px-4 sm:px-8 py-3 sm:py-3 w-full sm:w-auto text-sm sm:text-base"
                >
                  Target Alpha
                </TabsTrigger>
                <TabsTrigger 
                  value="jec" 
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white/70 px-4 sm:px-8 py-3 sm:py-3 w-full sm:w-auto text-sm sm:text-base"
                >
                  JEC Canada
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab Content */}
            <div className="max-w-5xl mx-auto">
              {/* FBLC Tab */}
              <TabsContent value="fblc" className="mt-0">
                <FblcTab />
              </TabsContent>

              {/* Target Alpha Tab */}
              <TabsContent value="target-alpha" className="mt-0">
                <TargetAlphaTab />
              </TabsContent>

              {/* JEC Canada Tab */}
              <TabsContent value="jec" className="mt-0">
                <JecCanadaTab />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>

      {/* Timeline Section */}
      <Timeline />

      {/* Stats Section */}
      <Stats />
    </div>
  )
}
