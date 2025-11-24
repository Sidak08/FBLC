"use client";

import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { useState } from "react";
import { User } from "lucide-react";

interface NavbarProps {
  className?: string;
}

const navigationLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Join Us", href: "/join-us" },
  { name: "Meet the Team", href: "/meet-the-team" },
  { name: "FBLC × ELP", href: "/elevate-leaders" },
  { name: "FBLC × FLP", href: "/future-leaders" },
  { name: "FBLC × AP", href: "/academic-programming" },
  { name: "Events", href: "/events" },
];

export function Navbar({ className }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className={cn("bg-white border-b border-border", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Main Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img
                  src="/FBLC Logo.svg"
                  alt="FBLC Logo"
                  className="h-16 w-auto filter brightness-0 -mt-3"
                />
              </Link>
            </div>

            {/* Main Navigation Links */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-6">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-black px-3 py-2 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Icon */}
          <div className="hidden md:block">
            <Link href="" className="text-black">
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-black block px-3 py-2 text-base font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
