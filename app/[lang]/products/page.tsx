import { getDictionary } from '@/lib/getDictionary';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  return { 
    title: `Məhsullar | GX-GLOBAL`, 
    alternates: { canonical: `https://gx-global.com/${lang}/products` } 
  };
}

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang as "az" | "en" | "ru");

  const categories = [
    {
      id: "teroson-products",
      name: dict.productsPage?.categories?.oks?.name || "TEROSON® Products",
      description: dict.productsPage?.categories?.oks?.desc || "Avtomobil və sənaye üçün yapışdırıcı, kipgəcləyici və qoruyucu məhsullar.",
      products: [
        { id: "ter-1", name: "TEROSON® 150", image: "/Teroson_150_150ml_Can_267078_Front.webp" },
        { id: "ter-2", name: "TEROSON® WX 350", image: "/Teroson_WX_350_793958_cavity_sealing_1l_EMEA-1.webp" },
        { id: "ter-3", name: "TEROSON® MS 222", image: "/Teroson_MS_222_1823595_310ml_EMEA.webp" },
        { id: "ter-4", name: "TEROSON® MS 9320", image: "/Teroson_MS_9320_2024435_310ml_EMEA.webp" },
        { id: "ter-5", name: "TEROSON® VR 10", image: "/p0210541-henkel-teroson-vr-10-solvent-cleaner-1lt-bottle.png" },
        { id: "ter-6", name: "TEROSON® SB 3120", image: "/Teroson_SB_3120_803863_coating_spray_500ml_EMEA-1.webp" },
        { id: "ter-7", name: "TEROSON® PU 9100", image: "/Teroson_PU_9100_1896977_adhesive_310ml_EMEA-1.webp" },
        { id: "ter-8", name: "TEROSON® EP 5055", image: "/TEROSON-EP-5055_SbS_200ml.webp" },
        { id: "ter-9", name: "TEROSON® EP 5065", image: "/TEROSON-EP-5065_SbS_200ml.webp" },
        { id: "ter-10", name: "TEROSON® PU 6700", image: "/packshot-grp-teroson-pu-6700-11-2021.webp" },
        { id: "ter-11", name: "TEROSON® PU 8519 P", image: "/Teroson_PU_8519_P_1178000_primer_25ml_EMEA-1.webp" },
        { id: "ter-12", name: "TEROSON® SB S3000", image: "/Teroson_SB_S3000_767199_stonechip_protection_1l_EMEA-1.webp" },
        { id: "ter-13", name: "TEROSON® BT SP 100", image: "/Teroson_Bt_Sp_100_150012_Selbstklebende.webp" },
        { id: "ter-14", name: "TEROSON® PU 9500 FOAM", image: "/packshot_indv_Loctite_PU_9500_foam_2556870_400ml_09_2019-1.webp" },
        { id: "ter-15", name: "TEROSON® EP 5010 TR", image: "/TEROSON_EP-5010-TR_SbS_200ml.webp" },
        { id: "ter-16", name: "TEROSON® PU 9225 SF", image: "/Teroson_PU_9225SF_882088_sealant_50ml_EMEA-1.webp" }
      ]
    },
    {
      id: "loctite-adhesives",
      name: dict.productsPage?.categories?.loctite?.name || "Loctite Industrial Adhesives & Sealing",
      description: dict.productsPage?.categories?.loctite?.desc || "Sənaye yapışdırıcıları və kipgəcləyici (sealing) kompozitlər.",
      products: [
        { id: "loc-1", name: "Loctite SI 5331 Thread sealant for plastic/metal fittings 100ml tube", image: "/loctite-si-5331-thread-sealant-low-strength-100ml-tube-01.webp" },
        { id: "loc-2", name: "Loctite PC 5070 Pipe Repair Kit for plastic/metall fittings 50mm, 1.8m", image: "/loctite-pc-5070-pipe-repair-kit-50mmx180cm-inkl-ea-3463-metal-compound-50g-and-gloves-idh255861-ol.webp" },
        { id: "loc-3", name: "Loctite 55 Pipe Sealing Cord for plastic & metal pipe threads 160m", image: "/loctite-55-gewindedichtfaden-160ml.webp" },
        { id: "loc-4", name: "Loctite 55 Pipe Sealing Cord for plastic & metal pipe threads 50m", image: "/loctite-55-gewindedichtfaden-492004.webp" },
        { id: "loc-5", name: "Loctite 545 Thread sealant 50ml", image: "/loctite-545-thread-sealant-50ml-01.webp" },
        { id: "loc-6", name: "Loctite 572 Pipe Thread Sealant for M80 coarse threads 250ml tube", image: "/loctite-572-pipe-thread-sealant-medium-strength-white-250ml-tube-01.webp" },
        { id: "loc-7", name: "Loctite 576 Thread sealant medium viscosity brown 50ml bottle", image: "/loctite-576-medium-viscosity-thread-sealant-brown-bottle-50ml-idh-234548-front-ol.webp" },
        { id: "loc-8", name: "Loctite 5776 Thread sealant for gas and water pipes 250ml tube", image: "/loctite-5776-thread-sealant-gas-and-water-pipes-250ml-idh-1545064.webp" },
        { id: "loc-9", name: "Loctite 5772 PMUC approved Pipe Thread Sealant 50ml", image: "/loctite-5772-medium-strength-thread-sealant-for-fittings-50ml-bottle.webp" },
        { id: "loc-10", name: "Loctite 221 Threadlocker for small screws low strength purple 250ml", image: "/loctite-221-threadlocker-for-small-screws-low-strength-purple-250ml-01.webp" },
        { id: "loc-11", name: "Loctite 259 Threadlocker low strength purple 50ml", image: "/loctite-259-threadlocker-low-stregth-purple-50-ml-idh-231678-front-ol.webp" },
        { id: "loc-13", name: "Loctite 225 Threadlocker medium viscosity low strength brown 250ml", image: "/loctite-225-threadlocker-medium-viscosity-low-strength-250ml-01.jpg" },
        { id: "loc-15", name: "Loctite 222 Threadlocker low strength purple 250ml", image: "/loctite-222-low-strength-threadlocking-adhesive-for-metal-threads-250ml.webp" },
        { id: "loc-16", name: "Loctite 932 Threadlocker for electronics low strength brown 50ml", image: "/loctite-932-50ml-schraubensicherung.jpg" },
        { id: "loc-17", name: "Loctite 2701 Threadlocker for chromated screws high strength 1 l", image: "/loctite-2701-threadlocker-for-chromated-screws-high-strength-1l-01.webp" },
        { id: "loc-18", name: "Loctite 262 Threadlocker thixotropic medium-to-high strength red 250ml", image: "/loctite-262-threadlocker-thixotropic-high-strenght-adhesive-idh-88396-2722898-250ml-276g-bottle-front-ol.jpg" }
      ]
    },
    {
      id: "molykote-lubricants",
      name: dict.productsPage?.categories?.molykote?.name || "Molykote (Dow Corning) Lubricants",
      description: dict.productsPage?.categories?.molykote?.desc || "Ağır sənaye şərtləri üçün ixtisaslaşmış Molykote sürtkü materialları.",
      products: [
        { id: "mol-1", name: "Molykote BG-20 Synthetic high performance bearing grease 50kg", image: "/molykote-bg-20-grease-synthetic-high-performance-lubricating-grease-for-bearings-bucket-25kg.jpg" },
        { id: "mol-2", name: "Molykote HP-870 Fully fluorinated grease NLGI-2 1kg", image: "/molykote-hp-870-grease-fuly-fluorinated-lubricating-grease-tin-1kg-4045303-ol.webp" },
        { id: "mol-3", name: "Molykote PG 54 Plastislip Silicone grease NLGI 2-3 white 25kg pail", image: "/molykote-pg-54-plastislip-silicone-grease-nlgi-2-3-white-25kg-pail-001.jpg" },
        { id: "mol-4", name: "Molykote PG 21 High performance silicone grease NLGI-2 25 kg pail", image: "/molykote-pg-21-high-performance-silicone-grease-nlgi-2-25-kg-pail-001.jpg" },
        { id: "mol-5", name: "Molykote Microsize Powder MoS2 Solid Lubricant 1 kg", image: "/molykote-microsize-powder-mos2-solid-lubricant-1-kg-can.webp" },
        { id: "mol-6", name: "Molykote DX Paste Grease for assembly and long-term lubrication 50kg", image: "/molykote-dx-paste-fettpaste-montagepaste-weiss-dauerschmierung-50kg-fass.jpg" },
        { id: "mol-7", name: "Molykote P-1500 White anti-fretting paste for metal components 25kg", image: "/molykote-p-1500-white-anti-fretting-paste-for-metal-components-25kg-001.jpg" },
        { id: "mol-8", name: "Molykote P-1500 White anti-fretting paste for metal components 5kg", image: "/molykote-p-1500-semi-synthetic-oil-based-assembly-paste-lithium-5kg.webp" },
        { id: "mol-9", name: "Molykote P-40 V1 Metal-free adhesive assembly paste on PAO-basis 5kg", image: "/molykote-p-40-paste-metal-free-adhesive-lubricating-paste-dow-corning-pail-5kg-ol.webp" },
        { id: "mol-10", name: "Molykote P-74 Super Anti-Seize / Assembly paste PAO 500g can", image: "/molykote-p-74-super-anti-seize-assembly-paste-pao-500g-can-001.jpg" },
        { id: "mol-11", name: "Molykote HP-870 Fully fluorinated grease NLGI-2 1kg", image: "/molykote-hp-870-grease-fuly-fluorinated-lubricating-grease-tin-1kg-4045303-ol.webp" },
        { id: "mol-12", name: "Molykote PG 21 High performance silicone grease NLGI-2 5 kg pail", image: "/molykote-pg-21-high-performance-silicone-grease-nlgi-2-25-kg-pail-001.jpg" },
        { id: "mol-13", name: "Molykote Longterm W2 High performance grease NLGI-2 400g cartridge", image: "/molykote-dx-paste-fettpaste-montagepaste-weiss-dauerschmierung-50kg-fass.jpg" },
        { id: "mol-14", name: "Molykote PG-75 Plastislip grease based on MO/PAO NLGI-2 1kg can", image: "/molykote-p-74-super-anti-seize-assembly-paste-pao-500g-can-001.jpg" },
        { id: "mol-15", name: "Molykote BG-20 Synthetic high performance bearing grease 1kg can", image: "/molykote-bg-20-grease-synthetic-high-performance-lubricating-grease-for-bearings-bucket-25kg.jpg" },
        { id: "mol-16", name: "Molykote BR-2 Plus High performance grease NLGI-2 black 1kg tin", image: "/molykote-p-1500-semi-synthetic-oil-based-assembly-paste-lithium-5kg.webp" }
      ]
    },
    {
      id: "arcanol-lubricants",
      name: dict.productsPage?.categories?.arcanol?.name || "Arcanol Industrial Lubricants",
      description: dict.productsPage?.categories?.arcanol?.desc || "Arcanol yüksək performanslı sürtkü materialları və xüsusi yağlar.",
      products: [
        { id: "arc-1", name: "ARCANOL MULTITOP Bearing grease 5kg", image: "/0016A49E_d.png" },
        { id: "arc-2", name: "ARCANOL TEMP90 Bearing grease 1kg", image: "/0016A853_d.png" }
      ]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navigation dict={dict} currentLang={lang} />
      <div className="flex-grow container mx-auto px-4 py-24 md:py-32">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {dict.productsPage?.title || "Sənaye Məhsullarımız"}
          </h1>
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
            {dict.productsPage?.subtitle || "Qlobal təchizat şəbəkəmiz üzrə təklif etdiyimiz yüksək keyfiyyətli sənaye yağları, yapışdırıcılar və xüsusi kompozitlər."}
          </p>
        </div>
        
        <div className="space-y-16 md:space-y-24">
          {categories.map((category) => (
            <section key={category.id} className="scroll-mt-24" id={category.id}>
              <div className="mb-8 px-2">
                <h2 className="text-xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">{category.name}</h2>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">{category.description}</p>
                <div className="h-px bg-slate-200 dark:bg-slate-800 mt-4"></div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                {category.products.map((product) => (
                  <article key={product.id} className="bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300 flex flex-col">
                    <div className="relative aspect-square w-full bg-slate-50 dark:bg-slate-950 overflow-hidden flex items-center justify-center p-3 md:p-6">
                      <Image 
                        src={product.image} 
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105 mix-blend-multiply dark:mix-blend-normal"
                      />
                    </div>
                    <div className="p-3 md:p-4 text-center flex-grow flex items-center justify-center border-t border-slate-100 dark:border-slate-800">
                      <h3 className="text-[10px] md:text-sm font-medium text-slate-800 dark:text-slate-200 leading-tight">
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