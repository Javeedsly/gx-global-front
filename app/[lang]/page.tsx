import { getDictionary } from '@/lib/getDictionary';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

// params parametrini Promise olaraq təyin edirik
export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  
  // Next.js 15+ üçün params-ı await ilə açırıq
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  // Mövcud lüğəti yükləyirik
  const dict = await getDictionary(lang as "az" | "en" | "ru");

  return (
    <main className="min-h-screen">
      <Navigation dict={dict} currentLang={lang} />
      
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