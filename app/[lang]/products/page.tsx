import type { Metadata } from "next";

import { getDictionary } from "@/lib/getDictionary";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductsClient from "./ProductsClient";
import { products } from "@/lib/productsData";
import {
  absoluteUrl,
  canonicalUrl,
  DEFAULT_OG_IMAGE,
  getLocale,
  jsonLd,
  languageAlternates,
  OG_LOCALE,
  SEO_CONTENT,
  SITE_NAME,
  SITE_URL,
  SUPPORTED_LOCALES,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = getLocale(rawLang);
  const seo = SEO_CONTENT[lang];

  return {
    title: seo.productsTitle,
    description: seo.productsDescription,
    keywords: [
      ...seo.keywords,
      "Loctite",
      "TEROSON",
      "Molykote",
      "SPEEDOL",
      "TESS-SAN",
      "SKF",
      "YILMAZ REDÜKTÖR",
      "industrial bearings",
      "industrial adhesives",
      "industrial lubricants",
    ],
    alternates: {
      canonical: canonicalUrl(lang, "/products"),
      languages: languageAlternates("/products"),
    },
    openGraph: {
      title: `${seo.productsTitle} | ${SITE_NAME}`,
      description: seo.productsDescription,
      url: canonicalUrl(lang, "/products"),
      siteName: SITE_NAME,
      locale: OG_LOCALE[lang],
      alternateLocale: SUPPORTED_LOCALES.filter((item) => item !== lang).map(
        (item) => OG_LOCALE[item]
      ),
      type: "website",
      images: [
        {
          url: absoluteUrl(DEFAULT_OG_IMAGE),
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} industrial product catalogue`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${seo.productsTitle} | ${SITE_NAME}`,
      description: seo.productsDescription,
      images: [absoluteUrl(DEFAULT_OG_IMAGE)],
    },
  };
}

export default async function ProductsPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = getLocale(rawLang);
  const dict = await getDictionary(lang);
  const seo = SEO_CONTENT[lang];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: canonicalUrl(lang),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: canonicalUrl(lang, "/products"),
      },
    ],
  };

  const catalogListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${canonicalUrl(lang, "/products")}#catalog`,
    name: seo.productsTitle,
    description: seo.productsDescription,
    url: canonicalUrl(lang, "/products"),
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `${canonicalUrl(lang, "/products")}#product-${product.id}`,
    })),
  };

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonicalUrl(lang, "/products")}#webpage`,
    url: canonicalUrl(lang, "/products"),
    name: `${seo.productsTitle} | ${SITE_NAME}`,
    description: seo.productsDescription,
    inLanguage: lang,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntity: {
      "@id": `${canonicalUrl(lang, "/products")}#catalog`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(catalogListJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(collectionPageJsonLd) }}
      />

      <Navigation dict={dict} currentLang={lang} />
      <main>
        <ProductsClient lang={lang} />
      </main>
      <Footer dict={dict} />
    </>
  );
}