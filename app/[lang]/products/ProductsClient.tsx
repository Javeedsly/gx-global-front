"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Anchor,
  Atom,
  Car,
  Construction,
  Factory,
  FileStack,
  FlaskConical,
  Fuel,
  GlassWater,
  Hammer,
  Mountain,
  Tractor,
  UtensilsCrossed,
  Warehouse,
  Waves,
  type LucideIcon,
} from "lucide-react";

import {
  brandCategories,
  descTranslations,
  kluberIndustries,
  products,
  uiTranslations,
} from "@/lib/productsData";

const KLUBER_ICONS: Record<string, LucideIcon> = {
  Tractor,
  Car,
  Factory,
  FlaskConical,
  UtensilsCrossed,
  GlassWater,
  Atom,
  Waves,
  Warehouse,
  Anchor,
  Hammer,
  Mountain,
  Fuel,
  Construction,
  FileStack,
};

type UiLanguage = keyof typeof uiTranslations;
type SortOption = "NEWEST" | "AZ" | "ZA";

function getCurrentLang(lang: string): UiLanguage {
  return lang in uiTranslations ? (lang as UiLanguage) : "az";
}

export default function ProductsClient({ lang }: { lang: string }) {
  const currentLang = getCurrentLang(lang);
  const t = uiTranslations[currentLang];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [sortOption, setSortOption] = useState<SortOption>("NEWEST");

  const isKluberView = selectedCategory === "Klüber Lubrication";

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return products
      .filter((product) => {
        const matchesCategory =
          selectedCategory === "ALL" || product.category === selectedCategory;

        const matchesSearch = product.name
          .toLowerCase()
          .includes(normalizedSearch);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortOption === "AZ") {
          return a.name.localeCompare(b.name);
        }

        if (sortOption === "ZA") {
          return b.name.localeCompare(a.name);
        }

        return b.id - a.id;
      });
  }, [searchQuery, selectedCategory, sortOption]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 pb-20">
      <div
        className="relative pt-24 text-center py-16 sm:py-20 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(/360_F_228089326_QInWWQoCLv83KPEvxHYbXWTg5NMwH6wX.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />

        <h1 className="relative text-3xl sm:text-4xl font-extrabold text-white lg:text-6xl">
          {t.heroTitle}
        </h1>

        <p className="relative mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-blue-100">
          {t.heroDesc}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 flex flex-col lg:flex-row gap-8 lg:gap-10">
        <aside className="w-full lg:w-1/4 flex-shrink-0">
          <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 sticky top-24">
            <h2 className="text-lg font-semibold dark:text-white mb-4 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              {t.filters}
            </h2>

            <label className="sr-only" htmlFor="product-search">
              {t.searchPlaceholder}
            </label>
            <input
              id="product-search"
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full mb-6 px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            />

            <h3 className="text-sm font-medium dark:text-white mb-3">
              {t.brands}
            </h3>

            <ul className="space-y-2">
              {["ALL", ...brandCategories].map((category) => (
                <li key={category}>
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="product-category"
                      className="form-radio h-4 w-4 text-blue-600 rounded-full border-gray-300 focus:ring-blue-500 cursor-pointer"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                    />
                    <span className="ml-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category === "ALL" ? t.allProducts : category}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="w-full lg:w-3/4" aria-label={t.heroTitle}>
          {isKluberView ? (
            <div>
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {t.kluberIndustriesTitle}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
                  {t.kluberIndustriesDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {kluberIndustries.map((industry) => {
                  const IconComponent = KLUBER_ICONS[industry.icon];
                  const label =
                    industry.names[currentLang] || industry.names.az;

                  return (
                    <article
                      key={industry.key}
                      className="group relative overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default"
                    >
                      <div className="relative h-72 sm:h-80 lg:h-96 w-full bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-900 overflow-hidden">
                        {industry.image ? (
                          <Image
                            src={industry.image}
                            alt={label}
                            fill
                            quality={90}
                            sizes="(max-width: 640px) 100vw, 50vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                        ) : IconComponent ? (
                          <div className="w-full h-full flex items-center justify-center">
                            <IconComponent
                              className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-400"
                              strokeWidth={1.5}
                            />
                          </div>
                        ) : null}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                        <h3 className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-lg sm:text-xl font-bold text-white leading-snug">
                          {label}
                        </h3>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {filteredProducts.length}
                  </span>{" "}
                  {t.productsFound}
                </p>

                <label className="sr-only" htmlFor="product-sort">
                  {t.sortNewest}
                </label>
                <select
                  id="product-sort"
                  value={sortOption}
                  onChange={(event) =>
                    setSortOption(event.target.value as SortOption)
                  }
                  className="w-full sm:w-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg focus:ring-blue-500 p-2.5 cursor-pointer"
                >
                  {[
                    { val: "NEWEST", label: t.sortNewest },
                    { val: "AZ", label: t.sortAZ },
                    { val: "ZA", label: t.sortZA },
                  ].map((option) => (
                    <option key={option.val} value={option.val}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => {
                    const descriptionGroup =
                      descTranslations[
                        product.descKey as keyof typeof descTranslations
                      ];

                    const description =
                      descriptionGroup?.[currentLang] ||
                      descriptionGroup?.az ||
                      product.name;

                    return (
                      <article
                        key={product.id}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group"
                      >
                        <div className="relative w-full h-56 sm:h-60 bg-gray-50 dark:bg-gray-700/50 p-4 flex items-center justify-center border-b border-gray-100 dark:border-gray-700">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 100vw, 33vw"
                            className="object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500 ease-out"
                          />
                        </div>

                        <div className="p-5 flex flex-col flex-grow">
                          <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-2 tracking-wider uppercase">
                            {product.category}
                          </p>

                          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                            {product.name}
                          </h3>

                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-auto pt-2">
                            {description}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-16 border border-gray-100 dark:border-gray-700">
                  <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                    {t.noProducts}
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">
                    {t.tryAgain}
                  </p>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
}