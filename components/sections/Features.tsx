'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Features() {
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

  const features = [
    {
      icon: '📦',
      title: 'Diverse Product Range',
      description: 'Access over 10,000 quality products from trusted suppliers worldwide.',
    },
    {
      icon: '🚚',
      title: 'Global Delivery',
      description: 'Quick and reliable international shipping with real-time tracking capabilities.',
    },
    {
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'Wholesale prices with bulk discounts and special offers for regular customers.',
    },
    {
      icon: '✅',
      title: 'Quality Guarantee',
      description: 'All products certified and tested for quality and durability.',
    },
    {
      icon: '🤝',
      title: '24/7 Support',
      description: 'Dedicated customer service team ready to assist with any inquiries globally.',
    },
    {
      icon: '🔐',
      title: 'Secure Transactions',
      description: 'Safe and encrypted payment systems to protect your business information.',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden"
      id="features"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-md text-white mb-4">Why Choose GX-GLOBAL</h2>
          <p className="text-gray-400 text-lg">
            Premium products and reliable service for your global supply needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card group"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)',
              }}
            >
              <motion.div
                className="text-4xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="heading-sm text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-xl border border-purple-500/0 group-hover:border-purple-500/50"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}