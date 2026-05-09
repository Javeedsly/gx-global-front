'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="bg-slate-900 border-t border-emerald-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Image 
              src="/gx_2.png" 
              alt="GX Global Logo" 
              width={160} 
              height={45} 
              className="object-contain"
            />
          </div>
          <p className="text-gray-400 max-w-lg">{dict.desc}</p>
        </div>

        <div className="border-t border-emerald-500/20 pt-8 mt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} GX-GLOBAL. {dict.rights}</p>
        </div>
      </div>
    </footer>
  );
}