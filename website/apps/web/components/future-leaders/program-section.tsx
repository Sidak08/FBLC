import Image from 'next/image'
import ProgramCard from './program-card'

const programData = [
  {
    category: 'Travel & Accommodations',
    title: 'Travel and Accommodations Bursary',
    description: 'The New Horizons Bursary is designed to offer a one-time financial award to recipients, specifically aimed at offsetting the costs associated with transportation, meals, and any requisite accommodations. This bursary is particularly intended for individuals participating in business competitions such as the Canadian National Leadership Conference (CNLC). By alleviating these financial burdens, the bursary enables participants to focus on their competitive endeavors without the distraction of logistical concerns.',
    categoryColor: 'text-green-400',
    imageSrc: '/future-leader/NewHorizonsImage.png',
    imageAlt: 'New Horizons'
  },
  {
    category: 'AI Technology',
    title: 'AI Business Bursary',
    description: 'The Next Gen AI Bursary provides a unique financial grant designed to empower emerging business leaders with cutting-edge artificial intelligence capabilities. Recipients of this bursary will receive a one-time payment intended to alleviate the financial burden associated with subscribing to AI services. This initiative ensures that our beneficiaries are equipped with the robust support of AI technology, thereby enhancing their competitive edge in the increasingly competitive business landscape.',
    categoryColor: 'text-blue-400',
    imageSrc: '/future-leader/NextGenAIImage.png',
    imageAlt: 'Next Gen AI'
  },
  {
    category: 'Professional Attire',
    title: 'Formal Wear Grant',
    description: 'The Dress for Success Bursary offers a singular financial grant specifically designed to offset the substantial expenses incurred in obtaining professional business attire. This initiative seeks to empower future business leaders by enabling them to present themselves with confidence and poise in the competitive arena of the business world. By alleviating the financial burden associated with purchasing formal clothing, the bursary supports recipients in making a strong impression, thus enhancing their professional opportunities and career prospects.',
    categoryColor: 'text-purple-400',
    imageSrc: '/future-leader/DressSucessImage.png',
    imageAlt: 'Dress for Success'
  },
  {
    category: 'Academic Support',
    title: 'Academic Supplies Bursary',
    description: 'The Scholar\'s Kit Bursary provides a unique financial award for eligible recipients, intended to alleviate the financial burden associated with various academic-related expenses. This one-time grant specifically supports the purchase of essential stationery, notebooks, and other necessary materials integral to the academic experience. Through this initiative, the bursary aims to enhance the educational journey by ensuring students have access to the crucial resources they need to succeed.',
    categoryColor: 'text-yellow-400',
    imageSrc: '/future-leader/ScholarsKitImage.png',
    imageAlt: 'Scholars Kit'
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
            <h2 className="white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Bursaries
            </h2>
           
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
                {programData.slice(0, 2).map((program, index) => (
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
                {programData.slice(2, 4).map((program, index) => (
                  <ProgramCard
                    key={index + 2}
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
