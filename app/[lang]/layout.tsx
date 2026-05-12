import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css"; 
import WhatsAppButton from "@/components/WhatsAppButton";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getDictionary, Locale } from '@/lib/getDictionary';

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

type Props = {
  params: Promise<{ lang: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  
  const dict = await getDictionary(lang as Locale);
  
  // TypeScript xətasının qarşısını almaq üçün tərcüməni bu cür oxuyuruq
  const seoData = (dict as any).seo; 

  const baseUrl = 'https://gx-global.com';
  const defaultTitle = 'GX-GLOBAL - Global Supply & Logistics Partner';
  const defaultDesc = 'Your trusted partner for wholesale supplies, fast global delivery, and reliable logistics solutions.';

  return {
    title: seoData?.title || defaultTitle,
    description: seoData?.description || defaultDesc,
    icons: {
      icon: '/gx_2.png',
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
          url: '/gx_2.png',
          width: 800,
          height: 600,
          alt: 'GX-GLOBAL Logistics',
        },
      ],
      locale: lang,
      type: 'website',
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

  return (
    <html lang={lang} className={`${poppins.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300 relative`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}