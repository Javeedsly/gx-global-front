import type { Metadata } from "next";
import { getDictionary } from "@/lib/getDictionary";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
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
    title: seo.homeTitle,
    description: seo.homeDescription,
    keywords: seo.keywords,
    alternates: {
      canonical: canonicalUrl(lang),
      languages: languageAlternates(),
    },
    openGraph: {
      title: `${seo.homeTitle} | ${SITE_NAME}`,
      description: seo.homeDescription,
      url: canonicalUrl(lang),
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
          alt: `${SITE_NAME} industrial supply and logistics`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${seo.homeTitle} | ${SITE_NAME}`,
      description: seo.homeDescription,
      images: [absoluteUrl(DEFAULT_OG_IMAGE)],
    },
  };
}

export default async function Home({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = getLocale(rawLang);
  const dict = await getDictionary(lang);

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
    ],
  };

  const homePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl(lang)}#webpage`,
    url: canonicalUrl(lang),
    name: `${SEO_CONTENT[lang].homeTitle} | ${SITE_NAME}`,
    description: SEO_CONTENT[lang].homeDescription,
    inLanguage: lang,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
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
        dangerouslySetInnerHTML={{ __html: jsonLd(homePageJsonLd) }}
      />

      <Navigation dict={dict} currentLang={lang} />

      <main>
        <Hero dict={dict} />
        <Services dict={dict} />
        <Features dict={dict} />
        <CTA dict={dict} />
        <Contact dict={dict} />
      </main>

      <Footer dict={dict} />
    </>
  );
}