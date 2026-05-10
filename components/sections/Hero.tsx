'use client';
import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

// Sənin öz lokal şəkillərin (public qovluğundakılar)
const sliderImages = [
  "/slide1.jpg", 
  "/slide2.avif"
];

export default function Hero({ dict }: { dict: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avtomatik slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  return (
    <section className="min-h-[100svh] pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden flex items-center">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-full md:w-1/2 h-[60%] md:h-full bg-emerald-50/70 -z-10 rounded-bl-[50px] md:rounded-bl-[100px]"
      />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            className="z-10 text-center lg:text-left mt-8 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="heading-lg mb-6">
              {dict.title} <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-500 inline-block mt-2">
                {dict.subtitle}
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
              {dict.desc}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary">
                {dict.btn_products}
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-secondary">
                {dict.btn_contact}
              </motion.button>
            </motion.div>

            <motion.div variants={containerVariants} className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 border-t border-gray-200 pt-8">
              {[
                { number: "10K+", label: dict.stats.products },
                { number: "50+", label: dict.stats.countries },
                { number: "24/7", label: dict.stats.support }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants} 
                  whileHover={{ y: -5 }} 
                  transition={{ type: "spring" }}
                  className="group cursor-pointer"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-900 group-hover:text-emerald-600 transition-colors duration-300">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1 font-medium group-hover:text-emerald-700 transition-colors duration-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="w-full relative">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/15 border border-emerald-100 bg-slate-100">
              
              {sliderImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`GX Global Slide ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex 
                      ? 'opacity-100 z-10' 
                      : 'opacity-0 z-0'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent z-20 pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {sliderImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'bg-emerald-500 w-8' : 'bg-white/70 w-2.5 hover:bg-white'
                    }`}
                    aria-label={`Slayda keç ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}