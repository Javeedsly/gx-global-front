'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const services = [
    {
      number: '01',
      title: 'Wholesale Products',
      description: 'Wide range of quality products at competitive prices. From office supplies to industrial equipment.',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      number: '02',
      title: 'Fast Logistics',
      description: 'Reliable and speedy delivery services across the region. Real-time tracking available.',
      color: 'from-purple-600 to-pink-600',
    },
    {
      number: '03',
      title: 'Inventory Management',
      description: 'Smart stock management solutions to optimize your supply chain and reduce costs.',
      color: 'from-green-600 to-emerald-600',
    },
    {
      number: '04',
      title: 'Dedicated Support',
      description: 'Expert customer service team available 24/7 for all your supply needs and inquiries.',
      color: 'from-orange-600 to-red-600',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-md text-white mb-4">Our Services</h2>
          <p className="text-gray-400 text-lg">
            Complete supply chain solutions for your business success
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-xl opacity-0 blur-lg group-hover:opacity-50 transition-all duration-300`}
              />
              <div className="relative glass-dark p-8 rounded-xl h-full">
                <motion.div
                  className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.color} mb-4`}
                  whileHover={{ scale: 1.2 }}
                >
                  {service.number}
                </motion.div>

                <h3 className="heading-sm text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>

                <motion.button
                  className="text-purple-400 font-semibold flex items-center gap-2 group/btn"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
