import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css"; 

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: 'GX-GLOBAL - Global Supply & Logistics Partner',
  description: 'Your trusted partner for wholesale supplies, fast global delivery, and reliable logistics solutions.',
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
    <html lang={lang} className={`${poppins.variable}`}>
      <body className={`${inter.className} bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  );
}