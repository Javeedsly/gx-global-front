export const SITE_NAME = "GX-GLOBAL";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://gx-global.com"
).replace(/\/$/, "");

export const DEFAULT_OG_IMAGE = "/gx_2.png";

export const CONTACT_EMAIL = "info@gx-global.com";
export const CONTACT_PHONE = "+994508041911";
export const DISPLAY_PHONE = "+994 50 804-19-11";

export const COMPANY_ADDRESS = {
  streetAddress: "Nəcəf Nərimanov küçəsi 5c",
  addressLocality: "Bakı",
  addressRegion: "Bakı",
  postalCode: "AZ1007",
  addressCountry: "AZ",
};

export const SUPPORTED_LOCALES = ["az", "en", "ru"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: SupportedLocale = "az";

export const OG_LOCALE: Record<SupportedLocale, string> = {
  az: "az_AZ",
  en: "en_US",
  ru: "ru_RU",
};

export const SEO_CONTENT: Record<
  SupportedLocale,
  {
    homeTitle: string;
    homeDescription: string;
    productsTitle: string;
    productsDescription: string;
    keywords: string[];
  }
> = {
  az: {
    homeTitle: "Sənaye Təchizatı və Qlobal Logistika",
    homeDescription:
      "GX-GLOBAL sənaye yağları, yapışdırıcılar, rulmanlar, reduktorlar və qlobal logistika həlləri üzrə etibarlı təchizat partnyorudur.",
    productsTitle:
      "Sənaye Məhsulları: Loctite, TEROSON, Molykote, SKF və Reduktorlar",
    productsDescription:
      "Loctite, TEROSON, Molykote, SPEEDOL, TESS-SAN, YILMAZ REDÜKTÖR və SKF məhsullarını GX-GLOBAL kataloqunda kəşf edin.",
    keywords: [
      "sənaye məhsulları",
      "sənaye yağları",
      "logistika",
      "təchizat",
      "Loctite Azərbaycan",
      "TEROSON Azərbaycan",
      "Molykote Azərbaycan",
      "SKF rulman",
      "YILMAZ REDÜKTÖR",
      "GX-GLOBAL",
    ],
  },
  en: {
    homeTitle: "Industrial Supply and Global Logistics",
    homeDescription:
      "GX-GLOBAL is a trusted supply partner for industrial lubricants, adhesives, bearings, reducers and global logistics solutions.",
    productsTitle:
      "Industrial Products: Loctite, TEROSON, Molykote, SKF and Reducers",
    productsDescription:
      "Explore Loctite, TEROSON, Molykote, SPEEDOL, TESS-SAN, YILMAZ REDÜKTÖR and SKF products in the GX-GLOBAL catalogue.",
    keywords: [
      "industrial products",
      "industrial lubricants",
      "global logistics",
      "supply chain",
      "Loctite Azerbaijan",
      "TEROSON Azerbaijan",
      "Molykote Azerbaijan",
      "SKF bearings",
      "YILMAZ REDÜKTÖR",
      "GX-GLOBAL",
    ],
  },
  ru: {
    homeTitle: "Промышленное снабжение и глобальная логистика",
    homeDescription:
      "GX-GLOBAL — надежный партнер по поставкам промышленных масел, клеевых решений, подшипников, редукторов и логистических услуг.",
    productsTitle:
      "Промышленные товары: Loctite, TEROSON, Molykote, SKF и редукторы",
    productsDescription:
      "Ознакомьтесь с продукцией Loctite, TEROSON, Molykote, SPEEDOL, TESS-SAN, YILMAZ REDÜKTÖR и SKF в каталоге GX-GLOBAL.",
    keywords: [
      "промышленные товары",
      "промышленные масла",
      "логистика",
      "снабжение",
      "Loctite Азербайджан",
      "TEROSON Азербайджан",
      "Molykote Азербайджан",
      "подшипники SKF",
      "YILMAZ REDÜKTÖR",
      "GX-GLOBAL",
    ],
  },
};

export function getLocale(lang?: string): SupportedLocale {
  if (SUPPORTED_LOCALES.includes(lang as SupportedLocale)) {
    return lang as SupportedLocale;
  }

  return DEFAULT_LOCALE;
}

export function absoluteUrl(path = ""): string {
  if (!path) return SITE_URL;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

export function localizedPath(lang: SupportedLocale, path = ""): string {
  const normalizedPath = path
    ? path.startsWith("/")
      ? path
      : `/${path}`
    : "";

  return `/${lang}${normalizedPath}`;
}

export function canonicalUrl(lang: SupportedLocale, path = ""): string {
  return absoluteUrl(localizedPath(lang, path));
}

export function languageAlternates(path = ""): Record<string, string> {
  return {
    az: canonicalUrl("az", path),
    en: canonicalUrl("en", path),
    ru: canonicalUrl("ru", path),
    "x-default": canonicalUrl(DEFAULT_LOCALE, path),
  };
}

export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}