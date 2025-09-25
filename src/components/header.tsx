'use client'

import React, { useState } from 'react'
import { ThemeToggle } from './theme-toggle'
import Link from 'next/link'
import { MenuIcon, X } from 'lucide-react'

const Links = [
  {link: "#about",
    name: "About Me"
  },
  {link: "#works",
    name: "Works"
  },
  {link: "#contact",
    name: "Contact"
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="flex justify-between items-center p-5 max-w-7xl mx-auto">
        {/* Logo/Brand - optional */}
        <div className="flex-1">
          {/* You can add a logo here if needed */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 items-center text-slate-600 dark:text-slate-300">
            {Links.map((link, index) => (
              <li key={`${index + link.name}`}>
                <Link 
                  href={link.link}
                  className="text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <ThemeToggle />
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          ) : (
            <MenuIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <nav className="px-5 py-4">
            <ul className="space-y-3">
              {Links.map((link, index) => (
                <li key={`mobile-${index + link.name}`}>
                  <Link
                    href={link.link}
                    onClick={closeMenu}
                    className="block text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-3 border-t border-gray-200 dark:border-gray-800">
                <div className="flex justify-start">
                  <ThemeToggle />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
