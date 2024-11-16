import React from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-gray-900 opacity-85 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="ml-2 text-xl font-bold">jscyril</span>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="/about"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 hover:text-white"
            >
              About
            </a>
            <a
              href="/projects"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 hover:text-white"
            >
              Contact
            </a>
            <a
              href="/resume"
              className="px-3 py-2 rounded-md text-sm font-medium border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors duration-300"
            >
              Resume
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-400 hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 hover:text-white"
            >
              About
            </a>
            <a
              href="/projects"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 hover:text-white"
            >
              Contact
            </a>
            <a
              href="/resume"
              className="block px-3 py-2 rounded-md text-base font-medium border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
