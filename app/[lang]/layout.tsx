import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css"; 
import { ThemeProvider } from "@/components/ThemeProvider";
import { getDictionary, Locale } from '@/lib/getDictionary';
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script"; 

const inter = Inter({ subsets: ["latin"], display: 'swap' });
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
});

type Props = {
  params: Promise<{ lang: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  
  const dict = await getDictionary(lang as Locale);
  const seoData = (dict as any).seo; 

  const baseUrl = 'https://gx-global.com';
  const defaultTitle = 'GX-GLOBAL - Global Supply & Logistics Partner';
  const defaultDesc = 'Your trusted partner for wholesale supplies, fast global delivery, and reliable logistics solutions.';

  return {
    metadataBase: new URL(baseUrl),
    title: seoData?.title || defaultTitle,
    description: seoData?.description || defaultDesc,
    icons: {
      icon: '/gx_2.png',
      shortcut: '/gx_2.png',
      apple: '/gx_2.png',
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        'az': `${baseUrl}/az`,
        'en': `${baseUrl}/en`,
        'ru': `${baseUrl}/ru`,
        'x-default': `${baseUrl}/en`
      },
    },
    openGraph: {
      title: seoData?.title || defaultTitle,
      description: seoData?.description || defaultDesc,
      url: `${baseUrl}/${lang}`,
      siteName: 'GX-GLOBAL',
      images: [
        {
          url: `${baseUrl}/gx_2.png`, // Tam link istifadə edildi! (WhatsApp və s. üçün zəruridir)
          width: 800,
          height: 600,
          alt: 'GX-GLOBAL Logistics',
        },
      ],
      locale: lang,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData?.title || defaultTitle,
      description: seoData?.description || defaultDesc,
      images: [`${baseUrl}/gx_2.png`], // Twitter/X paylaşımları üçün
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: 'az' }, { lang: 'en' }, { lang: 'ru' }];
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>; 
}>) {
  const { lang } = await params;

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GX-GLOBAL",
    "url": "https://gx-global.com",
    "logo": "https://gx-global.com/gx_2.png",
    "description": "Global Supply & Logistics Partner",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": ["Azerbaijani", "English", "Russian"]
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GX-GLOBAL",
    "url": "https://gx-global.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://gx-global.com/en?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang={lang} className={`${poppins.variable}`} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </head>
      <body className={`${inter.className} bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300 relative`} suppressHydrationWarning>
        
        {/* Google Analytics - Mobil performansı yormamaq üçün lazyOnload edildi */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6HXV8DL3GG"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6HXV8DL3GG');
          `}
        </Script>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}