'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

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
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push(`/${currentLang}`)}
          >
            {/* Sənin loqon bura əlavə edildi */}
            <Image 
              src="/gx_2.png" 
              alt="GX Global Logo" 
              width={160} 
              height={45} 
              className="object-contain"
              priority
            />
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