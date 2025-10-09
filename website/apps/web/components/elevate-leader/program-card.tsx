import Image from 'next/image'

interface ProgramCardProps {
  category: string
  title: string
  description: string
  categoryColor: string
  imageSrc?: string
  imageAlt?: string
}

export default function ProgramCard({ 
  category, 
  title, 
  description, 
  categoryColor, 
  imageSrc, 
  imageAlt 
}: ProgramCardProps) {
  return (
    <div className="rounded-xl p-8 shadow-xl min-h-[200px]" style={{ backgroundColor: '#0F172A' }}>
      <div className="flex items-center mb-4">
        <span className={`${categoryColor} text-sm font-semibold mr-3`}>{category}</span>
      </div>
      
      {imageSrc ? (
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-2xl font-bold">{title}</h3>
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={100}
            height={100}
            className="ml-4"
          />
        </div>
      ) : (
        <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
      )}
      
      <p className="text-white/80 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
