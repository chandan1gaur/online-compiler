import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: 'https://www.codecompileronline.com/sitemap.xml',
    host: 'https://www.codecompileronline.com',
  }
}
