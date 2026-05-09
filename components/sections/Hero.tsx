'use client';
import { motion } from 'framer-motion';

export default function Hero({ dict }: { dict: any }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  return (
    <section className="min-h-[100svh] pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden flex items-center">
      {/* Animated Background Element */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-full md:w-1/2 h-[60%] md:h-full bg-emerald-50/70 -z-10 rounded-bl-[50px] md:rounded-bl-[100px]"
      />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            className="z-10 text-center lg:text-left mt-8 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="heading-lg mb-6">
              {dict.title} <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-500 inline-block mt-2">
                {dict.subtitle}
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
              {dict.desc}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary">
                {dict.btn_products}
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-secondary">
                {dict.btn_contact}
              </motion.button>
            </motion.div>

            <motion.div variants={containerVariants} className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 border-t border-gray-200 pt-8">
              {[
                { number: "10K+", label: dict.stats.products },
                { number: "50+", label: dict.stats.countries },
                { number: "24/7", label: dict.stats.support }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants} 
                  whileHover={{ y: -5 }} 
                  transition={{ type: "spring" }}
                  className="group cursor-pointer"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-900 group-hover:text-emerald-600 transition-colors duration-300">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1 font-medium group-hover:text-emerald-700 transition-colors duration-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating Image Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/15 border border-emerald-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8ed7c50a95?q=80&w=1470&auto=format&fit=crop" 
                alt="Global Logistics and Supply" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent"></div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}