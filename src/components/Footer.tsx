import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center space-x-8">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@mikityvlog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-colors transform hover:-translate-y-1 duration-300"
            aria-label="YouTube"
          >
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/mikity__97/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-colors transform hover:-translate-y-1 duration-300"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.759 3.708 13.608 3.708 12.311c0-1.297.49-2.448 1.42-3.321c.871-.832 2.024-1.297 3.321-1.297c1.297 0 2.448.465 3.321 1.297c.832.873 1.297 2.024 1.297 3.321c0 1.297-.465 2.448-1.297 3.321c-.873.807-2.024 1.297-3.321 1.297zm7.83-6.677c-.297 0-.554-.257-.554-.554c0-.297.257-.554.554-.554c.297 0 .554.257.554.554c0 .297-.257.554-.554.554zm2.448-2.448c0-1.297-.49-2.448-1.297-3.321c-.832-.832-2.024-1.297-3.321-1.297H8.449c-1.297 0-2.448.465-3.321 1.297c-.832.873-1.297 2.024-1.297 3.321v7.83c0 1.297.465 2.448 1.297 3.321c.873.832 2.024 1.297 3.321 1.297h7.83c1.297 0 2.448-.465 3.321-1.297c.832-.873 1.297-2.024 1.297-3.321V8.863z"/></svg>
          </a>

          {/* TikTok */}
           <a
            href="https://www.tiktok.com/@mikity__97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-colors transform hover:-translate-y-1 duration-300"
            aria-label="TikTok"
          >
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 3.13-1.12 6.1-3.2 8.27-2.61 2.52-6.52 3.02-9.71 1.4-2.89-1.5-4.66-4.68-4.32-7.93.3-2.61 1.94-4.85 4.19-5.9 2.17-1.04 4.8-.62 6.56.96.11.1.2.21.28.31l.01-.01c.21.31.25.68.21 1.05-.09.68-.69 1.15-1.37 1.09-.64-.06-1.14-.58-1.16-1.22-.05-.88-.47-1.66-1.11-2.22-1.65-1.45-4.22-.86-5.11 1.19-.85 2.03.11 4.54 2.11 5.48 2.02.9 4.6-.32 5.04-2.47l.01-6.19c-1.55.08-3.11.05-4.66.02v-3.87c.01-.01.02-.01.03-.01z"/></svg>
          </a>

          {/* Note */}
          <a
            href="https://note.com/mikity__97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-colors transform hover:-translate-y-1 duration-300"
            aria-label="Note"
          >
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0v24h24V0H0zm20.8 13.9c0 4.1-3.6 7.4-8 7.4s-8-3.3-8-7.4c0-4.1 3.6-7.4 8-7.4s8 3.3 8 7.4z"/><path d="M12.8 17.6c-2.4 0-4.3-1.7-4.3-3.7 0-2 1.9-3.7 4.3-3.7 2.4 0 4.3 1.7 4.3 3.7 0 2-1.9 3.7-4.3 3.7z"/></svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-gray-300 text-xs">
            © {new Date().getFullYear()} Mikity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}