interface GovernanceCardProps {
  title: string
  borderColor: string
  titleColor: string
  children: React.ReactNode
}

export default function GovernanceCard({ title, borderColor, titleColor, children }: GovernanceCardProps) {
  return (
    <div className={`bg-black border ${borderColor} rounded-lg p-6`}>
      <div className="text-center mb-6">
        <h3 className={`${titleColor} text-xl font-bold px-4 py-2 border ${borderColor} rounded-lg inline-block`}>
          {title}
        </h3>
      </div>
      <div className="text-white text-sm leading-relaxed">
        {children}
      </div>
    </div>
  )
}
