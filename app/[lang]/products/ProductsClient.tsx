"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { products, brandCategories, uiTranslations, descTranslations } from '@/lib/productsData';

export default function ProductsClient({ lang }: { lang: string }) {
  // Dil təyini
  const currentLang = lang as keyof typeof uiTranslations;
  const t = uiTranslations[currentLang] || uiTranslations.az;

  // State-lər
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sortOption, setSortOption] = useState('NEWEST');

  // Məhsulları tək zəncirdə həm filter, həm də sort edirik (Ultra qısa məntiq)
  const filteredProducts = useMemo(() => {
    return products
      .filter(p => 
        (selectedCategory === 'ALL' || p.category === selectedCategory) &&
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => 
        sortOption === 'AZ' ? a.name.localeCompare(b.name) : 
        sortOption === 'ZA' ? b.name.localeCompare(a.name) : 
        b.id - a.id // NEWEST
      );
  }, [searchQuery, selectedCategory, sortOption]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 pb-20">
      {/* Hero Section */}
      <div className="relative pt-24 text-center py-16 sm:py-20 px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/360_F_228089326_QInWWQoCLv83KPEvxHYbXWTg5NMwH6wX.jpg)' }}>
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        <h1 className="relative text-3xl sm:text-4xl font-extrabold text-white lg:text-6xl">{t.heroTitle}</h1>
        <p className="relative mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-blue-100">{t.heroDesc}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 flex flex-col lg:flex-row gap-8 lg:gap-10">
        
        {/* Sidebar / Filters */}
        <aside className="w-full lg:w-1/4 flex-shrink-0">
          <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 sticky top-24">
            <h3 className="text-lg font-semibold dark:text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
              {t.filters}
            </h3>
            
            {/* Axtarış */}
            <input 
              type="text" 
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full mb-6 px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            />

            {/* Kateqoriyalar */}
            <h4 className="text-sm font-medium dark:text-white mb-3">{t.brands}</h4>
            <ul className="space-y-2">
              {['ALL', ...brandCategories].map((cat) => (
                <li key={cat}>
                  <label className="flex items-center cursor-pointer group">
                    <input 
                      type="radio" 
                      className="form-radio h-4 w-4 text-blue-600 rounded-full border-gray-300 focus:ring-blue-500 cursor-pointer" 
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                    />
                    <span className="ml-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cat === 'ALL' ? t.allProducts : cat}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">{filteredProducts.length}</span> {t.productsFound}
            </p>
            
            {/* Sıralama */}
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full sm:w-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg focus:ring-blue-500 p-2.5 cursor-pointer"
            >
              {[
                { val: 'NEWEST', label: t.sortNewest },
                { val: 'AZ', label: t.sortAZ },
                { val: 'ZA', label: t.sortZA }
              ].map(opt => <option key={opt.val} value={opt.val}>{opt.label}</option>)}
            </select>
          </div>

          {/* Məhsullar Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => (
                <div key={p.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group">
                  <div className="relative w-full h-56 sm:h-60 bg-gray-50 dark:bg-gray-700/50 p-4 flex items-center justify-center border-b border-gray-100 dark:border-gray-700">
                    <Image src={p.image} alt={p.name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500 ease-out" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-2 tracking-wider uppercase">{p.category}</p>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 leading-snug">{p.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-auto pt-2">
                      {descTranslations[p.descKey as keyof typeof descTranslations][currentLang] || descTranslations[p.descKey as keyof typeof descTranslations].az}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-16 border border-gray-100 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">{t.noProducts}</p>
              <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">{t.tryAgain}</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}