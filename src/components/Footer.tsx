import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Site Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mikity</h3>
            <p className="text-gray-300 mb-4">
              テクノロジーとデザインについて発信するブログです。
              最新の技術トレンドや実践的なノウハウを共有しています。
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ナビゲーション</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                ホーム
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors">
                ブログ
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                プロフィール
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                お問い合わせ
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">フォローする</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/mikity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/mikity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.759 3.708 13.608 3.708 12.311c0-1.297.49-2.448 1.42-3.321c.871-.832 2.024-1.297 3.321-1.297c1.297 0 2.448.465 3.321 1.297c.832.873 1.297 2.024 1.297 3.321c0 1.297-.465 2.448-1.297 3.321c-.873.807-2.024 1.297-3.321 1.297zm7.83-6.677c-.297 0-.554-.257-.554-.554c0-.297.257-.554.554-.554c.297 0 .554.257.554.554c0 .297-.257.554-.554.554zm2.448-2.448c0-1.297-.49-2.448-1.297-3.321c-.832-.832-2.024-1.297-3.321-1.297H8.449c-1.297 0-2.448.465-3.321 1.297c-.832.873-1.297 2.024-1.297 3.321v7.83c0 1.297.465 2.448 1.297 3.321c.873.832 2.024 1.297 3.321 1.297h7.83c1.297 0 2.448-.465 3.321-1.297c.832-.873 1.297-2.024 1.297-3.321V8.863z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@mikity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Mikity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}