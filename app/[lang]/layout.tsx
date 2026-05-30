import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import type { ReactNode } from "react";

import "../globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  absoluteUrl,
  canonicalUrl,
  DEFAULT_OG_IMAGE,
  getLocale,
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
  children: ReactNode;
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

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}