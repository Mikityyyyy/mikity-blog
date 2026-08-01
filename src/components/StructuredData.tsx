interface StructuredDataPayload {
  name?: string;
  url?: string;
  description?: string;
  title?: string;
  image?: string | null;
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  socialLinks?: readonly string[];
}

interface StructuredDataProps {
  type: "website" | "article" | "person" | "organization";
  data: StructuredDataPayload;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData;

  switch (type) {
    case "website":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: data.name,
        url: data.url,
        description: data.description,
        publisher: { "@type": "Person", name: "Mikity" },
      };
      break;
    case "article":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.title,
        description: data.description,
        image: data.image,
        author: { "@type": "Person", name: data.author },
        publisher: { "@type": "Person", name: "Mikity" },
        datePublished: data.publishedAt,
        dateModified: data.updatedAt || data.publishedAt,
        mainEntityOfPage: { "@type": "WebPage", "@id": data.url },
      };
      break;
    case "person":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: data.name,
        url: data.url,
        description: data.description,
        sameAs: data.socialLinks,
      };
      break;
    default:
      return null;
  }

  const serializedData = JSON.stringify(structuredData).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializedData }} />;
}
