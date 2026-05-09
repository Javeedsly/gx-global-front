'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Testimonials({ dict }: { dict: any }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-md mb-4">{dict.title}</h2>
          <p className="text-gray-600 text-base md:text-lg font-medium px-4">{dict.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {dict.items.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-emerald-900/5 relative flex flex-col h-full"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 70 }}
              whileHover={{ y: -8, scale: 1.02, boxShadow: '0 15px 35px rgba(6,78,59,0.08)' }}
            >
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }} 
                transition={{ repeat: Infinity, duration: 3, delay: index }}
                className="text-6xl text-emerald-800/10 absolute top-2 right-6 font-serif select-none"
              >
                "
              </motion.div>
              <p className="text-gray-700 mb-6 italic relative z-10 leading-relaxed flex-grow text-sm md:text-base">{testimonial.content}</p>
              <div className="mt-auto relative z-10">
                <div className="font-bold text-emerald-950">{testimonial.author}</div>
                <div className="text-xs md:text-sm font-semibold text-emerald-600">{testimonial.role}</div>
                <div className="text-xs text-gray-400 mt-1">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}