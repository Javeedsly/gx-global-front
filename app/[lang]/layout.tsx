import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  absoluteUrl,
  canonicalUrl,
  COMPANY_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  DEFAULT_OG_IMAGE,
  DISPLAY_PHONE,
  getLocale,
  jsonLd,
  languageAlternates,
  OG_LOCALE,
  SEO_CONTENT,
  SITE_NAME,
  SITE_URL,
  SUPPORTED_LOCALES,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
  colorScheme: "dark light",
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = getLocale(rawLang);
  const seo = SEO_CONTENT[lang];

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    title: {
      default: `${seo.homeTitle} | ${SITE_NAME}`,
      template: `%s | ${SITE_NAME}`,
    },
    description: seo.homeDescription,
    keywords: seo.keywords,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "business",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: "/gx_2.png",
      shortcut: "/gx_2.png",
      apple: "/gx_2.png",
    },
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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang: rawLang } = await params;
  const lang = getLocale(rawLang);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl(DEFAULT_OG_IMAGE),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    address: {
      "@type": "PostalAddress",
      ...COMPANY_ADDRESS,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: DISPLAY_PHONE,
      email: CONTACT_EMAIL,
      contactType: "customer support",
      availableLanguage: ["Azerbaijani", "English", "Russian"],
      areaServed: "AZ",
    },
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#local-business`,
    name: SITE_NAME,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    url: SITE_URL,
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      ...COMPANY_ADDRESS,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "Azerbaijan",
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: lang,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLd(organizationJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLd(localBusinessJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLd(websiteJsonLd) }}
          />

          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}