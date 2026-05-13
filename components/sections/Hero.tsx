'use client';
import { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; 

export default function Hero({ dict }: { dict: any }) {
  const sliderImages = [
    '/EAST_AZERI_-_panoramio.jpg',
    '/chuttersnap-BNBA1h-NgdY-unsplash-scaled.jpg',
    '/slide2.avif'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % sliderImages.length);
      }, 5000);
      return () => clearInterval(timer);
    }, 2000);
    
    return () => clearTimeout(startTimeout);
  }, [sliderImages.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  return (
    <section className="min-h-[100svh] pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden flex items-center">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-full md:w-1/2 h-[60%] md:h-full bg-emerald-50/70 dark:bg-emerald-900/10 -z-10 rounded-bl-[50px] md:rounded-bl-[100px]"
      />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            className="z-10 text-center lg:text-left mt-8 lg:mt-0"
            variants={containerVariants}
            initial={false} 
            animate="visible"
          >
            {/* SEO Qeydi: Səhifədəki yeganə H1 başlığı */}
            <motion.h1 variants={itemVariants} className="heading-lg mb-6 leading-tight font-bold text-emerald-950 dark:text-emerald-50">
              {dict.hero.title} <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-500 dark:from-emerald-400 dark:to-emerald-200 inline-block mt-2">
                {dict.subtitle}
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
              {dict.hero.desc}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start">
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="inline-block bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md shadow-emerald-900/20 text-center"
              >
                {dict.hero.btn_contact}
              </motion.a>
            </motion.div>

            <motion.div variants={containerVariants} className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
              {[
                { number: "10K+", label: dict.hero.stats.products },
                { number: "50+", label: dict.hero.stats.countries },
                { number: "24/7", label: dict.hero.stats.support }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants} 
                  whileHover={{ y: -5 }} 
                  className="group cursor-pointer"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-900 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={false} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full relative"
          >
            <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/20 dark:shadow-black/50 border border-emerald-100 dark:border-slate-800 bg-gray-100 dark:bg-slate-900">
              
              <AnimatePresence mode="wait" initial={false}>
                <motion.div 
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* SEO Qeydi: Açar sözlərlə zənginləşdirilmiş alt atributu */}
                  <Image 
                    src={sliderImages[currentImage]}
                    alt={`GX Global Logistics and Supply Chain Slide ${currentImage + 1}`}
                    fill
                    priority={currentImage === 0} 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-emerald-950/10 to-transparent pointer-events-none"></div>

              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                {sliderImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`h-2 p-2 mx-1 rounded-full transition-all duration-500 bg-clip-content ${
                      idx === currentImage 
                        ? 'w-8 bg-emerald-400' 
                        : 'w-2 bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl hidden md:block border border-emerald-50 dark:border-slate-700 z-30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <div className="font-bold text-emerald-950 dark:text-emerald-50">Premium Quality</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Global Standards</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}