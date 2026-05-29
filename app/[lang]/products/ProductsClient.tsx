"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { products, brandCategories, uiTranslations, descTranslations } from '@/lib/productsData';

export default function ProductsClient({ lang }: { lang: string }) {
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