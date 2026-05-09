'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CTA({ dict }: { dict: any }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
      {/* Mavi/cyan qradiyent zümrüd/yaşıl ilə əvəzləndi */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-green-600/20" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-md text-white mb-6">{dict.title}</h2>
          <p className="text-xl text-gray-300 mb-10">{dict.subtitle}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {dict.btn_start}
            </motion.button>
            <motion.button className="btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {dict.btn_contact}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}