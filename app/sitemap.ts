import type { MetadataRoute } from "next";

const baseUrl = "https://gx-global.com";

const locales = ["az", "en", "ru"] as const;

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

function getUrl(lang: (typeof locales)[number], path: string) {
  return `${baseUrl}/${lang}${path}`;
}

function getAlternates(path: string) {
  return {
    az: getUrl("az", path),
    en: getUrl("en", path),
    ru: getUrl("ru", path),
    "x-default": getUrl("az", path),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    locales.map((lang) => ({
      url: getUrl(lang, route.path),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: getAlternates(route.path),
      },
    }))
  );
}