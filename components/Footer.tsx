'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="bg-slate-900 border-t border-blue-500/20 py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <svg 
                className="w-6 h-6 text-blue-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                GX-GLOBAL
              </h3>
            </div>
            <p className="text-gray-400">
              Your trusted partner for global supply chain, premium quality products, and logistics solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-smooth">Global Sourcing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-smooth">Logistics & Delivery</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-smooth">Inventory Management</a></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-smooth">Our Partners</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-smooth">Careers</a></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-smooth">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-smooth">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-smooth">Contact Support</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-blue-500/20 pt-8"
          variants={itemVariants}
        >
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} GX-GLOBAL. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}