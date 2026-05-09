'use client';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Services({ dict }: { dict: any }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
  };

  const images = [
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop',
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <h2 className="heading-md mb-4">{dict.title}</h2>
          <p className="text-gray-600 text-base md:text-lg font-medium px-4">{dict.subtitle}</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {dict.items.map((category: any, index: number) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              whileHover={{ y: -10 }}
              className="relative h-72 md:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-lg shadow-gray-200/50"
            >
              <img 
                src={images[index]} 
                alt={category.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end relative z-10">
                <motion.h3 
                  className="text-lg md:text-xl font-bold text-white mb-2"
                  initial={{ y: 15, opacity: 0.9 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  {category.title}
                </motion.h3>
                <div className="h-1 w-12 bg-emerald-500 rounded mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}