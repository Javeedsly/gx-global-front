'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Testimonials({ dict }: { dict: any }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-md mb-4">{dict.title}</h2>
          <p className="text-gray-600 text-lg font-medium">{dict.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.items.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-900/5 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(6,78,59,0.08)' }}
            >
              <div className="text-5xl text-emerald-800/20 absolute top-4 right-6 font-serif">"</div>
              <p className="text-gray-700 mb-6 italic relative z-10 leading-relaxed">{testimonial.content}</p>
              <div>
                <div className="font-bold text-emerald-950">{testimonial.author}</div>
                <div className="text-sm font-semibold text-emerald-700">{testimonial.role}</div>
                <div className="text-sm text-gray-500 mt-1">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}