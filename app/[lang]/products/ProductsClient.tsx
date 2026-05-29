"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';

// Məhsul açıqlamalarının tərcümələri
const descTranslations = {
  teroson: {
    az: 'TEROSON® markalı premium məhsul.',
    en: 'TEROSON® brand premium product.',
    ru: 'Премиальный продукт марки TEROSON®.'
  },
  loctite: {
    az: 'Sənaye üçün yapışdırıcı və sızdırmazlıq həlli.',
    en: 'Adhesive and sealing solution for industry.',
    ru: 'Клей и герметик для промышленности.'
  },
  molykote: {
    az: 'Molykote yüksək performanslı sürtkü yağları.',
    en: 'Molykote high-performance lubricants.',
    ru: 'Высокоэффективные смазочные материалы Molykote.'
  }
};

// UI Tərcümələri
const uiTranslations = {
  az: {
    heroTitle: 'Məhsullarımız',
    heroDesc: 'Sənaye standartlarına uyğun qabaqcıl texnologiya, innovativ həllər və premium məhsullarla tanış olun.',
    filters: 'Filtrlər',
    searchPlaceholder: 'Məhsul axtar...',
    brands: 'Brendlər',
    allProducts: 'Bütün Məhsullar',
    productsFound: 'məhsul tapıldı',
    sortNewest: 'Sıralama: Ən yenilər',
    sortAZ: 'A - Z',
    sortZA: 'Z - A',
    noProducts: 'Axtarışınıza uyğun məhsul tapılmadı.',
    tryAgain: 'Fərqli açar sözlər yazaraq və ya filtrləri təmizləyərək yenidən yoxlayın.'
  },
  en: {
    heroTitle: 'Our Products',
    heroDesc: 'Discover advanced technology, innovative solutions, and premium products meeting industry standards.',
    filters: 'Filters',
    searchPlaceholder: 'Search products...',
    brands: 'Brands',
    allProducts: 'All Products',
    productsFound: 'products found',
    sortNewest: 'Sort: Newest',
    sortAZ: 'A - Z',
    sortZA: 'Z - A',
    noProducts: 'No products found matching your search.',
    tryAgain: 'Try again with different keywords or clear the filters.'
  },
  ru: {
    heroTitle: 'Наши продукты',
    heroDesc: 'Откройте для себя передовые технологии, инновационные решения и премиальные продукты, соответствующие отраслевым стандартам.',
    filters: 'Фильтры',
    searchPlaceholder: 'Поиск продуктов...',
    brands: 'Бренды',
    allProducts: 'Все продукты',
    productsFound: 'продуктов найдено',
    sortNewest: 'Сортировка: Новые',
    sortAZ: 'А - Я',
    sortZA: 'Я - А',
    noProducts: 'По вашему запросу ничего не найдено.',
    tryAgain: 'Попробуйте использовать другие ключевые слова или очистите фильтры.'
  }
};

const products = [
  // TEROSON
  { id: 1, name: 'TEROSON® 150', category: 'TEROSON', image: '/Teroson_150_150ml_Can_267078_Front.webp', descKey: 'teroson' },
  { id: 2, name: 'TEROSON® WX 350', category: 'TEROSON', image: '/Teroson_WX_350_793958_cavity_sealing_1l_EMEA-1.webp', descKey: 'teroson' },
  { id: 3, name: 'TEROSON® MS 222', category: 'TEROSON', image: '/Teroson_MS_222_1823595_310ml_EMEA.webp', descKey: 'teroson' },
  { id: 4, name: 'TEROSON® MS 9320', category: 'TEROSON', image: '/Teroson_MS_9320_2024435_310ml_EMEA.webp', descKey: 'teroson' },
  { id: 5, name: 'TEROSON® VR 10', category: 'TEROSON', image: '/p0210541-henkel-teroson-vr-10-solvent-cleaner-1lt-bottle.png', descKey: 'teroson' },
  { id: 6, name: 'TEROSON® SB 3120', category: 'TEROSON', image: '/Teroson_SB_3120_803863_coating_spray_500ml_EMEA-1.webp', descKey: 'teroson' },
  { id: 7, name: 'TEROSON® PU 9100', category: 'TEROSON', image: '/Teroson_PU_9100_1896977_adhesive_310ml_EMEA-1.webp', descKey: 'teroson' },
  { id: 8, name: 'TEROSON® EP 5055', category: 'TEROSON', image: '/TEROSON-EP-5055_SbS_200ml.webp', descKey: 'teroson' },
  { id: 9, name: 'TEROSON® EP 5065', category: 'TEROSON', image: '/TEROSON-EP-5065_SbS_200ml.webp', descKey: 'teroson' },
  { id: 10, name: 'TEROSON® PU 6700', category: 'TEROSON', image: '/packshot-grp-teroson-pu-6700-11-2021.webp', descKey: 'teroson' },
  { id: 11, name: 'TEROSON® PU 8519 P', category: 'TEROSON', image: '/Teroson_PU_8519_P_1178000_primer_25ml_EMEA-1.webp', descKey: 'teroson' },
  { id: 12, name: 'TEROSON® SB S3000', category: 'TEROSON', image: '/Teroson_SB_S3000_767199_stonechip_protection_1l_EMEA-1.webp', descKey: 'teroson' },
  { id: 13, name: 'TEROSON® BT SP 100', category: 'TEROSON', image: '/Teroson_Bt_Sp_100_150012_Selbstklebende.webp', descKey: 'teroson' },
  { id: 14, name: 'TEROSON® PU 9500 FOAM', category: 'TEROSON', image: '/packshot_indv_Loctite_PU_9500_foam_2556870_400ml_09_2019-1.webp', descKey: 'teroson' },
  { id: 15, name: 'TEROSON® EP 5010 TR', category: 'TEROSON', image: '/TEROSON_EP-5010-TR_SbS_200ml.webp', descKey: 'teroson' },
  { id: 16, name: 'TEROSON® PU 9225 SF', category: 'TEROSON', image: '/Teroson_PU_9225SF_882088_sealant_50ml_EMEA-1.webp', descKey: 'teroson' },

  // Loctite
  { id: 17, name: 'Loctite SI 5331 Thread sealant for plastic/metal fittings 100ml tube', category: 'Loctite', image: '/loctite-si-5331-thread-sealant-low-strength-100ml-tube-01.webp', descKey: 'loctite' },
  { id: 18, name: 'Loctite PC 5070 Pipe Repair Kit for plastic/metall fittings 50mm, 1.8m', category: 'Loctite', image: '/loctite-pc-5070-pipe-repair-kit-50mmx180cm-inkl-ea-3463-metal-compound-50g-and-gloves-idh255861-ol.webp', descKey: 'loctite' },
  { id: 19, name: 'Loctite 55 Pipe Sealing Cord for plastic & metal pipe threads 160m', category: 'Loctite', image: '/loctite-55-gewindedichtfaden-160ml.webp', descKey: 'loctite' },
  { id: 20, name: 'Loctite 55 Pipe Sealing Cord for plastic & metal pipe threads 50m', category: 'Loctite', image: '/loctite-55-gewindedichtfaden-492004.webp', descKey: 'loctite' },
  { id: 21, name: 'Loctite 545 Thread sealant 50ml', category: 'Loctite', image: '/loctite-545-thread-sealant-50ml-01.webp', descKey: 'loctite' },
  { id: 22, name: 'Loctite 572 Pipe Thread Sealant for M80 coarse threads 250ml tube', category: 'Loctite', image: '/loctite-572-pipe-thread-sealant-medium-strength-white-250ml-tube-01.webp', descKey: 'loctite' },
  { id: 23, name: 'Loctite 576 Thread sealant medium viscosity brown 50ml bottle', category: 'Loctite', image: '/loctite-576-medium-viscosity-thread-sealant-brown-bottle-50ml-idh-234548-front-ol.webp', descKey: 'loctite' },
  { id: 24, name: 'Loctite 5776 Thread sealant for gas and water pipes 250ml tube', category: 'Loctite', image: '/loctite-5776-thread-sealant-gas-and-water-pipes-250ml-idh-1545064.webp', descKey: 'loctite' },
  { id: 25, name: 'Loctite 5772 PMUC approved Pipe Thread Sealant 50ml', category: 'Loctite', image: '/loctite-5772-medium-strength-thread-sealant-for-fittings-50ml-bottle.webp', descKey: 'loctite' },
  { id: 26, name: 'Loctite 221 Threadlocker for small screws low strength purple 250ml', category: 'Loctite', image: '/loctite-221-threadlocker-for-small-screws-low-strength-purple-250ml-01.webp', descKey: 'loctite' },
  { id: 27, name: 'Loctite 259 Threadlocker low strength purple 50ml', category: 'Loctite', image: '/loctite-259-threadlocker-low-stregth-purple-50-ml-idh-231678-front-ol.webp', descKey: 'loctite' },
  { id: 28, name: 'Loctite 225 Threadlocker medium viscosity low strength brown 250ml', category: 'Loctite', image: '/loctite-225-threadlocker-medium-viscosity-low-strength-250ml-01.jpg', descKey: 'loctite' },
  { id: 29, name: 'Loctite 222 Threadlocker low strength purple 250ml', category: 'Loctite', image: '/loctite-222-low-strength-threadlocking-adhesive-for-metal-threads-250ml.webp', descKey: 'loctite' },
  { id: 30, name: 'Loctite 932 Threadlocker for electronics low strength brown 50ml', category: 'Loctite', image: '/loctite-932-50ml-schraubensicherung.jpg', descKey: 'loctite' },
  { id: 31, name: 'Loctite 2701 Threadlocker for chromated screws high strength 1 l', category: 'Loctite', image: '/loctite-2701-threadlocker-for-chromated-screws-high-strength-1l-01.webp', descKey: 'loctite' },
  { id: 32, name: 'Loctite 262 Threadlocker thixotropic medium-to-high strength red 250ml', category: 'Loctite', image: '/loctite-262-threadlocker-thixotropic-high-strenght-adhesive-idh-88396-2722898-250ml-276g-bottle-front-ol.jpg', descKey: 'loctite' },

  // Molykote
  { id: 33, name: 'Molykote BG-20 Synthetic high performance bearing grease 50kg', category: 'Molykote', image: '/molykote-bg-20-grease-synthetic-high-performance-lubricating-grease-for-bearings-bucket-25kg.jpg', descKey: 'molykote' },
  { id: 34, name: 'Molykote HP-870 Fully fluorinated grease NLGI-2 1kg', category: 'Molykote', image: '/molykote-hp-870-grease-fuly-fluorinated-lubricating-grease-tin-1kg-4045303-ol.webp', descKey: 'molykote' },
  { id: 35, name: 'Molykote PG 54 Plastislip Silicone grease NLGI 2-3 white 25kg pail', category: 'Molykote', image: '/molykote-pg-54-plastislip-silicone-grease-nlgi-2-3-white-25kg-pail-001.jpg', descKey: 'molykote' },
  { id: 36, name: 'Molykote PG 21 High performance silicone grease NLGI-2 25 kg pail', category: 'Molykote', image: '/molykote-pg-21-high-performance-silicone-grease-nlgi-2-25-kg-pail-001.jpg', descKey: 'molykote' },
  { id: 37, name: 'Molykote Microsize Powder MoS2 Solid Lubricant 1 kg', category: 'Molykote', image: '/molykote-microsize-powder-mos2-solid-lubricant-1-kg-can.webp', descKey: 'molykote' },
  { id: 38, name: 'Molykote DX Paste Grease for assembly and long-term lubrication 50kg', category: 'Molykote', image: '/molykote-dx-paste-fettpaste-montagepaste-weiss-dauerschmierung-50kg-fass.jpg', descKey: 'molykote' },
  { id: 39, name: 'Molykote P-1500 White anti-fretting paste for metal components 25kg', category: 'Molykote', image: '/molykote-p-1500-white-anti-fretting-paste-for-metal-components-25kg-001.jpg', descKey: 'molykote' },
  { id: 40, name: 'Molykote P-1500 White anti-fretting paste for metal components 5kg', category: 'Molykote', image: '/molykote-p-1500-semi-synthetic-oil-based-assembly-paste-lithium-5kg.webp', descKey: 'molykote' },
  { id: 41, name: 'Molykote P-40 V1 Metal-free adhesive assembly paste on PAO-basis 5kg', category: 'Molykote', image: '/molykote-p-40-paste-metal-free-adhesive-lubricating-paste-dow-corning-pail-5kg-ol.webp', descKey: 'molykote' },
  { id: 42, name: 'Molykote P-74 Super Anti-Seize / Assembly paste PAO 500g can', category: 'Molykote', image: '/molykote-p-74-super-anti-seize-assembly-paste-pao-500g-can-001.jpg', descKey: 'molykote' },
  { id: 43, name: 'Molykote PG 21 High performance silicone grease NLGI-2 5 kg pail', category: 'Molykote', image: '/molykote-pg-21-high-performance-silicone-grease-nlgi-2-25-kg-pail-001.jpg', descKey: 'molykote' },
  { id: 44, name: 'Molykote Longterm W2 High performance grease NLGI-2 400g cartridge', category: 'Molykote', image: '/molykote-dx-paste-fettpaste-montagepaste-weiss-dauerschmierung-50kg-fass.jpg', descKey: 'molykote' },
  { id: 45, name: 'Molykote PG-75 Plastislip grease based on MO/PAO NLGI-2 1kg can', category: 'Molykote', image: '/molykote-p-74-super-anti-seize-assembly-paste-pao-500g-can-001.jpg', descKey: 'molykote' },
  { id: 46, name: 'Molykote BG-20 Synthetic high performance bearing grease 1kg can', category: 'Molykote', image: '/molykote-bg-20-grease-synthetic-high-performance-lubricating-grease-for-bearings-bucket-25kg.jpg', descKey: 'molykote' },
  { id: 47, name: 'Molykote BR-2 Plus High performance grease NLGI-2 black 1kg tin', category: 'Molykote', image: '/molykote-p-1500-semi-synthetic-oil-based-assembly-paste-lithium-5kg.webp', descKey: 'molykote' },
];

const brandCategories = ['TEROSON', 'Loctite', 'Molykote'];

export default function ProductsClient({ lang }: { lang: string }) {
  // Seçilmiş dili təyin edirik. Əgər dil tapılmazsa, azərbaycanca yüklənir.
  const currentLang = lang as keyof typeof uiTranslations;
  const t = uiTranslations[currentLang] || uiTranslations.az;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sortOption, setSortOption] = useState('NEWEST');

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery) {
      result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (selectedCategory !== 'ALL') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (sortOption === 'AZ') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'ZA') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === 'NEWEST') {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [searchQuery, selectedCategory, sortOption]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 pb-20">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-indigo-900 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
        <div className="relative max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            {t.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-blue-100">
            {t.heroDesc}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          {/* Sidebar / Filters */}
          <aside className="w-full lg:w-1/4 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                </svg>
                {t.filters}
              </h3>
              
              <div className="mb-6">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder={t.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                  />
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">{t.brands}</h4>
                <ul className="space-y-2">
                  {/* Bütün Məhsullar seçimi */}
                  <li>
                    <label className="flex items-center cursor-pointer group">
                      <input 
                        type="radio" 
                        name="category"
                        className="form-radio h-4 w-4 text-blue-600 rounded-full border-gray-300 focus:ring-blue-500 cursor-pointer" 
                        checked={selectedCategory === 'ALL'}
                        onChange={() => setSelectedCategory('ALL')}
                      />
                      <span className="ml-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {t.allProducts}
                      </span>
                    </label>
                  </li>

                  {/* Digər Brendlər */}
                  {brandCategories.map((category, index) => (
                    <li key={index}>
                      <label className="flex items-center cursor-pointer group">
                        <input 
                          type="radio" 
                          name="category"
                          className="form-radio h-4 w-4 text-blue-600 rounded-full border-gray-300 focus:ring-blue-500 cursor-pointer" 
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                        />
                        <span className="ml-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {category}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="w-full lg:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">{filteredAndSortedProducts.length}</span> {t.productsFound}
              </p>
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full sm:w-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 cursor-pointer"
              >
                <option value="NEWEST">{t.sortNewest}</option>
                <option value="AZ">{t.sortAZ}</option>
                <option value="ZA">{t.sortZA}</option>
              </select>
            </div>

            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <div key={product.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col">
                    
                    <div className="relative w-full h-56 sm:h-60 bg-gray-50 dark:bg-gray-700/50 p-4 flex items-center justify-center border-b border-gray-100 dark:border-gray-700">
                      <div className="relative w-full h-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500 ease-out"
                        />
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-2 tracking-wider uppercase">
                        {product.category}
                      </p>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 transition-colors" title={product.name}>
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-auto pt-2">
                        {descTranslations[product.descKey as keyof typeof descTranslations][currentLang]}
                      </p>
                    </div>
                    
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-16 border border-gray-100 dark:border-gray-700">
                <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">{t.noProducts}</p>
                <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">{t.tryAgain}</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}