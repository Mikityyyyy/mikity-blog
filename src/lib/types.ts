export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  content: unknown[]
  publishedAt: string
  updatedAt?: string
  mainImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    } | {
      _id: string
      url: string
    }
    alt?: string
  }
  categories?: Category[]
  tags?: Tag[]
  author?: Author
  readTime?: number
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
}

export interface Tag {
  _id: string
  title: string
  slug: {
    current: string
  }
}

export interface Author {
  _id: string
  name: string
  slug: {
    current: string
  }
  bio?: string
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  social?: {
    twitter?: string
    instagram?: string
    youtube?: string
    website?: string
  }
}

export interface SiteSettings {
  title: string
  description: string
  keywords: string[]
  siteUrl: string
  author: Author
  logo?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  favicon?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  socialLinks: {
    twitter?: string
    instagram?: string
    youtube?: string
  }
  googleAnalyticsId?: string
}