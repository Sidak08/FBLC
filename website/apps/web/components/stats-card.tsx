interface StatsCardProps {
  number: string;
  label: string;
  variant?: "primary" | "secondary" | "tertiary";
}

export function StatsCard({ number, label, variant = "primary" }: StatsCardProps) {
  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case "primary":
        return "bg-blue-400 hover:bg-blue-500";
      case "secondary":
        return "bg-blue-700 hover:bg-blue-800";
      case "tertiary":
        return "bg-blue-900 hover:bg-blue-950";
      default:
        return "bg-blue-400 hover:bg-blue-500";
    }
  };

  return (
    <div
      className={`
        flex-1
        ${getVariantClasses(variant)}
        rounded-xl
        p-6 sm:p-8
        text-center
        shadow-2xl
        transform
        hover:scale-105
        hover:shadow-3xl
        transition-all
        duration-300
        relative
        overflow-hidden
        min-w-0
      `}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-pink-500"></div>

      {/* Number */}
      <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 font-[MuseoModerno] leading-none">
        {number}
      </div>

      {/* Label */}
      <div className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white font-[MuktaMalar] leading-tight">
        {label}
      </div>

      {/* Subtle background decoration */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white opacity-5 rounded-full"></div>
      <div className="absolute -top-2 -left-2 w-16 h-16 bg-white opacity-5 rounded-full"></div>
    </div>
  );
}
