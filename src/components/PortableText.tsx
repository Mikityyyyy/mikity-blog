import { PortableText as SanityPortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'

interface PortableTextProps {
  value: any
}

export default function PortableText({ value }: PortableTextProps) {
  const components = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset?._ref) {
          return null
        }
        
        return (
          <div className="my-8">
            <Image
              src={urlFor(value).width(800).height(400).url()}
              alt={value.alt || ''}
              width={800}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
            {value.alt && (
              <p className="text-center text-gray-500 text-sm mt-2">{value.alt}</p>
            )}
          </div>
        )
      },
    },
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
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-blue-50 italic text-gray-700">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }: any) => <li className="ml-4">{children}</li>,
      number: ({ children }: any) => <li className="ml-4">{children}</li>,
    },
    marks: {
      strong: ({ children }: any) => (
        <strong className="font-bold text-gray-900">{children}</strong>
      ),
      em: ({ children }: any) => (
        <em className="italic">{children}</em>
      ),
      code: ({ children }: any) => (
        <code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      ),
      link: ({ value, children }: any) => {
        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
        const rel = target === '_blank' ? 'noopener noreferrer' : undefined
        
        return (
          <a
            href={value?.href}
            target={target}
            rel={rel}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {children}
          </a>
        )
      },
    },
  }

  // 値の検証
  if (!value || (!Array.isArray(value) && typeof value !== 'object')) {
    return null
  }

  return <SanityPortableText value={value} components={components} />
}