import { getDictionary, Locale } from '@/lib/getDictionary';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// params tipini Promise olaraq təyin etdik
export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  // params-ı await edirik
  const resolvedParams = await params;
  
  // İndi resolvedParams.lang istifadə edə bilərik
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation dict={dict.nav} currentLang={resolvedParams.lang} />
      <Hero dict={dict.hero} />
      <Features /> 
      <Services />
      <Testimonials />
      <CTA />
      <Footer dict={dict.footer} />
    </main>
  );
}