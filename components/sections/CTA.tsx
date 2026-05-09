'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CTA({ dict }: { dict: any }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-emerald-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-emerald-950" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{dict.title}</h2>
          <p className="text-xl text-emerald-100 mb-10">{dict.subtitle}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button className="px-8 py-4 rounded-lg font-bold bg-white text-emerald-900 hover:bg-gray-100 shadow-xl transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {dict.btn_start}
            </motion.button>
            <motion.button className="px-8 py-4 rounded-lg font-bold border-2 border-emerald-400 text-emerald-50 hover:bg-emerald-800 transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {dict.btn_contact}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}