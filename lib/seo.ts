export const SUPPORTED_LOCALES = ["az", "en", "ru"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "az";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://gx-global.com";

export const SITE_NAME = "GX Global Group";

export const SITE_ALTERNATE_NAMES = [
  "GX Global",
  "GX-GLOBAL",
  "GX Global Azerbaijan",
  "GX Global Group Azerbaijan",
];

export const DEFAULT_OG_IMAGE = "/gx_2.png";

export const CONTACT_EMAIL = "info@gx-global.com";
export const CONTACT_PHONE = "+994508041911";
export const DISPLAY_PHONE = "+994 50 804-19-11";

export const GOOGLE_BUSINESS_PROFILE_URL =
  process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL?.trim() || "";

export const COMPANY_ADDRESS = {
  streetAddress: "5C Najaf Narimanov Street",
  addressLocality: "Baku",
  addressRegion: "Baku",
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
    homeTitle: "GX Global Group - Sənaye təchizatı və logistika",
    homeDescription:
      "GX Global Group 2018-ci ildən sənaye yağları, podşipniklər, filtr sistemləri, reduktorlar, yapışdırıcılar və logistika həlləri üzrə etibarlı təchizat partnyorudur.",
    productsTitle: "Sənaye məhsulları və təchizat kataloqu",
    productsDescription:
      "Loctite, TEROSON, Molykote, SPEEDOL, TESS-SAN, SKF, YILMAZ REDÜKTÖR və YIWU YIDA FILTERS məhsulları üzrə sənaye təchizatı.",
    keywords: [
      "GX Global",
      "GX-GLOBAL",
      "GX Global Group",
      "GX Global Azerbaijan",
      "sənaye təchizatı",
      "sənaye yağları",
      "sənaye məhsulları",
      "logistika",
      "topdansatış",
      "podşipnik",
      "filtr sistemləri",
      "Loctite Azərbaycan",
      "TEROSON Azərbaycan",
      "Molykote Azərbaycan",
      "SPEEDOL Azərbaycan",
      "TESS-SAN Azərbaycan",
      "SKF Azərbaycan",
      "YILMAZ REDÜKTÖR Azərbaycan",
      "Bakı",
      "Azərbaycan",
    ],
  },
  en: {
    homeTitle: "GX Global Group - Industrial supply and logistics",
    homeDescription:
      "GX Global Group has been a trusted supply partner since 2018 for industrial lubricants, bearings, filter systems, reducers, adhesives and logistics solutions.",
    productsTitle: "Industrial products and supply catalogue",
    productsDescription:
      "Industrial supply catalogue for Loctite, TEROSON, Molykote, SPEEDOL, TESS-SAN, SKF, YILMAZ REDÜKTÖR and YIWU YIDA FILTERS products.",
    keywords: [
      "GX Global",
      "GX-GLOBAL",
      "GX Global Group",
      "GX Global Azerbaijan",
      "industrial supply",
      "industrial lubricants",
      "industrial products",
      "logistics",
      "wholesale",
      "bearings",
      "filter systems",
      "Loctite Azerbaijan",
      "TEROSON Azerbaijan",
      "Molykote Azerbaijan",
      "SPEEDOL Azerbaijan",
      "TESS-SAN Azerbaijan",
      "SKF Azerbaijan",
      "YILMAZ REDÜKTÖR Azerbaijan",
      "Baku",
      "Azerbaijan",
    ],
  },
  ru: {
    homeTitle: "GX Global Group - Промышленное снабжение и логистика",
    homeDescription:
      "GX Global Group с 2018 года является надежным партнером по поставкам промышленных масел, подшипников, фильтров, редукторов, клеевых решений и логистических услуг.",
    productsTitle: "Каталог промышленных товаров и поставок",
    productsDescription:
      "Каталог промышленного снабжения для продукции Loctite, TEROSON, Molykote, SPEEDOL, TESS-SAN, SKF, YILMAZ REDÜKTÖR и YIWU YIDA FILTERS.",
    keywords: [
      "GX Global",
      "GX-GLOBAL",
      "GX Global Group",
      "GX Global Azerbaijan",
      "промышленное снабжение",
      "промышленные масла",
      "промышленные товары",
      "логистика",
      "оптовые поставки",
      "подшипники",
      "фильтры",
      "Loctite Азербайджан",
      "TEROSON Азербайджан",
      "Molykote Азербайджан",
      "SPEEDOL Азербайджан",
      "TESS-SAN Азербайджан",
      "SKF Азербайджан",
      "YILMAZ REDÜKTÖR Азербайджан",
      "Баку",
      "Азербайджан",
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

export function languageAlternates(path = ""): Record<string, string> {
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