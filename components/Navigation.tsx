'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link'; // 1. Next.js Link əlavə edildi
import { ThemeToggle } from './ThemeToggle';

export default function Navigation({ dict, currentLang }: { dict: any, currentLang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // 2. Məhsullar linki əlavə edildi və digər linklər dinamikləşdirildi
  const navItems = [
    { label: dict.nav.home, href: `/${currentLang}#home` },
    { label: dict.nav.services, href: `/${currentLang}#services` },
    { label: dict.nav.features, href: `/${currentLang}#features` },
    { label: dict.nav.products || "Məhsullar", href: `/${currentLang}/products` }, // YENİ SƏHİFƏ
  ];

  const switchLanguage = (locale: string) => {
    if (!pathname) return;
    const newPath = pathname.replace(`/${currentLang}`, `/${locale}`);
    router.push(newPath || `/${locale}`);
    setIsOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 glass-dark bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <motion.div
            className="flex items-center cursor-pointer p-2"
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              if (pathname === `/${currentLang}` || pathname === `/${currentLang}/` || pathname === '/') {
                handleScrollToTop();
              } else {
                router.push(`/${currentLang}`);
              }
              setIsOpen(false);
            }}
          >
            <Image 
              src="/gx_2.png" 
              alt="GX Global Logo" 
              width={150} 
              height={40} 
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                onClick={(e) => {
                  if (item.href === `/${currentLang}#home` && (pathname === `/${currentLang}` || pathname === `/${currentLang}/`)) {
                    e.preventDefault();
                    handleScrollToTop();
                  }
                }}
                className={`font-medium transition-colors ${
                  pathname.includes(item.href) 
                    ? "text-emerald-600 dark:text-emerald-400" 
                    : "text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <ThemeToggle />

            <div className="flex gap-3 text-sm border-l border-gray-300 dark:border-gray-700 pl-6 ml-2">
              {['az', 'en', 'ru'].map((lang) => (
                <button
                  key={lang}
                  aria-label={`Dili dəyiş: ${lang}`}
                  onClick={() => switchLanguage(lang)}
                  className={`uppercase font-bold transition-colors ${currentLang === lang ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-300'}`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Contact düyməsi üçün href yeniləndi */}
            <motion.a 
              href={`/${currentLang}#contact`}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors shadow-md shadow-emerald-900/20 inline-block text-center cursor-pointer"
            >
              {dict.nav.contact}
            </motion.a>
          </div>

          {/* Mobile Hamburger Button */}
          <button className="md:hidden text-emerald-900 dark:text-emerald-400 p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  onClick={(e) => {
                    if (item.href === `/${currentLang}#home` && (pathname === `/${currentLang}` || pathname === `/${currentLang}/`)) {
                      e.preventDefault();
                      handleScrollToTop();
                    }
                    setIsOpen(false);
                  }}
                  className={`block py-3 px-4 font-medium rounded-lg transition-colors ${
                    pathname.includes(item.href)
                      ? "bg-emerald-50 text-emerald-800 dark:bg-slate-800 dark:text-emerald-400"
                      : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 dark:text-gray-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <Link
                href={`/${currentLang}#contact`}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-emerald-900 bg-emerald-50 hover:bg-emerald-100 dark:text-emerald-100 dark:bg-emerald-900/30 dark:hover:bg-emerald-900/50 font-bold rounded-lg text-center mt-2 border border-emerald-100 dark:border-emerald-900/50 transition-colors"
              >
                {dict.nav.contact}
              </Link>

              <div className="flex items-center gap-4 py-4 px-4 border-t border-gray-100 dark:border-gray-800 mt-4 justify-center">
                <ThemeToggle />
                 {['az', 'en', 'ru'].map((lang) => (
                  <button 
                    key={lang}
                    aria-label={`Dili dəyiş: ${lang}`}
                    onClick={() => switchLanguage(lang)} 
                    className={`uppercase font-bold px-4 py-2 rounded-md transition-colors ${currentLang === lang ? 'bg-emerald-50 text-emerald-800 dark:bg-slate-800 dark:text-emerald-400' : 'text-gray-500 dark:text-gray-400'}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}