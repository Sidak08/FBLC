import Image from "next/image";
import { Button } from "@workspace/ui/components/button"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import {
  FblcTab,
  TargetAlphaTab,
  JecCanadaTab,
  Timeline,
  Stats,
} from "@/components/about-us";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        <Image
          src="/hero/AboutUsHeroImage.png"
          alt="About Us Banner"
          fill
          className="object-cover hidden sm:block"
          priority
        />
        <Image
          src="/hero/AboutUsMobileHeroImage.png" 
          alt="About Us Mobile Banner"
          fill
          className="object-cover sm:hidden" 
          priority
        />
      </div>

      {/* Continuous Background Container */}
      <div
        style={{
          background:
            "linear-gradient(353.51deg, #04070D 2.91%, #1A2537 60.43%, #1F2F55 98.7%)",
        }}
      >
        {/* Organizations Section with Tabs */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="fblc" className="w-full">
              {/* Tab Navigation */}
              <div className="flex justify-center mb-8 sm:mb-12">
                <TabsList
                  className="flex flex-col sm:flex-row w-full max-w-md sm:max-w-none sm:w-auto gap-2 sm:gap-0 backdrop-blur-md shadow-xl bg-[#1E242E]"
                >
                  <TabsTrigger
                    value="fblc"
                    className="data-[state=active]:!bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg text-white/80 px-4 sm:px-8 py-3 sm:py-3 w-full sm:w-auto text-sm sm:text-base font-medium hover:bg-white/10 transition-all duration-200 rounded-md"
                  >
                    FBLC
                  </TabsTrigger>
                  <TabsTrigger
                    value="target-alpha"
                    className="data-[state=active]:!bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg text-white/80 px-4 sm:px-8 py-3 sm:py-3 w-full sm:w-auto text-sm sm:text-base font-medium hover:bg-white/10 transition-all duration-200 rounded-md"
                  >
                    Target Alpha
                  </TabsTrigger>
                  <TabsTrigger
                    value="jec"
                    className="data-[state=active]:!bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg text-white/80 px-4 sm:px-8 py-3 sm:py-3 w-full sm:w-auto text-sm sm:text-base font-medium hover:bg-white/10 transition-all duration-200 rounded-md"
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
    </div>
  );
}
