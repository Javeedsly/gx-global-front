import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gx-global.com';
  const locales = ['az', 'en', 'ru'];

  // Saytdakı bütün mövcud marşrutlar (bölmələr)
  // path: "" -> Ana Səhifə, path: "/products" -> Məhsullar Səhifəsi
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
  ];

  // Hər bir səhifə və hər bir dil kombinasiyası üçün dinamik olaraq tam sitemap obyektləri yaradırıq
  return pages.flatMap((page) =>
    locales.map((lang) => ({
      url: `${baseUrl}/${lang}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      // Google-a bu səhifənin digər dillərdəki rəsmi linklərini (hreflang) bəyan edirik
      alternates: {
        languages: {
          az: `${baseUrl}/az${page.path}`,
          en: `${baseUrl}/en${page.path}`,
          ru: `${baseUrl}/ru${page.path}`,
        },
      },
    }))
  );
}