const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6kh54bm0'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: `/images/${sanityProjectId}/**`,
      },
    ],
  },
  redirects: async () => [
    {
      source: '/stories',
      destination: '/blog',
      permanent: true,
    },
    {
      source: '/work',
      destination: '/blog',
      permanent: true,
    },
  ],
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.google-analytics.com",
              "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
              "img-src 'self' data: blob: cdn.sanity.io *.google-analytics.com *.googletagmanager.com",
              "font-src 'self' fonts.gstatic.com",
              "connect-src 'self' *.sanity.io *.google-analytics.com *.analytics.google.com *.googletagmanager.com",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests"
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
