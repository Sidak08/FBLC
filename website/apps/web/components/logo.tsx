import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  textClassName?: string;
}

export function Logo({
  size = "md",
  showText = true,
  className = "",
  textClassName = "",
  ...props
}: LogoProps & React.HTMLAttributes<HTMLDivElement>) {
  const getSizeClasses = (size: string) => {
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

  const getTextSizeClasses = (size: string) => {
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

  const getImageSize = (size: string) => {
    switch (size) {
      case "sm":
        return 32;
      case "md":
        return 48;
      case "lg":
        return 64;
      case "xl":
        return 80;
      default:
        return 48;
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
          width={getImageSize(size)}
          height={getImageSize(size)}
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
