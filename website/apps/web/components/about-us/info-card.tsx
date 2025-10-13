interface InfoCardProps {
  title: string
  description: string
  className?: string
}

export function InfoCard({ title, description, className = "" }: InfoCardProps) {
  return (
    <div className={`bg-white/95 border border-gray-200/50 p-4 sm:p-6 shadow-xl drop-shadow-lg backdrop-blur-sm rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ${className}`}>
      <h3 className="text-fblc-navy font-semibold text-base sm:text-lg mb-2 sm:mb-3">{title}</h3>
      <p className="text-fblc-navy/70 text-xs sm:text-sm leading-relaxed">{description}</p>
    </div>
  )
}