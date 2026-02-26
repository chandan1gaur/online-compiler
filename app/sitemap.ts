import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.codecompileronline.com'
  const now = new Date()
  const tutorialSlugs = [
    "variables",
    "functions",
    "closures",
    "async-await",
    "promises",
    "array-methods",
    "interview-questions",
    "history-of-javascript",
    "how-javascript-works",
    "javascript-in-browser-vs-nodejs",
    "setting-up-javascript-environment",
    "writing-your-first-javascript-program",
    "javascript-syntax",
    "comments-in-javascript",
    "data-types",
    "operators",
    "conditionals",
    "loops",
    "strings",
    "objects",
    "this-keyword",
    "events",
    "dom-manipulation",
  ]

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/html/online-compiler`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/javascript/online-compiler`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/formatter/online-compiler`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/regex/online-compiler`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/javascript`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    ...tutorialSlugs.map((slug) => ({
      url: `${baseUrl}/javascript/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ]
}
