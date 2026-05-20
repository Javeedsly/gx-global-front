import { getDictionary } from '@/lib/getDictionary';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  return {
    title: 'GX-GLOBAL | Industrial Supplies & Lubricants',
    description: 'GX-GLOBAL offers high-quality industrial lubricants, adhesives, and specialized supply solutions.',
    alternates: {
      canonical: `https://gx-global.com/${lang}`,
    }
  };
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang as "az" | "en" | "ru");

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navigation dict={dict} currentLang={lang} />
      <Hero dict={dict} />
      <Features dict={dict} />
      <Services dict={dict} />
      <CTA dict={dict} />
      <Contact dict={dict} />
      <WhatsAppButton />
      <Footer dict={dict} />
    </main>
  );
}