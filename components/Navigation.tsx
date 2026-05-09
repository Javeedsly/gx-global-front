'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

export default function Navigation({ dict, currentLang }: { dict: any, currentLang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: dict.home, href: '#home' },
    { label: dict.services, href: '#services' },
    { label: dict.features, href: '#features' },
  ];

  const switchLanguage = (locale: string) => {
    if (!pathname) return;
    const newPath = pathname.replace(`/${currentLang}`, `/${locale}`);
    router.push(newPath || `/${locale}`);
  };

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 glass-dark border-b border-blue-500/20 bg-slate-900/80 backdrop-blur-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center gap-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            GX-GLOBAL
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                {item.label}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="flex gap-2 text-sm border-l border-gray-600 pl-6 ml-2">
              {['az', 'en', 'ru'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => switchLanguage(lang)}
                  className={`uppercase font-semibold transition-colors ${currentLang === lang ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              {dict.contact}
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block py-2 text-gray-300 hover:text-blue-400">
                {item.label}
              </a>
            ))}
            <div className="flex gap-4 py-4 border-t border-gray-700 mt-2">
               {['az', 'en', 'ru'].map((lang) => (
                <button key={lang} onClick={() => switchLanguage(lang)} className={`uppercase font-semibold ${currentLang === lang ? 'text-blue-400' : 'text-gray-400'}`}>
                  {lang}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}