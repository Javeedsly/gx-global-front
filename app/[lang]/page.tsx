import { getDictionary } from '@/lib/getDictionary';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

// Dinamik Meta Data (Hər dilin öz linkini canonical olaraq təyin edirik)
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  
  const dict = await getDictionary(lang as "az" | "en" | "ru");
  const seoData = (dict as any).seo; 
  const baseUrl = 'https://gx-global.com';

  return {
    title: seoData?.title || 'GX-GLOBAL - Global Supply & Logistics Partner',
    description: seoData?.description || 'Your trusted partner for wholesale supplies, fast global delivery, and reliable logistics solutions.',
    alternates: {
      canonical: `${baseUrl}/${lang}`,
    }
  };
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const dict = await getDictionary(lang as "az" | "en" | "ru");

  return (
    <main className="min-h-screen">
      <Navigation dict={dict} currentLang={lang} />
      
      {/* SEO Qeydi: Hero komponentinin daxilində yalnız bir <h1> olduğundan əmin ol */}
      <Hero dict={dict} />
      <Features dict={dict} />
      <Services dict={dict} />
      <Testimonials dict={dict} />
      <CTA dict={dict} />
      
      <Contact dict={dict} />

      <Footer dict={dict} />
    </main>
  );
}