'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Site Title */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Gradient Logo Icon */}
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-indigo-500/25 transition-all duration-300">
                <span className="text-white font-bold text-sm">M</span>
              </div>
            </div>
            
            <span className="text-xl font-bold text-white group-hover:text-white/80 transition-colors duration-300">
              Mikity
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white/70 hover:text-white transition-colors duration-200 font-medium relative group">
              Home
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/blog" className="text-white/70 hover:text-white transition-colors duration-200 font-medium relative group">
              Stories
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/work" className="text-white/70 hover:text-white transition-colors duration-200 font-medium relative group">
              Work
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/about" className="text-white/70 hover:text-white transition-colors duration-200 font-medium relative group">
              About
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="gradient-bg text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 glass">
            <nav className="py-6 px-6 space-y-4">
              <Link
                href="/"
                className="block text-white/70 hover:text-white transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="block text-white/70 hover:text-white transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Stories
              </Link>
              <Link
                href="/work"
                className="block text-white/70 hover:text-white transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/about"
                className="block text-white/70 hover:text-white transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block gradient-bg text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}