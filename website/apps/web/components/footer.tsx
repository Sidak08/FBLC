import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

export function Footer(props?: FooterProps) {
  const {
    logo = {
      src: "/FBLC Logo.svg",
      alt: "FBLC Logo",
      title: "FBLC",
      url: "/",
    },
    tagline = "Be part of the movement that’s changing the game. This is more than content, it’s a community. Don’t just sit on the sidelines, join us and help shape the future. Together, we’re building something bigger than ourselves, and we want you to be a part of it!",
    menuItems = [
      {
        title: "Organizations",
        links: [
          { text: "FBLC", url: "/about-us" },
          { text: "Target Alpha", url: "/about-us" },
          { text: "JEC Canada", url: "/about-us" },
        ],
      },
      {
        title: "Get Involved",
        links: [
          { text: "Join Us", url: "/join-us" },
          { text: "Meet the Team", url: "/meet-the-team" },
          { text: "Events", url: "/events" },
        ],
      },
      {
        title: "Programs",
        links: [
          { text: "ELP", url: "/elevate-leaders" },
          { text: "FLP", url: "/future-leaders" },
          { text: "AP Partners", url: "/academic-programming" },
        ],
      },
      {
        title: "Learn More",
        links: [
          { text: "About Us", url: "/about-us" },
          { text: "Governance", url: "/governance" },
          { text: "LinkedIn", url: "https://www.linkedin.com/company/brampton-fblc-jec-ta/" }
        ],
      },
    ],
    copyright = `© ${new Date().getFullYear()}  © Future Business Leaders of Canada Brampton Chapter \n All Rights Reserved.`,

    bottomLinks = [
      { text: "Terms and Conditions", url: "/terms" },
      { text: "Privacy Policy", url: "/privacy" },
    ],
  } = props || {};

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Tagline */}
          <div className="lg:col-span-2">
            <Link href={logo.url} className="flex items-center mb-4">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-xl font-bold text-fblc-gold">
                {logo.title}
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">{tagline}</p>
          </div>

          {/* Menu Items */}
          {menuItems.map((menu, index) => (
            <div key={index}>
              <h3 className="text-fblc-gold font-semibold mb-4">
                {menu.title}
              </h3>
              <ul className="space-y-2">
                {menu.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.url}
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">{copyright}</p>
          <div className="flex space-x-6">
            {bottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
