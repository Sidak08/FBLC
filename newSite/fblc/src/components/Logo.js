import Image from "next/image";

export default function Logo({
  size = "md",
  showText = true,
  className = "",
  textClassName = "",
  ...props
}) {
  const getSizeClasses = (size) => {
    switch (size) {
      case "sm":
        return "w-8 h-8";
      case "md":
        return "w-12 h-12";
      case "lg":
        return "w-16 h-16";
      case "xl":
        return "w-20 h-20";
      default:
        return "w-12 h-12";
    }
  };

  const getTextSizeClasses = (size) => {
    switch (size) {
      case "sm":
        return "text-xs ml-2";
      case "md":
        return "text-sm ml-3";
      case "lg":
        return "text-base ml-4";
      case "xl":
        return "text-lg ml-4";
      default:
        return "text-sm ml-3";
    }
  };

  return (
    <div className={`flex items-center ${className}`} {...props}>
      {/* Logo Mark */}
      <div
        className={`
          ${getSizeClasses(size)}
          flex items-center justify-center
          transition-transform duration-300
          hover:scale-105
          relative
        `}
      >
        {/* FBLC Logo SVG */}
        <Image
          src="/logo.svg"
          alt="FBLC Logo"
          width={
            size === "sm" ? 32 : size === "md" ? 48 : size === "lg" ? 64 : 80
          }
          height={
            size === "sm" ? 32 : size === "md" ? 48 : size === "lg" ? 64 : 80
          }
          className="object-contain drop-shadow-sm"
          priority
        />
      </div>

      {/* Logo Text */}
      {showText && (
        <span
          className={`
            text-white font-bold font-[Kameron]
            ${getTextSizeClasses(size)}
            ${textClassName}
            hidden sm:block
          `}
        >
          FBLC
        </span>
      )}
    </div>
  );
}
