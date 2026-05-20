import { getDictionary } from '@/lib/getDictionary';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Metadata } from 'next';

// SEO üçün dinamik Meta Data (www silindi!)
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  
  return {
    title: `Məhsullar | GX-GLOBAL`,
    description: 'OKS, Loctite və Molykote kimi dünya brendlərinin sənaye yağları, yapışdırıcıları və təchizat materialları.',
    alternates: {
      canonical: `https://gx-global.com/${lang}/products`,
    }
  };
}

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang as "az" | "en" | "ru");

  const categories = [
    {
      id: "oks-lubricants",
      name: "OKS Industrial Lubricants",
      description: "Sənaye üçün yüksək performanslı sürtkü yağları və xüsusi yağlayıcılar.",
      products: [
        { id: "oks-1", name: "OKS 478 Plastic and Elastomer Grease 400g", image: "/oks-478-plastic-and-elastomer-grease-400g-001.jpg" },
        { id: "oks-2", name: "OKS 1149 Long-lasting silicone grease with PTFE 25kg hobbock", image: "/oks-produkte.webp" },
        { id: "oks-3", name: "OKS 1149 Long-lasting silicone grease with PTFE 5kg hobbock", image: "/oks1149-5kg.webp" },
        { id: "oks-4", name: "OKS 1149 Long-lasting silicone grease with PTFE 500g tin", image: "/oks-1149-silicone-grease-with-ptfe-tin-500g-ol.webp" },
        { id: "oks-5", name: "OKS 1149 Long-lasting silicone grease with PTFE 400ml cartridge", image: "/oks-1149-long-lasting-silicone-grease-with-ptfe-400ml-cartridge-004.jpg" },
        { id: "oks-6", name: "OKS 1144 Universal silicone grease 25kg hobbock", image: "/oks-produkte (1).webp" },
        { id: "oks-7", name: "OKS 1144 Universal silicone grease 5kg hobbock", image: "/oks-1144-5kg.jpg" },
        { id: "oks-8", name: "OKS 1144 Universal silicone grease 500g tin", image: "/oks1144-500g.webp" },
        { id: "oks-9", name: "OKS 1110 Food grade multi-usage silicone grease colorless NLGI-3 25kg", image: "/oks-1110-food-grade-multi-usage-silicone-grease-colorless-nlgi-3-25kg-002.jpg" },
        { id: "oks-10", name: "OKS 1110 Food grade multi-usage silicone grease colorless NLGI-3 5kg", image: "/oks-1110-multi-silikonfett-lebensmittelecht-wasserfest-nlgi3-nsf-h1-5kg-004.webp" }
      ]
    },
    {
      id: "loctite-adhesives",
      name: "Loctite Industrial Adhesives & Sealing",
      description: "Sənaye yapışdırıcıları və kipgəcləyici (sealing) kompozitlər.",
      products: [
        { id: "loc-1", name: "Loctite Yiv Bərkidici", image: "/gx_2.png" },
        { id: "loc-2", name: "Loctite Sənaye Yapışdırıcısı", image: "/gx_2.png" },
        { id: "loc-3", name: "Loctite Silikon Kipgəcləyici", image: "/gx_2.png" },
        { id: "loc-4", name: "Loctite Epoksi Qətran", image: "/gx_2.png" }
      ]
    },
    {
      id: "molykote-lubricants",
      name: "Molykote (Dow Corning) Lubricants",
      description: "Ağır sənaye şərtləri üçün ixtisaslaşmış Molykote sürtkü materialları.",
      products: [
        { id: "mol-1", name: "Molykote Quru Yağlayıcı", image: "/gx_2.png" },
        { id: "mol-2", name: "Molykote Rulman Yağı", image: "/gx_2.png" },
        { id: "mol-3", name: "Molykote Sintetik Yağ", image: "/gx_2.png" }
      ]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navigation dict={dict} currentLang={lang} />
      
      <div className="flex-grow container mx-auto px-4 py-28 lg:py-36">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Sənaye Məhsullarımız
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Qlobal təchizat şəbəkəmiz üzrə təklif etdiyimiz yüksək keyfiyyətli sənaye yağları, yapışdırıcılar və xüsusi kompozitlər.
          </p>
        </div>
        
        <div className="space-y-20">
          {categories.map((category) => (
            <section key={category.id} className="scroll-mt-24" id={category.id}>
              
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">
                    {category.name}
                  </h2>
                  <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow ml-6"></div>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {category.products.map((product) => (
                  <article key={product.id} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300 group flex flex-col">
                    
                    <div className="relative aspect-square w-full bg-slate-100 dark:bg-slate-800/50 overflow-hidden flex items-center justify-center p-4">
                      <Image 
                        src={product.image} 
                        alt={`${product.name} - ${category.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-110 mix-blend-multiply dark:mix-blend-normal"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                    
                    <div className="p-5 text-center flex-grow flex items-center justify-center border-t border-slate-50 dark:border-slate-800/50">
                      <h3 className="text-sm md:text-base font-semibold text-slate-900 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                        {product.name}
                      </h3>
                    </div>
                    
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <Footer dict={dict} />
    </main>
  );
}