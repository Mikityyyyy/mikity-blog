import { PortableText as SanityPortableText } from '@portabletext/react'

interface PortableTextProps {
  value: any
}

export default function PortableText({ value }: PortableTextProps) {
  const components = {
    block: {
      h1: ({ children }: any) => (
        <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8">{children}</h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-6">{children}</h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-5">{children}</h3>
      ),
      normal: ({ children }: any) => (
        <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
      ),
    },
  }

  return <SanityPortableText value={value} components={components} />
}