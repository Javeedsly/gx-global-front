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
      className="bg-slate-900 border-t border-purple-500/20 py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-gradient mb-4">Full Supplies</h3>
            <p className="text-gray-400">
              Your trusted partner for premium quality supplies and logistics solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-smooth">Wholesale Supplies</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-smooth">Logistics & Delivery</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-smooth">Inventory Management</a></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-smooth">About</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-smooth">Careers</a></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-smooth">Twitter</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-smooth">LinkedIn</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-smooth">GitHub</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-purple-500/20 pt-8"
          variants={itemVariants}
        >
          <p className="text-center text-gray-400">
            © 2026 GX Global. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
