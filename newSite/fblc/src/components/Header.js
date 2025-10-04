import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative">
      <div className="bg-[#0F1729]/80 backdrop-blur-sm border-b border-[#1E40AF]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white text-lg font-bold hover:text-blue-300 transition-colors">
            Brampton FBLC
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-blue-300 transition-colors">
              About
            </Link>
            <Link href="/team" className="text-white hover:text-blue-300 transition-colors">
              Team
            </Link>
            <Link href="/events" className="text-white hover:text-blue-300 transition-colors">
              Events
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-300 transition-colors">
              Contact
            </Link>
          </nav>

          <Link
            href="/join"
            className="bg-[#1E40AF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1D4ED8] transition-colors"
          >
            Join Today
          </Link>
        </div>
      </div>
    </header>
  );
}
