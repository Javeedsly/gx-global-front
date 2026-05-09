'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Features({ dict }: { dict: any }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-md text-white mb-4">{dict.title}</h2>
          <p className="text-gray-400 text-lg">{dict.subtitle}</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {dict.items.map((feature: any, index: number) => (
            <motion.div key={index} className="card group" variants={itemVariants} whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)' }}>
              <motion.div className="text-4xl mb-4" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                {feature.icon}
              </motion.div>
              <h3 className="heading-sm text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
              <motion.div className="absolute inset-0 rounded-xl border border-emerald-500/0 group-hover:border-emerald-500/50" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}