"use client";
import { useState } from "react";
import Logo from "./Logo";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About Us" },
    { href: "/join", label: "Join Us" },
    { href: "/team", label: "Meet the Team" },
    { href: "#elp", label: "ELP" },
    { href: "#flp", label: "FLP" },
    { href: "#ap", label: "AP" },
    { href: "#partners", label: "Partners" },
    { href: "#events", label: "Events" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-[95%] mx-auto pt-6 pb-2 px-5">
      <div className="w-full">
        <div className="relative w-full mx-auto h-[70px] rounded-xl bg-[#22356b] shadow-[8px_8px_6px_3px_rgba(0,0,0,0.25)] flex justify-between items-center px-5">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" showText={true} className="group" />
          </div>

          {/* Right side - Navigation Links (Desktop) */}
          <div className="flex justify-evenly min-w-[60vw]">
            {navLinks.map((link, index) => (
              <div className="mx-4" key={index}>
                <a
                  href={link.href}
                  className="text-white hover:text-blue-200 transition-colors duration-300 text-lg font-medium font-[Kameron] relative group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            ))}

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white hover:text-blue-200 transition-colors duration-300 ml-4 p-2"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 mt-2 rounded-xl shadow-lg border border-blue-800/30 transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } bg-[#22356b] shadow-[4px_4px_8px_2px_rgba(0,0,0,0.2)]`}
        >
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-white hover:text-blue-200 hover:bg-blue-800/20 transition-colors duration-300 text-base font-medium font-[Kameron] py-3 px-2 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
