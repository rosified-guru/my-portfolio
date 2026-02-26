import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:text-blue-600 transition"
        >
          Rose
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <li>
            <Link
              href="/"
              className="hover:text-gray-900 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="#projects"
              className="hover:text-gray-900 transition"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              href="#about"
              className="hover:text-gray-900 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="#contact"
              className="hover:text-gray-900 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}