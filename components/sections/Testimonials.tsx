'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Testimonials({ dict }: { dict: any }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden" id="testimonials">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.items.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              className="glass-dark p-8 rounded-2xl relative"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl text-purple-500 mb-4">"</div>
              <p className="text-gray-300 mb-6 italic">{testimonial.content}</p>
              <div>
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-purple-400">{testimonial.role}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}