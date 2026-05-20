import { getDictionary } from '@/lib/getDictionary';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Metadata } from 'next';

// SEO üçün dinamik Meta Data
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

  // SİZİN VERDİYİNİZ KATEQORİYALAR VƏ MƏHSULLAR
  const categories = [
    {
      id: "oks-lubricants",
      name: "OKS Industrial Lubricants",
      description: "Sənaye üçün yüksək performanslı sürtkü yağları və xüsusi yağlayıcılar.",
      products: [
        { id: 1, name: "OKS Yüksək Temperatur Yağı", image: "/gx_2.png" },
        { id: 2, name: "OKS Sənaye Sürtküsü", image: "/gx_2.png" },
        { id: 3, name: "OKS Pas Əleyhinə Sprey", image: "/gx_2.png" },
        { id: 4, name: "OKS Çoxməqsədli Yağ", image: "/gx_2.png" }
      ]
    },
    {
      id: "loctite-adhesives",
      name: "Loctite Industrial Adhesives & Sealing",
      description: "Sənaye yapışdırıcıları və kipgəcləyici (sealing) kompozitlər.",
      products: [
        { id: 5, name: "Loctite Yiv Bərkidici", image: "/gx_2.png" },
        { id: 6, name: "Loctite Sənaye Yapışdırıcısı", image: "/gx_2.png" },
        { id: 7, name: "Loctite Silikon Kipgəcləyici", image: "/gx_2.png" },
        { id: 8, name: "Loctite Epoksi Qətran", image: "/gx_2.png" }
      ]
    },
    {
      id: "molykote-lubricants",
      name: "Molykote (Dow Corning) Lubricants",
      description: "Ağır sənaye şərtləri üçün ixtisaslaşmış Molykote sürtkü materialları.",
      products: [
        { id: 9, name: "Molykote Quru Yağlayıcı", image: "/gx_2.png" },
        { id: 10, name: "Molykote Rulman Yağı", image: "/gx_2.png" },
        { id: 11, name: "Molykote Sintetik Yağ", image: "/gx_2.png" }
      ]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navigation dict={dict} currentLang={lang} />
      
      {/* Səhifə Başlığı */}
      <div className="flex-grow container mx-auto px-4 py-28 lg:py-36">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Sənaye Məhsullarımız
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Qlobal təchizat şəbəkəmiz üzrə təklif etdiyimiz yüksək keyfiyyətli sənaye yağları, yapışdırıcılar və xüsusi kompozitlər.
          </p>
        </div>
        
        {/* Kateqoriyalar və Məhsullar */}
        <div className="space-y-20">
          {categories.map((category) => (
            <section key={category.id} className="scroll-mt-24" id={category.id}>
              
              {/* Kateqoriya Başlığı və Açıqlaması */}
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
              
              {/* Məhsullar Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {category.products.map((product) => (
                  <article key={product.id} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300 group flex flex-col">
                    
                    {/* Məhsul Şəkli (Hazırda hamısında gx_2.png-dir, sonradan fərqli şəkillər qoya bilərsiniz) */}
                    <div className="relative aspect-square w-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center p-4">
                      <Image 
                        src={product.image} 
                        alt={`${product.name} - ${category.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                    
                    {/* Məhsul Adı */}
                    <div className="p-5 text-center flex-grow flex items-center justify-center border-t border-slate-50 dark:border-slate-800/50">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
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