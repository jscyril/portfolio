import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-[#14203B] text-white fixed w-full top-0 left-0 z-50 transition-transform duration-300 overflow-hidden ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-10" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#6FFFE9] hover:text-[#0B132B] transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#6FFFE9] hover:text-[#0B132B] transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#6FFFE9] hover:text-[#0B132B] transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/1RxT7dXFQLgYDUx8LPj2a80C_wVlMW-d5/view?usp=sharing"
              target="_blank"
              className="px-3 py-2 rounded-md text-sm font-medium border border-[#6FFFE9] text-[#6FFFE9] hover:bg-[#6FFFE9] hover:text-[#0B132B] transition-colors duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#6FFFE9] hover:text-white hover:bg-[#1C2541] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0B132B]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#6FFFE9] hover:text-[#0B132B] transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#6FFFE9] hover:text-[#0B132B] transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#6FFFE9] hover:text-[#0B132B] transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/1RxT7dXFQLgYDUx8LPj2a80C_wVlMW-d5/view?usp=sharing"
              target="_blank"
              className="block px-3 py-2 rounded-md text-base font-medium border border-[#6FFFE9] text-[#6FFFE9] hover:bg-[#6FFFE9] hover:text-[#0B132B] transition-colors duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
