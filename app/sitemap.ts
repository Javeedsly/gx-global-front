import type { MetadataRoute } from "next";
import {
  canonicalUrl,
  languageAlternates,
  SUPPORTED_LOCALES,
} from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "",
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      path: "/products",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  return routes.flatMap((route) =>
    SUPPORTED_LOCALES.map((lang) => ({
      url: canonicalUrl(lang, route.path),
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: languageAlternates(route.path),
      },
    }))
  );
}