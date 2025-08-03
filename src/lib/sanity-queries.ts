import { client } from './sanity'
import { BlogPost, Category, Tag } from './types'

// ブログ記事一覧を取得
export async function getPosts(): Promise<BlogPost[]> {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      _updatedAt,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      author-> {
        _id,
        name,
        slug
      },
      categories[]-> {
        _id,
        title,
        slug
      },
      tags[]-> {
        _id,
        title,
        slug
      }
    }
  `
  
  return await client.fetch(query)
}

// 特定のスラッグの記事を取得
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      _updatedAt,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      author-> {
        _id,
        name,
        slug,
        bio,
        image {
          asset-> {
            _id,
            url
          }
        },
        social
      },
      categories[]-> {
        _id,
        title,
        slug,
        description
      },
      tags[]-> {
        _id,
        title,
        slug
      },
      body,
      seo
    }
  `
  
  return await client.fetch(query, { slug })
}

// 最新記事を指定数取得
export async function getLatestPosts(limit: number = 3): Promise<BlogPost[]> {
  const query = `
    *[_type == "post"] | order(publishedAt desc)[0...${limit}] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      author-> {
        _id,
        name,
        slug
      },
      categories[]-> {
        _id,
        title,
        slug
      },
      tags[]-> {
        _id,
        title,
        slug
      },
      "readTime": round(length(pt::text(body)) / 5 / 60)
    }
  `
  
  return await client.fetch(query)
}

// カテゴリー一覧を取得
export async function getCategories(): Promise<Category[]> {
  const query = `
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description
    }
  `
  
  return await client.fetch(query)
}

// 特定カテゴリーの記事を取得
export async function getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  const query = `
    *[_type == "post" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      author-> {
        _id,
        name,
        slug
      },
      categories[]-> {
        _id,
        title,
        slug
      },
      tags[]-> {
        _id,
        title,
        slug
      }
    }
  `
  
  return await client.fetch(query, { categorySlug })
}

// タグ一覧を取得
export async function getTags(): Promise<Tag[]> {
  const query = `
    *[_type == "tag"] | order(title asc) {
      _id,
      title,
      slug
    }
  `
  
  return await client.fetch(query)
}

// 特定タグの記事を取得
export async function getPostsByTag(tagSlug: string): Promise<BlogPost[]> {
  const query = `
    *[_type == "post" && references(*[_type == "tag" && slug.current == $tagSlug]._id)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      author-> {
        _id,
        name,
        slug
      },
      categories[]-> {
        _id,
        title,
        slug
      },
      tags[]-> {
        _id,
        title,
        slug
      }
    }
  `
  
  return await client.fetch(query, { tagSlug })
}

// 記事検索
export async function searchPosts(searchTerm: string): Promise<BlogPost[]> {
  const query = `
    *[_type == "post" && (title match $searchTerm || excerpt match $searchTerm)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      author-> {
        _id,
        name,
        slug
      },
      categories[]-> {
        _id,
        title,
        slug
      },
      tags[]-> {
        _id,
        title,
        slug
      }
    }
  `
  
  return await client.fetch(query, { searchTerm: `${searchTerm}*` })
}