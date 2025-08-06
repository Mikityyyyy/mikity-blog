'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo/Site Title */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Outer ring */}
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                {/* Inner design - stylized M */}
                <div className="relative">
                  <span className="text-white font-black text-xl tracking-tight">M</span>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-90"></div>
                </div>
              </div>
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-gray-900 via-red-700 to-gray-800 bg-clip-text text-transparent leading-tight">
                Mikity
              </span>
              <span className="text-xs text-gray-500 font-medium -mt-1 tracking-wide">
                TECH & SPORTS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200 font-medium">
              ホーム
            </Link>
            <Link href="/blog" className="px-4 py-2 rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200 font-medium">
              ブログ
            </Link>
            <Link href="/about" className="px-4 py-2 rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200 font-medium">
              プロフィール
            </Link>
            <Link href="/contact" className="px-4 py-2 rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200 font-medium">
              お問い合わせ
            </Link>
          </nav>

          {/* Search & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link href="/blog" className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              最新記事
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <nav className="py-4 space-y-1">
              <Link
                href="/"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                ホーム
              </Link>
              <Link
                href="/blog"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                ブログ
              </Link>
              <Link
                href="/about"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                プロフィール
              </Link>
              <Link
                href="/contact"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                お問い合わせ
              </Link>
              <div className="border-t border-gray-200 my-4 mx-2"></div>
              <Link
                href="/blog"
                className="flex items-center justify-center mx-4 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-200 shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                最新記事を読む
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}