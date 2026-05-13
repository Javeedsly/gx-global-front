import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gx-global.com'
  
  // Bütün dillər üçün ortaq alternativlər obyekti
  const alternates = {
    languages: {
      az: `${baseUrl}/az`,
      en: `${baseUrl}/en`,
      ru: `${baseUrl}/ru`,
      'x-default': `${baseUrl}/en`, // Defolt dil (Tövsiyə olunur)
    },
  }
  
  return [
    {
      url: `${baseUrl}/az`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates,
    },
    {
      url: `${baseUrl}/ru`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates,
    },
  ]
}