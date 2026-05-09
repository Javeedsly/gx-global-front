'use client';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Features({ dict }: { dict: any }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="heading-md mb-4">{dict.title}</h2>
          <p className="text-gray-600 text-base md:text-lg font-medium px-4">{dict.subtitle}</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {dict.items.map((feature: any, index: number) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              whileHover={{ y: -10, scale: 1.02, boxShadow: '0 20px 40px rgba(6,78,59,0.08)' }}
              className="card group flex flex-col bg-white border border-emerald-900/5 shadow-sm rounded-2xl p-6 md:p-8 cursor-pointer transition-colors hover:border-emerald-500/20"
            >
              <motion.div 
                className="text-4xl mb-6 text-emerald-800 flex-shrink-0" 
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="heading-sm mb-3 group-hover:text-emerald-700 transition-colors">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}