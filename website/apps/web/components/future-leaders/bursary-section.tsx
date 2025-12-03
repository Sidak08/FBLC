export default function BursarySection() {
  return (
    <div className="py-16 sm:py-20" style={{ backgroundColor: '#0F172A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Bursary Program
          </h2>
          <p className="text-white text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed">
            The Future Leaders Program is an innovative initiative launched for the 2025-2026 operational year, aimed at addressing the growing disparity in financial accessibility.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Our Mission */}
          <div>
            <div className="w-16 h-1 bg-blue-500 mb-6"></div>
            <h3 className="text-white text-2xl sm:text-3xl font-bold mb-6">
              Our Mission
            </h3>
            <p className="text-white text-base sm:text-lg leading-relaxed">
              At Brampton FBLC, JEC & TA, we are committed to making extracurricular activities accessible to all; however, many activities incur fees. To ensure equitable access, we are allocating a significant portion of our annual budget to support members who exhibit exceptional merit and financial need. This investment is designed to empower them to become future business leaders.
            </p>
          </div>

          {/* Right Column - The Process */}
          <div>
            <div className="w-16 h-1 bg-blue-500 mb-6"></div>
            <h3 className="text-white text-2xl sm:text-3xl font-bold mb-6">
              The Process
            </h3>
            <p className="text-white text-base sm:text-lg leading-relaxed">
              Prospective participants will undergo a comprehensive application process, with all submissions evaluated by an independent committee chaired by our club advisor and comprising of adult specialists.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
