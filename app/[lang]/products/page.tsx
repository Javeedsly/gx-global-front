import { getDictionary } from '@/lib/getDictionary';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductsClient from './ProductsClient';
import { Metadata } from 'next';

const metaTranslations = {
  az: { title: 'Məhsullar | GX-GLOBAL', desc: 'GX-GLOBAL sənaye məhsulları və həlləri.' },
  en: { title: 'Products | GX-GLOBAL', desc: 'GX-GLOBAL industrial products and solutions.' },
  ru: { title: 'Продукты | GX-GLOBAL', desc: 'Промышленные продукты и решения GX-GLOBAL.' }
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  
  const currentLang = lang as keyof typeof metaTranslations;
  const t = metaTranslations[currentLang] || metaTranslations.az;

  return {
    title: t.title,
    description: t.desc,
    alternates: {
      canonical: `https://gx-global.com/${lang}/products`,
    }
  };
}

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang as "az" | "en" | "ru");

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Header (Navigation) */}
      <Navigation dict={dict} currentLang={lang} />
      
      {/* Əsas Məhsullar bölməsi (Dil parametri göndərilir) */}
      <ProductsClient lang={lang} />
      
      {/* Footer */}
      <Footer dict={dict} />
    </main>
  );
}