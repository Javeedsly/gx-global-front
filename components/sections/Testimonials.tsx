'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const testimonials = [
    {
      name: 'Ahmad Rashid',
      role: 'General Manager, RetailCo',
      content:
        'Full Supplies transformed our procurement process. Quality products, reliable delivery, and excellent support. We save 30% on supply costs!',
      avatar: '👨‍💼',
      rating: 5,
    },
    {
      name: 'Leyla Mirza',
      role: 'Supply Manager, Industrial Solutions',
      content:
        'The product range and logistics efficiency are unmatched. Our inventory management became so much easier with their platform.',
      avatar: '👩‍💼',
      rating: 5,
    },
    {
      name: 'Karim Hasanov',
      role: 'Business Owner, Distribution Hub',
      content:
        'Partnering with Full Supplies was the best decision for our business. Professional team, quality assurance, and competitive pricing!',
      avatar: '👨‍🔬',
      rating: 5,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1), transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1), transparent 50%)',
          backgroundSize: '200% 200%',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-md text-white mb-4">What Our Customers Say</h2>
          <p className="text-gray-400 text-lg">
            Join thousands of satisfied businesses who trust Full Supplies
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: '0 25px 50px rgba(139, 92, 246, 0.2)',
              }}
            >
              {/* Stars */}
              <motion.div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ delay: i * 0.1, repeat: Infinity }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </motion.div>

              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.div
                  className="text-4xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
