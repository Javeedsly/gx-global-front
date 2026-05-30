export const SUPPORTED_LOCALES = ["az", "en", "ru"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "az";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://gx-global.com";

export const SITE_NAME = "GX-GLOBAL";

export const DEFAULT_OG_IMAGE = "/gx_2.png";

export const CONTACT_EMAIL = "info@gx-global.com";
export const CONTACT_PHONE = "+994508041911";
export const DISPLAY_PHONE = "+994 50 804 19 11";

export const COMPANY_ADDRESS = {
  streetAddress: "Nəcəf Nərimanov küçəsi 5c",
  addressLocality: "Bakı",
  addressRegion: "Bakı",
  postalCode: "AZ1007",
  addressCountry: "AZ",
};

export const OG_LOCALE: Record<Locale, string> = {
  az: "az_AZ",
  en: "en_US",
  ru: "ru_RU",
};

export const SEO_CONTENT: Record<
  Locale,
  {
    homeTitle: string;
    homeDescription: string;
    productsTitle: string;
    productsDescription: string;
    keywords: string[];
  }
> = {
  az: {
    homeTitle: "Qlobal təchizat və logistika həlləri",
    homeDescription:
      "GX-GLOBAL sənaye məhsulları, topdansatış təchizatı və qlobal logistika üzrə etibarlı tərəfdaşdır.",
    productsTitle: "Sənaye məhsulları və təchizat kataloqu",
    productsDescription:
      "Loctite, TEROSON, Molykote, SPEEDOL, TESS-SAN, SKF və YILMAZ REDÜKTÖR məhsulları üzrə sənaye təchizatı.",
    keywords: [
      "GX-GLOBAL",
      "sənaye təchizatı",
      "logistika",
      "topdansatış",
      "Loctite",
      "TEROSON",
      "Molykote",
      "SPEEDOL",
      "TESS-SAN",
      "SKF",
      "YILMAZ REDÜKTÖR",
      "Azərbaycan",
      "Bakı",
    ],
  },
  en: {
    homeTitle: "Global supply and logistics solutions",
    homeDescription:
      "GX-GLOBAL is a reliable partner for industrial products, wholesale supply and global logistics solutions.",
    productsTitle: "Industrial products and supply catalogue",
    productsDescription:
      "Industrial supply catalogue for Loctite, TEROSON, Molykote, SPEEDOL, TESS-SAN, SKF and YILMAZ REDÜKTÖR products.",
    keywords: [
      "GX-GLOBAL",
      "industrial supply",
      "logistics",
      "wholesale",
      "Loctite",
      "TEROSON",
      "Molykote",
      "SPEEDOL",
      "TESS-SAN",
      "SKF",
      "YILMAZ REDÜKTÖR",
      "Azerbaijan",
      "Baku",
    ],
  },
  ru: {
    homeTitle: "Глобальные решения для снабжения и логистики",
    homeDescription:
      "GX-GLOBAL — надежный партнер в сфере промышленных товаров, оптовых поставок и глобальной логистики.",
    productsTitle: "Каталог промышленных товаров и поставок",
    productsDescription:
      "Каталог промышленного снабжения для продукции Loctite, TEROSON, Molykote, SPEEDOL, TESS-SAN, SKF и YILMAZ REDÜKTÖR.",
    keywords: [
      "GX-GLOBAL",
      "промышленное снабжение",
      "логистика",
      "оптовые поставки",
      "Loctite",
      "TEROSON",
      "Molykote",
      "SPEEDOL",
      "TESS-SAN",
      "SKF",
      "YILMAZ REDÜKTÖR",
      "Азербайджан",
      "Баку",
    ],
  },
};

export function getLocale(locale?: string | null): Locale {
  if (SUPPORTED_LOCALES.includes(locale as Locale)) {
    return locale as Locale;
  }

  return DEFAULT_LOCALE;
}

function normalizePath(path = "") {
  if (!path || path === "/") return "";

  return path.startsWith("/") ? path : `/${path}`;
}

export function absoluteUrl(path = "") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${SITE_URL}${normalizePath(path)}`;
}

export function canonicalUrl(locale: Locale = DEFAULT_LOCALE, path = "") {
  return `${SITE_URL}/${locale}${normalizePath(path)}`;
}

export function languageAlternates(
  path = ""
): Record<Locale | "x-default", string> {
  return {
    az: canonicalUrl("az", path),
    en: canonicalUrl("en", path),
    ru: canonicalUrl("ru", path),
    "x-default": canonicalUrl(DEFAULT_LOCALE, path),
  };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}