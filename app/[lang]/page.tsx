import { getDictionary, Locale } from '@/lib/getDictionary';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// params tipini standart 'string' edirik ki, Next.js type error verməsin
export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  
  // Burada string-i Locale tipinə cast edirik ('az' | 'en' | 'ru')
  const lang = resolvedParams.lang as Locale;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation dict={dict.nav} currentLang={lang} />
      <Hero dict={dict.hero} />
      <Features dict={dict.features} /> 
      <Services dict={dict.services} />
      <Testimonials dict={dict.testimonials} />
      <CTA dict={dict.cta} />
      <Footer dict={dict.footer} />
    </main>
  );
}