'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CTA({ dict }: { dict: any }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-emerald-900 relative overflow-hidden flex justify-center items-center">
      {/* Animated Background */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-emerald-950 opacity-90" 
      />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{dict.title}</h2>
          <p className="text-lg md:text-xl text-emerald-100/90 mb-10 px-4 max-w-2xl mx-auto">{dict.subtitle}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.4)" }} 
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-white text-emerald-900 transition-all text-center" 
            >
              {dict.btn_start}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }} 
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold border-2 border-emerald-400 text-emerald-50 transition-colors text-center" 
            >
              {dict.btn_contact}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}