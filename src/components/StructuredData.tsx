interface StructuredDataProps {
  type: 'website' | 'article' | 'person' | 'organization'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData

  switch (type) {
    case 'website':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: data.name,
        url: data.url,
        description: data.description,
        publisher: {
          '@type': 'Person',
          name: 'Mikity',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${data.url}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      }
      break

    case 'article':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        image: data.image,
        author: {
          '@type': 'Person',
          name: data.author,
        },
        publisher: {
          '@type': 'Person',
          name: 'Mikity',
        },
        datePublished: data.publishedAt,
        dateModified: data.updatedAt || data.publishedAt,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url,
        },
      }
      break

    case 'person':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: data.name,
        url: data.url,
        jobTitle: 'Creative Designer & Developer',
        description: data.description,
        sameAs: data.socialLinks,
      }
      break

    default:
      return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}