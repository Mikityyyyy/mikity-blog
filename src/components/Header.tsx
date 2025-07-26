'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Site Title */}
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Mikity
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              ホーム
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              ブログ
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              プロフィール
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              お問い合わせ
            </Link>
          </nav>

          {/* Search Icon */}
          <div className="hidden md:flex items-center">
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ブログ
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                プロフィール
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}