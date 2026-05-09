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

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden flex items-center">
      <motion.div
        className="max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="z-10">
            <h1 className="heading-lg text-white mb-6">
              Your Global Supply <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Solution Partner
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Dünyanın dörd bir yanından yüksək keyfiyyətli məhsullar və etibarlı logistika xidmətləri. GX-GLOBAL ilə ehtiyacınız olan hər şey bir yerdə.
            </p>

            <motion.div className="flex gap-4 flex-wrap">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Məhsullara Bax
              </button>
              <button className="border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Bizimlə Əlaqə
              </button>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 border-t border-gray-800 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-400 mt-1">Məhsul Çeşidi</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400 mt-1">Ölkəyə Çatdırılma</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400 mt-1">Dəstək</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Element - Supplier Image */}
          <motion.div
            className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20"
            variants={itemVariants}
          >
            {/* QEYD: Buradakı şəklin linkini öz real şəklinizlə əvəz edə bilərsiniz */}
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8ed7c50a95?q=80&w=1470&auto=format&fit=crop" 
              alt="Global Logistics and Supply" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}