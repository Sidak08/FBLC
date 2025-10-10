import Image from 'next/image'
import GovernanceCard from './governance-card'

export default function GovernanceStructureSection() {
  return (
    <div 
      className="py-16 sm:py-24 relative"
      style={{
        background: 'linear-gradient(353.51deg, #04070D 0%, #1A2537 60%, #1F2F55 100%)'
      }}
    >
      {/* Streaks Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/governance/Streaks.svg"
          alt="Streaks Background"
          fill
          className="object-cover opacity-20"
        />
      </div>
      
      {/* Second Streaks Background - Streak2 */}
      <div className="absolute top-0 left-0 right-0 h-1/2 z-0">
        <Image
          src="/governance/Streak2.png"
          alt="Streak2 Background"
          fill
          className="object-cover opacity-15"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* STRUCTURE Section */}
          <GovernanceCard 
            title="STRUCTURE" 
            borderColor="border-blue-400" 
            titleColor="text-blue-400"
          >
            <div className="space-y-4">
              <p>
                Brampton FBLC is a registered chapter under Future Business Leaders of Canada Inc., adhering to its constitution, by-laws, and regulations. Two subsidiary clubs operate as affiliated entities:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Brampton Target Alpha (TA), a chapter chartered under Target Alpha Canada Inc.</li>
                <li>Brampton Junior Economics Club (JEC), a chapter chartered under Junior Economics Club of Canada Inc.</li>
              </ul>
              <p>
                Brampton FBLC, JEC, and TA collectively function as a unified body, recognized as a premier youth business education organization in Brampton, and are registered members of the Ascend Council of Canada, subject to its policies and constitutional articles.
              </p>
            </div>
          </GovernanceCard>

          {/* DOCUMENTATION Section */}
          <GovernanceCard 
            title="DOCUMENTATION" 
            borderColor="border-blue-400" 
            titleColor="text-blue-400"
          >
            <ul className="list-disc list-inside space-y-2">
              <li>Constitution</li>
              <li>Organizational Chart</li>
              <li>Executive Orders 2025-2026</li>
              <li>2024-2025 Annual Impact Report</li>
            </ul>
          </GovernanceCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* BOARD OF DIRECTORS Section */}
          <GovernanceCard 
            title="BOARD OF DIRECTORS" 
            borderColor="border-red-500" 
            titleColor="text-red-500"
          >
            <div className="space-y-4">
              <p>
                The Board of Directors (BOD) is the supreme governing authority of Brampton FBLC, JEC, and TA. Its responsibilities include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Establishing the long-term vision and mission of the organization.</li>
                <li>Monitoring and guiding the Executive leadership.</li>
                <li>Appointing or removing Co-Presidents.</li>
                <li>Approving constitutional amendments and significant organizational changes.</li>
              </ul>
              <p>
                The Board is composed of a Chairperson and a minimum of three additional Directors. A special note for the 2025-2026 term, due to logistical constraints, states that the Board will be represented solely by the Chairperson, who will exercise all legal and fiduciary responsibilities.
              </p>
            </div>
          </GovernanceCard>

          {/* EXECUTIVE BOARD Section */}
          <GovernanceCard 
            title="EXECUTIVE BOARD" 
            borderColor="border-yellow-500" 
            titleColor="text-yellow-500"
          >
            <div className="space-y-4">
              <p>
                The Executive Board is the principal operating body, directly accountable to the Board of Directors, and led by two Co-Presidents. Their joint responsibilities include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Developing and implementing the annual strategic plan.</li>
                <li>Overseeing all departments, programs, and operations.</li>
                <li>Managing Officers, Committees, and the General Membership.</li>
              </ul>
              <p>
                All Officers and Members operate under the direction and authority of the Co-Presidents, in accordance with the governing Constitution and By-laws of Brampton FBLC, JEC, and TA.
              </p>
            </div>
          </GovernanceCard>
        </div>
      </div>
    </div>
  )
}
