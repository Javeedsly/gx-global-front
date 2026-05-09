'use client';
import { motion } from 'framer-motion';

export default function Hero({ dict }: { dict: any }) {
  return (
    <section className="min-h-[100svh] pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden flex items-center">
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-[60%] md:h-full bg-emerald-50/50 -z-10 rounded-bl-[50px] md:rounded-bl-[100px]"></div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="z-10 text-center lg:text-left mt-8 lg:mt-0">
            <h1 className="heading-lg mb-6">
              {dict.title} <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-600 inline-block mt-2">
                {dict.subtitle}
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
              {dict.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary">
                {dict.btn_products}
              </button>
              <button className="btn-secondary">
                {dict.btn_contact}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 border-t border-gray-200 pt-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-emerald-900">10K+</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">{dict.stats.products}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-emerald-900">50+</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">{dict.stats.countries}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-emerald-900">24/7</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">{dict.stats.support}</div>
              </div>
            </div>
          </div>

          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/10 border border-emerald-100">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8ed7c50a95?q=80&w=1470&auto=format&fit=crop" 
              alt="Global Logistics and Supply" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
}