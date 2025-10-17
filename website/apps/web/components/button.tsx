import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  fullWidth?: boolean;
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  fullWidth = false,
  type = "button",
  ...props
}: ButtonProps) {
  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case "primary":
        return `
          bg-red-600 hover:bg-red-700
          text-white
          shadow-xl hover:shadow-2xl
        `;
      case "secondary":
        return `
          bg-transparent
          text-white
          border-2 border-red-600
          hover:bg-red-600 hover:border-red-600
        `;
      case "outline":
        return `
          bg-transparent
          text-red-600
          border-2 border-red-600
          hover:bg-red-600 hover:text-white
        `;
      case "ghost":
        return `
          bg-transparent
          text-white
          hover:bg-white/10
        `;
      default:
        return `
          bg-red-600 hover:bg-red-700
          text-white
          shadow-xl hover:shadow-2xl
        `;
    }
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "sm":
        return "px-4 py-2 text-sm";
      case "md":
        return "px-6 py-3 text-base";
      case "lg":
        return "px-8 py-4 text-lg";
      case "xl":
        return "px-10 py-5 text-xl";
      case "2xl":
        return "px-12 py-6 text-2xl";
      default:
        return "px-6 py-3 text-base";
    }
  };

  const baseClasses = `
    inline-flex
    items-center
    justify-center
    font-[Mulish]
    font-bold
    rounded-xl
    transition-all
    duration-300
    cursor-pointer
    text-center
    whitespace-nowrap
    border-0
    focus:outline-none
    focus:ring-2
    focus:ring-red-600
    focus:ring-offset-2
    focus:ring-offset-transparent
    transform
    hover:scale-105
    active:scale-95
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:transform-none
    disabled:hover:scale-100
  `;

  const widthClasses = fullWidth ? "w-full" : "";

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed transform-none hover:scale-100"
    : "";

  const combinedClasses = `
    ${baseClasses}
    ${getVariantClasses(variant)}
    ${getSizeClasses(size)}
    ${widthClasses}
    ${disabledClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
