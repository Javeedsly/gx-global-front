import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css"; 
import WhatsAppButton from "@/components/WhatsAppButton"; // Düyməni import edirik

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: 'GX-GLOBAL - Global Supply & Logistics Partner',
  description: 'Your trusted partner for wholesale supplies, fast global delivery, and reliable logistics solutions.',
  icons: {
    icon: '/gx_2.png',
  },
};

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
      <body className={`${inter.className} bg-slate-950 text-white relative`} suppressHydrationWarning>
        {children}
        
        {/* Bütün səhifələrdə görünəcək WhatsApp düyməsi */}
        <WhatsAppButton />
        
      </body>
    </html>
  );
}