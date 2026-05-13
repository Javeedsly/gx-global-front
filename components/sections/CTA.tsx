'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CTA({ dict }: { dict: any }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-emerald-900 dark:bg-emerald-950 transition-colors duration-300 relative overflow-hidden flex justify-center items-center">
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-emerald-950 dark:from-slate-900 dark:to-slate-950 opacity-90" 
      />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          {/* Bura dəyişdirildi */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{dict.cta.title}</h2>
          <p className="text-lg md:text-xl text-emerald-100/90 mb-12 px-4 max-w-2xl mx-auto">{dict.cta.subtitle}</p>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center items-center w-full max-w-2xl mx-auto">
            
            <motion.a 
              href="tel:+994508041911"
              whileHover={{ scale: 1.05, y: -5 }} 
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 w-full sm:w-auto px-8 py-5 rounded-2xl font-bold bg-white dark:bg-slate-800 text-emerald-900 dark:text-emerald-400 shadow-[0_0_30px_rgba(255,255,255,0.2)] dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all text-center text-lg md:text-xl" 
            >
              📞 (+994 50) 804 19 11
            </motion.a>

            <motion.a 
              href="mailto:info@gx-global.com"
              whileHover={{ scale: 1.05, y: -5 }} 
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 w-full sm:w-auto px-8 py-5 rounded-2xl font-bold border-2 border-emerald-400 text-emerald-50 hover:bg-emerald-800/50 dark:hover:bg-slate-800 transition-all text-center text-lg md:text-xl" 
            >
              ✉️ info@gx-global.com
            </motion.a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}