'use client';
import { motion } from 'framer-motion';

export default function Hero({ dict }: { dict: any }) {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="z-10">
            <h1 className="heading-lg text-white mb-6">
              {dict.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {dict.subtitle}
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              {dict.desc}
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                {dict.btn_products}
              </button>
              <button className="border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                {dict.btn_contact}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 border-t border-gray-800 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-400 mt-1">{dict.stats.products}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400 mt-1">{dict.stats.countries}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400 mt-1">{dict.stats.support}</div>
              </div>
            </div>
          </div>

          {/* Supplier Image */}
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8ed7c50a95?q=80&w=1470&auto=format&fit=crop" 
              alt="Global Logistics and Supply" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
}