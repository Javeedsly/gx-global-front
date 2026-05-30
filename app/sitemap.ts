import type { MetadataRoute } from "next";

import {
  canonicalUrl,
  languageAlternates,
  SUPPORTED_LOCALES,
  type Locale,
} from "@/lib/seo";

const routes = [
  {
    path: "",
    priority: 1,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/products",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) =>
    SUPPORTED_LOCALES.map((locale: Locale) => ({
      url: canonicalUrl(locale, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: languageAlternates(route.path),
      },
    }))
  );
}