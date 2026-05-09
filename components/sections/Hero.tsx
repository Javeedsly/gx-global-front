'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 right-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <motion.h1
              className="heading-lg text-white mb-6"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            >
              Transform Your{' '}
              <span className="text-gradient">Business Today</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 mb-8"
              variants={itemVariants}
            >
              Unlock the power of innovation with our cutting-edge digital solutions.
              We help businesses scale, innovate, and thrive in the digital age.
            </motion.p>

            <motion.div
              className="flex gap-4 flex-wrap"
              variants={itemVariants}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-12"
              variants={itemVariants}
            >
              {[
                { number: '500+', label: 'Clients' },
                { number: '1000+', label: 'Projects' },
                { number: '50+', label: 'Awards' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="glass-dark p-4 rounded-lg"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative h-96 md:h-full"
            variants={itemVariants}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl opacity-20 blur-2xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="relative h-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl border border-purple-400/30 glass-dark flex items-center justify-center"
              variants={floatingVariants}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="w-48 h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-2xl opacity-40"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
